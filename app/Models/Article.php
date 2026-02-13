<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Article extends Model
{
  use HasFactory;

  protected $fillable = [
    'user_id',
    'title',
    'image',
    'slug',
    'excerpt',
    'content',
    'is_published',
    'published_at',
  ];

  protected $casts = [
    'is_published'   => 'boolean',
    'published_at'   => 'datetime',
  ];

  // Relations
  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  public function categories(): BelongsToMany
  {
    return $this->belongsToMany(Category::class);
  }

  public function tags(): BelongsToMany
  {
    return $this->belongsToMany(Tag::class);
  }

  public function comments(): HasMany
  {
    return $this->hasMany(Comment::class);
  }

  // Scopes utiles
  public function scopePublished($query)
  {
    return $query->where('is_published', true)
      ->where(function ($q) {
        $q->whereNull('published_at')
          ->orWhere('published_at', '<=', now());
      });
  }

  public function scopeDraft($query)
  {
    return $query->where('is_published', false);
  }

  // Accesseur pour un extrait court (optionnel)
  public function getShortExcerptAttribute(): string
  {
    return substr(strip_tags($this->excerpt ?? $this->content), 0, 150) . '...';
  }
}
