<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            //
            'name' => 'required|max:50',
            'email' =>'required|email|unique:students,email',
            'password' => 'nullable|string|min:6|max:20',
            'phone' => 'nullable|numeric',
        ];
        return $rules;
    }
}
