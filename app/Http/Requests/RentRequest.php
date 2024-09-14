<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'book_id' => ['required', 'exists:books'],
            'created_by' => ['required', 'exists:users'],
            'updated_by' => ['required', 'exists:users'],
            'duration' => ['required', 'integer'],
            'received_at' => ['required', 'date'],
            'delivered_at' => ['required', 'date'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
