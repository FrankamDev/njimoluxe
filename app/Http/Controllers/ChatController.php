<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
  public function handle(Request $request)
  {
    $messages = $request->input('messages', []);

    // Ajoute un system prompt personnalisé pour NJIMOLUXE
    $systemPrompt = [
      'role' => 'system',
      'content' => "Tu es un assistant commercial de NJIMOLUXE, marque de décoration et ameublement haut de gamme au Cameroun. Sois chaleureux, professionnel, concis, orienté vente et positif. Réponds toujours en français. Propose des solutions luxe et personnalisées quand c'est pertinent."
    ];

    try {
      $response = Http::withHeaders([
        'Authorization' => 'Bearer ' . config('services.groq.api_key'),
        'Content-Type' => 'application/json',
      ])->post('https://api.groq.com/openai/v1/chat/completions', [
        'model' => 'mixtral-8x7b-32768', // gratuit et rapide sur Groq
        'messages' => [$systemPrompt, ...$messages],
        'temperature' => 0.7,
        'max_tokens' => 500,
        'top_p' => 0.9,
      ]);

      if (!$response->successful()) {
        return response()->json(['error' => $response->json()['error'] ?? 'Erreur API'], 500);
      }

      $reply = $response->json()['choices'][0]['message']['content'] ?? 'Désolé, je n’ai pas compris...';

      return response()->json(['reply' => $reply]);
    } catch (\Exception $e) {
      return response()->json(['error' => 'Erreur serveur : ' . $e->getMessage()], 500);
    }
  }
}
