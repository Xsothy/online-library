<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InventoryRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'quantity' => ['required', 'integer'],
            'price' => ['required', 'numeric'],
            'rent_price' => ['required', 'numeric'],
            'created_by' => ['nullable', 'exists:users'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
