<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pruduct extends Model
{
    use HasFactory;
    protected $fillable = [
        'pro_name',
        'price',
        'quantity',
        'description'
    ];
}
