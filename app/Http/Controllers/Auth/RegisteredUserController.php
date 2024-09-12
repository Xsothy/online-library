<?php

namespace App\Http\Controllers\Auth;

use App\Data\UserData;
use App\Enum\KycStatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Service\UploadFileService;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Telegram\Bot\Exceptions\TelegramSDKException;

class RegisteredUserController extends Controller
{
    public function __construct(
        private readonly UploadFileService $uploadFileService,
    )
    {
    }

    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     * @throws TelegramSDKException
     */
    public function store(Request $request): RedirectResponse
    {
        DB::beginTransaction();
        $redirectTo = $request->get('redirect_to') ?? route('home', absolute: false);

        $request->validate(UserData::getValidationRules($request->all()));

        $user = User::create([
            ...$request->except(['idCardBack', 'idCardFront', 'studentCardFront', 'studentCardBack']),
            'kyc_status' => KycStatusEnum::pending()->value,
        ]);

        try {
            if ($request->hasFile('idCardFront')) {
                $this->uploadFileService->upload(
                    $request->file('idCardFront'),
                    $user,
                    'idCardFront',
                    $user->id
                );
            }
            if ($request->hasFile('idCardBack')) {
                $this->uploadFileService->upload(
                    $request->file('idCardBack'),
                    $user,
                    'idCardBack',
                    $user->id
                );
            }
            if ($request->hasFile('studentCardFront')) {
                $this->uploadFileService->upload(
                    $request->file('studentCardFront'),
                    $user,
                    'studentCardFront',
                    $user->id
                );
            }
            if ($request->hasFile('studentCardBack')) {
                $this->uploadFileService->upload(
                    $request->file('studentCardBack'),
                    $user,
                    'studentCardBack',
                    $user->id
                );
            }
        } catch (TelegramSDKException $e) {
            DB::rollBack();
            throw ValidationException::withMessages([
                'idCardFront' => $e->getMessage(),
                'idCardBack' => $e->getMessage(),
                'studentCardFront' => $e->getMessage(),
                'studentCardBack' => $e->getMessage(),
            ]);
        }

        event(new Registered($user));

        Auth::login($user);

        DB::commit();

        return redirect()->intended($redirectTo)->with([
            'success' => true,
            'message' => 'You have successfully registered!'
        ]);
    }
}
