<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Realisation extends Model
{
  protected $fillable = [
    'title',
    'slug',
    'category',
    'image',
    'description',
  ];

  public function getImageUrlAttribute()
  {
    return $this->image
      ? asset('storage/' . $this->image)
      : null;
  }
}
