<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PaymentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'invoice_id' => ['required', 'exists:invoices'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
