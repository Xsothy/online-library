<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => ['required'],
            'description' => ['nullable'],
            'author_id' => ['nullable', 'integer'],
            'publishedAt' => ['required', 'date'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
