<?php

namespace App\Filament\Resources\Users\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class UserForm
{
  public static function configure(Schema $schema): Schema
  {
    return $schema
      ->components([
        TextInput::make('name')
          ->required()
          ->label('Nom'),

        TextInput::make('email')
          ->email()
          ->required()
          ->label('Email'),

        TextInput::make('password')
          ->password()
          ->dehydrateStateUsing(fn($state) => $state ? bcrypt($state) : null)
          ->label('Mot de passe'),

        Select::make('roles')
          ->multiple()
          ->relationship('roles', 'name')
          ->preload()
          ->label('Rôles'),
      ]);
  }
}
