<?php

namespace App\Http\Controllers\Auth;

use App\Data\UserData;
use App\Enum\KycStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
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
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $redirectTo = $request->get('redirect_to') ?? route('home', absolute: false);

        $request->validate(UserData::getValidationRules($request->all()));

        if ($request->hasFile('idCardFront')) {
            $idCardFront = $request->file('idCardFront')->store();
        }
        if ($request->hasFile('idCardBack')) {
            $idCardBack = $request->file('idCardBack')->store();
        }
        if ($request->hasFile('studentCardFront')) {
            $studentCardFront = $request->file('studentCardFront')->store();
        }
        if ($request->hasFile('studentCardBack')) {
            $studentCardBack = $request->file('studentCardBack')->store();
        }

        $user = User::create([
            ...$request->except(['idCardBack', 'idCardFront', 'studentCardFront', 'studentCardBack']),
            'kyc_status' => KycStatusEnum::pending()->value,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect()->intended($redirectTo)->with([
            'success' => true,
            'message' => 'You have successfully registered!'
        ]);
    }
}
