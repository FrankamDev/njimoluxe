<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Devis extends Model
{
  protected $fillable = [
    'name',
    'email',
    'phone',
    'city',
    'project_type',
    'budget',
    'start_when',
    'how_know_us',
    'message',
    'urgent',
  ];
}
