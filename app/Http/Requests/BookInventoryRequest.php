<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookInventoryRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'book_id' => ['required', 'exists:books'],
            'inventory_id' => ['required', 'exists:inventories'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
