<?php

namespace App\Action;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

abstract class Action
{
    public function __construct()
    {
        //
    }

    /**
     * @throws ValidationException
     */
    public function __invoke(Request $request)
    {

        // Validate the incoming request
        $validatedData = $request->validate($this->rules());

        foreach ($validatedData as $key => $value) {
            $this->{$key} = $value;
        }

        return $this->handle();
    }

    abstract public function handle();

    /**
     * @throws ValidationException
     */
    public function rules(): array
    {
        return [];
    }
}
