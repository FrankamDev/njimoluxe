<?php

namespace App\Filament\Resources\Articles\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ArticlesTable
{
  public static function configure(Table $table): Table
  {
    return $table
      ->columns([
        ImageColumn::make('image')
          ->label('Image')
          ->square()
          ->size(50),

        TextColumn::make('title')
          ->searchable()
          ->sortable()
          ->limit(40),

        TextColumn::make('user.name')
          ->label('Auteur')
          ->sortable()
          ->searchable(),

        TextColumn::make('slug')
          ->copyable()
          ->toggleable(isToggledHiddenByDefault: true),

        IconColumn::make('is_published')
          ->label('Publié')
          ->boolean(),

        TextColumn::make('published_at')
          ->dateTime('d M Y H:i')
          ->sortable()
          ->toggleable(),

        TextColumn::make('created_at')
          ->dateTime('d M Y')
          ->sortable()
          ->toggleable(isToggledHiddenByDefault: true),
      ])
      ->filters([
        //
      ])
      ->recordActions([
        EditAction::make(),
        DeleteAction::make(),
      ])
      ->toolbarActions([
        BulkActionGroup::make([
          DeleteBulkAction::make(),
        ]),
      ]);
  }
}
