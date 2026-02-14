<?php

namespace App\Filament\Resources\Users\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class UsersTable
{
  public static function configure(Table $table): Table
  {
    return $table
      ->columns([
        TextColumn::make('id')->label('ID')->sortable(),
        TextColumn::make('name')->label('Nom')->sortable()->searchable(),
        TextColumn::make('email')->label('Email')->sortable()->searchable(),
        TextColumn::make('roles.name')
          ->label('Rôles')
          ->wrap()
          ->separator(', '),
        TextColumn::make('created_at')
          ->label('Créé le')
          ->dateTime('d/m/Y H:i'),
      ])
      ->filters([
        //
      ])
      ->recordActions([
        EditAction::make(),
        DeleteAction::make()
      ])
      ->toolbarActions([
        BulkActionGroup::make([
          DeleteBulkAction::make(),
        ]),
      ]);
  }
}
