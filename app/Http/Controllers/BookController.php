<?php

namespace App\Http\Controllers;

class BookController extends Controller
{
    public function show(int $id)
    {

    }

    public function createRent(int $id)
    {
        return redirect()->route('book.show', $id)->with([
            'message' => 'Book rent created successfully!',
            'level' => 'success'
        ]);
    }

    public function createReserve(int $id)
    {
        return redirect()->route('book.show', $id)->with([
            'message' => 'Book reserve created successfully!',
            'level' => 'success'
        ]);
    }
}
