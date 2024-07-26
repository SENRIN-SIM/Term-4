<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Phones extends Model
{
    use HasFactory;
    protected $fillable = [
        'brand',
        'model',
        'user_id'
    ];

    public function users():BelongsTo 
    {
        return $this->belongsTo(User::class);
    }
}
