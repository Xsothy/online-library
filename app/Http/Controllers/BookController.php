<?php

namespace App\Http\Controllers;

use App\Enum\NotificationStatusEnum;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function show(int $id)
    {

    }

    public function createRent(Request $request, int $id)
    {
        $book = Book::findOrFail($id);

        $request->validate([
            'duration' => 'required|int'
        ]);

        $book->rents()->create([
            'created_by' => auth()->user()->id,
            'duration' => $request->duration
        ]);

        // Create job auto add delivered schedule

        return redirect()->route('book.show', $id)->with([
            'message' => 'Book rent created successfully!',
            'status' => NotificationStatusEnum::success()
        ]);
    }

    public function createReserve(Request $request, int $id)
    {
        $book = Book::findOrFail($id);

        $book->reservations()->create([
            'created_by' => auth()->user()->id
        ]);

        // Register to queue job

        return redirect()->route('book.show', $id)->with([
            'message' => 'Book reserve created successfully!',
            'status' => NotificationStatusEnum::success()
        ]);
    }

    public function toggleWish()
    {
        $book = Book::findOrFail(request('id'));

        $wish = $book->wish();
        if ($wish->count() > 0) {
            $wish->delete();
        } else {
            $wish->create([
                'created_by' => auth()->user()->id
            ]);
        }

        return response()->json([
            'success' => true
        ]);
    }
}
