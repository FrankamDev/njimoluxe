<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
  protected $fillable = [
    'name',
    'email',
    'phone',
    'city',
    'project_type',
    'message',
    'urgent',
    'budget',
    'start_when',
    'how_know_us'
  ];
}
