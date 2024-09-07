<?php

use App\Data\BookData;
use App\Data\UserData;
use App\Data\InventoryData;
use App\Data\GenreData;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

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
        1,
        'To Kill a Mockingbird',
        'A classic of modern American literature.',
        '1960-07-11',
        collect([
            new InventoryData(
                1,
                1,
                15.99,
                2.99,
                new UserData(1, 'John Doe', 'john@example.com', 'John', 'Doe', null, null),
                new UserData(1, 'John Doe', 'john@example.com', 'John', 'Doe', null, null),
                '2023-01-01 00:00:00',
                '2023-01-01 00:00:00',
            ),
            new InventoryData(
                2,
                2,
                12.99,
                2.49,
                new UserData(1, 'John Doe', 'john@example.com', 'John', 'Doe', null, null),
                new UserData(1, 'John Doe', 'john@example.com', 'John', 'Doe', null, null),
                '2023-01-01 00:00:00',
                '2023-01-01 00:00:00',
            )
        ]),
        $genres->random(rand(1, 5))
    ),
    new BookData(
        2,
        '1984',
        'A dystopian social science fiction novel.',
        '1949-06-08',
        collect([
            new InventoryData(
                3,
                3,
                9.99,
                1.99,
                new UserData(1, 'John Doe', 'john@example.com', 'John', 'Doe', null, null),
                new UserData(1, 'John Doe', 'john@example.com', 'John', 'Doe', null, null),
                '2023-01-01 00:00:00',
                '2023-01-01 00:00:00',
            ),
            new InventoryData(
                4,
                4,
                12.99,
                2.49,
                new UserData(1, 'John Doe', 'john@example.com', 'John', 'Doe', null, null),
                new UserData(1, 'John Doe', 'john@example.com', 'John', 'Doe', null, null),
                '2023-01-01 00:00:00',
                '2023-01-01 00:00:00',
            )
        ]),
        $genres->random(rand(1, 5))
    ),
    new BookData(
        3,
        'Pride and Prejudice',
        'A romantic novel of manners.',
        '1813-01-28',
        collect([
            new InventoryData(
                5,
                0,
                9.99,
                1.99,
                new UserData(1, 'John Doe', 'john@example.com', 'John', 'Doe', null, null),
                new UserData(1, 'John Doe', 'john@example.com', 'John', 'Doe', null, null),
                '2023-01-01 00:00:00',
                '2023-01-01 00:00:00',
            )
        ]),
        $genres->random(rand(1, 5))
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

Route::middleware('auth')->group(function () {

    Route::get("/admin/{resource?}/{action?}/{id?}", [AdminController::class, 'index']);
    Route::resource('users', UserController::class);

    Route::inertia('/dashboard', 'Dashboard')->middleware(['verified'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
