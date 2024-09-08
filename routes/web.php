<?php

use App\Data\BookData;
use App\Data\UserData;
use App\Data\InventoryData;
use App\Data\GenreData;
use App\Data\CommentData;
use App\Data\ReviewData;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Carbon;
$users = collect([
    new UserData(1, 'John Doe', 'john@example.com'),
    new UserData(2, 'Jame Doe', 'jame@example.com')
]);
$genres = collect([
    new GenreData(1, 'Action', 'A genre of fiction.'),
    new GenreData(2, 'Adventure', 'A genre of fiction.'),
    new GenreData(3, 'Comedy', 'A genre of fiction.'),
    new GenreData(4, 'Drama', 'A genre of fiction.'),
    new GenreData(5, 'Fantasy', 'A genre of fiction.'),
    new GenreData(6, 'Horror', 'A genre of fiction.'),
    new GenreData(7, 'Mystery', 'A genre of fiction.'),
    new GenreData(8, 'Romance', 'A genre of fiction.'),
    new GenreData(9, 'Science Fiction', 'A genre of fiction.'),
]);
$books = collect([
    new BookData(
        1, 'To Kill a Mockingbird', 'A classic of modern American literature.', new Carbon('2022-01-01'),
        collect([
            new InventoryData(1, 1, 15.99, 2.99),
            new InventoryData(2, 2, 12.99, 2.49)
        ]),
        $genres->random(rand(1, 5)), collect([
            new CommentData(1, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(2, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(3, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(4, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(5, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
        ]),
        collect([
            new ReviewData(1, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(2, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(3, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(4, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(5, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
        ]),
        null,
    ),
    new BookData(
        2, 'The Catcher in the Rye', 'A classic of modern American literature.', new Carbon('2022-01-01'),
        collect([
            new InventoryData(1, 1, 15.99, 2.99),
            new InventoryData(2, 2, 12.99, 2.49)
        ]),
        $genres->random(rand(1, 5)), collect([
            new CommentData(1, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(2, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(3, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(4, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(5, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
        ]),
        collect([
            new ReviewData(1, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(2, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(3, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(4, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(5, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
        ]),
        null,
    ),
    new BookData(
        3, 'The Great Gatsby', 'A classic of modern American literature.', new Carbon('2022-01-01'),
        collect(),
        $genres->random(rand(1, 5)), collect([
            new CommentData(1, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(2, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(3, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(4, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(5, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
        ]),
        collect([
            new ReviewData(1, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(2, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(3, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(4, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(5, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
        ]),
        null,
    ),
    new BookData(
        4, 'The Lord of the Rings', 'A classic of modern American literature.', new Carbon('2022-01-01'),
        collect([
            new InventoryData(1, 1, 15.99, 2.99),
            new InventoryData(2, 2, 12.99, 2.49)
        ]),
        $genres->random(rand(1, 5)), collect([
            new CommentData(1, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(2, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(3, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(4, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(5, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
        ]),
        collect([
            new ReviewData(1, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(2, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(3, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(4, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(5, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
        ]),
        null,
    ),
    new BookData(
        5, 'The Hobbit', 'A classic of modern American literature.', new Carbon('2022-01-01'),
        collect([
            new InventoryData(1, 1, 15.99, 2.99),
            new InventoryData(2, 2, 12.99, 2.49)
        ]),
        $genres->random(rand(1, 5)), collect([
            new CommentData(1, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(2, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(3, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(4, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
            new CommentData(5, 'John Doe', $users->random(1)->first(), new Carbon('2022-01-01')),
        ]),
        collect([
            new ReviewData(1, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(2, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(3, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(4, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
            new ReviewData(5, rand(1, 5), $users->random(1)->first(), new Carbon('2022-01-01')),
        ]),
        null,
    )
]);

Route::inertia('/', 'Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
]);

Route::inertia('/book', 'Book/index', [
    'books' => $books,
    'genres' => $genres,
])->name('book.index');

Route::get('/book/{id}', function (int $id) use ($books) {
    $book = collect($books)->first(fn ($book) => $book->id === $id);
    if (!$book) {
        abort(404);
    }
    return inertia('Book/Show', [
        'book' => $book,
        'relatedBooks' => $books->random(3)
    ]);
})->name('book.show');

Route::get('/book/{id}/rent', function (int $id) use ($books) {
    $book = collect($books)->first(fn ($book) => $book->id === $id);
    if (!$book) {
        abort(404);
    }
    return inertia('Book/Rent', [
        'book' => $book,
    ]);
})->name('book.rent');

Route::get('/book/{id}/reserve', function (int $id) use ($books) {
    $book = collect($books)->first(fn ($book) => $book->id === $id);
    if (!$book) {
        abort(404);
    }
    return inertia('Book/Reserve', [
        'book' => $book,
    ]);
})->name('book.reserve');

Route::post('book/{id}/rent', [BookController::class, 'createRent'])->name('book.rent.create');
Route::post('book/{id}/reserve', [BookController::class, 'createReserve'])->name('book.reserve.create');

Route::middleware('auth')->group(function () {

    Route::get("/admin/{resource?}/{action?}/{id?}", [AdminController::class, 'index']);
    Route::resource('users', UserController::class);

    Route::inertia('/dashboard', 'Dashboard')->middleware(['verified'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
