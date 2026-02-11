<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
  protected $fillable = ['content', 'user_id', 'post_id', 'parent_id'];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function post()
  {
    return $this->belongsTo(Post::class);
  }

  public function parent()
  {
    return $this->belongsTo(Comment::class, 'parent_id');
  }

  public function replies()
  {
    return $this->hasMany(Comment::class, 'parent_id');
  }

  public function likes()
  {
    return $this->hasMany(CommentLike::class);
  }

  public function getIsLikedAttribute()
  {
    if (!auth()->check()) {
      return false;
    }
    return $this->likes()->where('user_id', auth()->id())->exists();
  }
}
