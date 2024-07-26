<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Likes extends Model
{
    use HasFactory;
    protected $fillable = [
        'like_number',
        'user_id',
        'post_id',
        'comment_id'
    ] ;

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function comments(): BelongsTo
    {
        return $this->belongsTo(Comments::class);
    }
}
