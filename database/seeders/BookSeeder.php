<?php

namespace Database\Seeders;

use App\Data\BookData;
use App\Data\CommentData;
use App\Data\GenreData;
use App\Data\InventoryData;
use App\Data\ReviewData;
use App\Data\UserData;
use App\Models\Book;
use App\Models\Genre;
use App\Models\Inventory;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    public function run(): void
    {
        $users = UserData::collect(User::all());
        $genres = GenreData::collect(Genre::all());
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
        $books->map(function (BookData $bookData) {
            $book = $bookData->toModel();
            $book->save();
            $book->genres()->attach($bookData->genres);
            $book->comments()->createMany(
                $bookData->comments->map(fn (CommentData $commentData) => $commentData->toModel())->toArray()
            );
            $book->reviews()->createMany(
                $bookData->reviews->map(fn (ReviewData $reviewData) => $reviewData->toModel())->toArray()
            );
            $bookData->inventories->map(function (InventoryData $inventoryData) use ($book) {
                $book->inventories()->save(
                    $inventoryData->toModel()
                );
            });
        });
    }
}
