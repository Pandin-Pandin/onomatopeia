<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['value'];

    public function onomatopeias()
    {
        return $this->belongsToMany(Onomatopeia::class);
    }
}