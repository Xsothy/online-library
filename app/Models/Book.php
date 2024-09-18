<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'author_id',
        'publishedAt',
    ];

    protected function casts(): array
    {
        return [
            'publishedAt' => 'datetime',
        ];
    }

    public function rents(): HasMany
    {
        return $this->hasMany(Rent::class);
    }

    public function rent(): HasOne
    {
        return $this->rents()->where('created_by', auth()->user()->id)->one();
    }

    public function reservations(): HasMany
    {
        return $this->hasMany(Reservation::class);
    }

    public function reservation(): HasOne
    {
        return $this->reservations()->where('created_by', auth()->user()->id)->one();
    }

    public function wishes(): HasMany
    {
        return $this->hasMany(Wish::class);
    }

    public function wish(): HasOne
    {
        return $this->wishes()->where('created_by', auth()->user()->id)->one();
    }
}
