<?php

namespace App\Filament\Resources\Articles\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class ArticleForm
{
  public static function configure(Schema $schema): Schema
  {
    return $schema
      ->components([

        // Select::make('user_id')
        //   ->relationship('user', 'name')
        //   ->searchable(),
        TextInput::make('title')
          ->required()
          ->maxLength(255)
          ->live(onBlur: true)
          ->afterStateUpdated(
            fn($state, callable $set) =>
            $set('slug', Str::slug($state))
          ),

        TextInput::make('slug')
          ->required()
          ->unique(ignoreRecord: true)
          ->maxLength(255),

        FileUpload::make('image')
          ->image()
          ->disk('public')
          ->nullable(),

        Textarea::make('excerpt')
          ->rows(3)
          ->maxLength(500)
          ->nullable(),

        RichEditor::make('content')
          ->required()
          ->columnSpanFull(),

        Toggle::make('is_published')
          ->label('Publié')
          ->default(false)
          ->live(),

        DateTimePicker::make('published_at')
          ->visible(fn($get) => $get('is_published'))
          ->nullable(),

      ])
      ->columns(2);
  }
}
