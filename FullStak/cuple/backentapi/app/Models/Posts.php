<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Posts extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'user_id'
    ] ;

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comments::class);
    }

    public function likes(): HasMany
    {
        return $this->hasMany(Likes::class);
    }
}
