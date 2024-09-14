<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InvoiceRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'rent_id' => ['required', 'exists:rents'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
