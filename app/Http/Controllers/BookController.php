<?php

namespace App\Http\Controllers;

use App\Enum\NotificationStatusEnum;

class BookController extends Controller
{
    public function show(int $id)
    {

    }

    public function createRent(int $id)
    {
        return redirect()->route('book.show', $id)->with([
            'message' => 'Book rent created successfully!',
            'status' => NotificationStatusEnum::success()
        ]);
    }

    public function createReserve(int $id)
    {
        return redirect()->route('book.show', $id)->with([
            'message' => 'Book reserve created successfully!',
            'status' => NotificationStatusEnum::success()
        ]);
    }
}
