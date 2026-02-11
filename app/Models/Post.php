<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
  use HasFactory;

  protected $fillable = [
    'title',
    'slug',
    'excerpt',
    'content',
    'image',
    'category',
    'meta_title',
    'meta_description',
    'featured',
    'published_at',
    'user_id',
  ];

  protected $casts = [
    'published_at' => 'datetime',
    'featured' => 'boolean',
  ];

  public function comments()
  {
    return $this->hasMany(Comment::class);
  }
  public function user()
  {
    return $this->belongsTo(User::class);
  }
  public function getImageUrlAttribute()
  {
    return $this->image
      ? route('blog.image', basename($this->image))
      : null;
  }
  protected static function booted()
  {
    static::creating(function ($post) {
      $post->slug = $post->slug ?: Str::slug($post->title);
    });

    static::updating(function ($post) {
      if ($post->isDirty('title')) {
        $post->slug = Str::slug($post->title);
      }
    });
  }
}
