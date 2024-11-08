<?php

use App\Data\BookData;
use App\Data\UserData;
use App\Data\InventoryData;
use App\Data\GenreData;
use App\Data\CommentData;
use App\Data\ReviewData;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ProfileController;
use App\Providers\ActionRouteServiceProvider;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Admin\ResourceIndexController;
use App\Http\Controllers\Admin\ResourceCreateController;
use App\Http\Controllers\Admin\ResourceStoreController;
use App\Http\Controllers\Admin\ResourceShowController;
use App\Http\Controllers\Admin\ResourceEditController;
use App\Http\Controllers\Admin\ResourceUpdateController;
use App\Http\Controllers\Admin\ResourceDestroyController;

$users = collect([
    new UserData(1, 'John Doe', 'john@example.com'),
    new UserData(2, 'Jame Doe', 'jame@example.com'),
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
        1, 'To Kill a Mockingbird',
        'A classic of modern American literature. It is a novel about a young boy named Jem, who is wrongfully accused of a crime he did not commit. He is then wrongly convicted and imprisoned, and his family is torn apart by the trial and its aftermath.',
        'Harper Lee',
        new Carbon('2022-01-01'),
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
        2, 'The Catcher in the Rye',
        'A classic of modern American literature. The novel follows the life of Holden Caulfield, a teenage boy who is struggling to find his place in the world.',
        'J.D. Salinger',
        new Carbon('2022-01-01'),
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
        3, 'The Great Gatsby',
        'A classic of modern American literature. Set in the 1920s, the novel follows the life of Jay Gatsby, a wealthy and mysterious man who is obsessed with the idea of love.',
        'F. Scott Fitzgerald',
        new Carbon('2022-01-01'),
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
        4, 'The Lord of the Rings',
        'A classic of modern American literature. It is a novel about hobbits, dwarves, and wizards, set in Middle-earth, a fictional world created by J.R.R. Tolkien.',
        'J.R.R. Tolkien',
        new Carbon('2022-01-01'),
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
        5, 'The Hobbit',
        'A classic of modern American literature. It is a novel about hobbits, dwarves, and wizards, set in Middle-earth, a fictional world created by J.R.R. Tolkien.',
        'J.R.R. Tolkien',
        new Carbon('2022-01-01'),
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

Route::inertia('/', 'Home', [
    'recommendations' => $books->random(5),
    'popularAuthors' => [],
    'popularBooks' => $books->random(5),
    'genres' => $genres,
])->name('home');
//Route::inertia('/', 'Welcome');

Route::group(['prefix' => 'book'], function () use ($books, $genres) {
    Route::inertia('/', 'Book/index', [
        'books' => $books,
        'genres' => $genres,
    ])->name('book.index');
    Route::get('/{id}', function (int $id) use ($books) {
        $book = collect($books)->first(fn($book) => $book->id === $id);
        if (!$book) {
            abort(404);
        }
        return inertia('Book/Show', [
            'book' => $book,
            'relatedBooks' => $books->random(3)
        ]);
    })->name('book.show');
    Route::group(['middleware' => 'auth'], function () use ($books) {
        Route::get('/{id}/rent', function (int $id) use ($books) {
            $book = collect($books)->first(fn($book) => $book->id === $id);
            if (!$book) {
                abort(404);
            }
            return inertia('Book/Rent', [
                'book' => $book,
            ]);
        })->name('book.rent');
        Route::get('/{id}/reserve', function (int $id) use ($books) {
            $book = collect($books)->first(fn($book) => $book->id === $id);
            if (!$book) {
                abort(404);
            }
            return inertia('Book/Reserve', [
                'book' => $book,
            ]);
        })->name('book.reserve');
        Route::post('/{id}/rent', [BookController::class, 'createRent'])->name('book.rent.create');
        Route::post('/{id}/reserve', [BookController::class, 'createReserve'])->name('book.reserve.create');
        Route::post('/{id}/wish', [BookController::class, 'toggleWish'])->name('book.wish.toggle');
    });
});

Route::group(['prefix' => 'genre'], function () use ($genres) {
    Route::inertia('/', 'Genre', [
        'genres' => $genres,
    ])->name('genre');
});

Route::middleware('auth')->group(function () {
    Route::inertia('/dashboard', 'Dashboard')->middleware(['verified'])->name('dashboard');
    Route::group(['prefix' => 'profile'], function () {
        Route::get('/', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');
        Route::get('/wishlist', [ProfileController::class, 'wishlist'])->name('profile.wishlist');
        Route::get('/payment-history', [ProfileController::class, 'paymentHistory'])->name('profile.payment-history');
        Route::get('/reservations', [ProfileController::class, 'reservations'])->name('profile.reservations');
        Route::get('/rent-history', [ProfileController::class, 'rentHistory'])->name('profile.rent-history');
    });

    Route::group(['prefix' => 'admin'], function () {
        Route::get('/', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('admin.dashboard');
    });
});

Route::middleware(['auth'])->group(function () {
    (new ActionRouteServiceProvider(app()))->boot();
});

Route::middleware(['auth', \App\Http\Middleware\AdminMiddleware::class])
    ->prefix('admin')
    ->group(function () {
        Route::get('/', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('admin.dashboard');
        Route::get('/{resource}', ResourceIndexController::class)->name('admin.resource.index');
        Route::get('/{resource}/create', ResourceCreateController::class)->name('admin.resource.create');
        Route::post('/{resource}/store', ResourceStoreController::class)->name('admin.resource.store');
        Route::get('/{resource}/{resourceId}', ResourceShowController::class)->name('admin.resource.show');
        Route::get('/{resource}/{resourceId}/edit', ResourceEditController::class)->name('admin.resource.edit');
        Route::put('/{resource}/{resourceId}', ResourceUpdateController::class)->name('admin.resource.update');
        Route::delete('/{resource}/{resourceId}', ResourceDestroyController::class)->name('admin.resource.destroy');
    });

require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';
