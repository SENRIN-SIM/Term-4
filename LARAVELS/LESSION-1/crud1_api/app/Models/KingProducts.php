<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KingProducts extends Model
{
    use HasFactory;
    protected $fillable = [
        'kind_name',
    ];
}
