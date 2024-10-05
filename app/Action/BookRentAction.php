<?php

namespace App\Action;

use App\Data\UserData;
use App\Enum\NotificationStatusEnum;
use App\Models\Book;
use App\Models\Rent;
use Illuminate\Http\Request;

class BookRentAction extends Action
{
    public int $id;
    public int $duration;

    public function handle()
    {
        $book = Book::findOrFail($this->id);

        $book->rents()->create([
            'created_by' => auth()->user()->id,
            'duration' => $this->duration
        ]);

        return redirect()->route('book.show', $this->id)->with([
            'message' => 'Book rent created successfully!',
            'status' => NotificationStatusEnum::success()
        ]);
    }

    public function rules(): array
    {
        return [
            'id' => 'required|exists:books,id',
            'duration' => 'required|int|min:1',
        ];
    }
}
