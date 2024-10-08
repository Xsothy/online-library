<?php

namespace App\Http\Controllers;

use App\Data\UserData;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $query = User::query();

        if(request('_start')) $query->skip(request('_start'));
        if(request('_end')) $query->take(request('_end'));

        return response()->json(UserData::collect($query->get()))->header('X-Total-Count', User::count());
    }

    public function store(Request $request)
    {
    }

    public function show(User $user)
    {
        return response()->json($user);
    }

    public function update(Request $request, User $user)
    {
    }

    public function destroy(User $user)
    {
    }
}
