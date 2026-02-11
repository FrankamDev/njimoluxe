<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\CommentLike;

class CommentController extends Controller
{
  public function store(Request $request)
  {
    $validated = $request->validate([
      'content' => 'required|string|max:1000',
      'post_id' => 'required|exists:posts,id',
      'parent_id' => 'nullable|exists:comments,id',
    ]);

    $request->user()->comments()->create($validated);

    return redirect()->back();
  }

  public function destroy(Comment $comment)
  {
    // Ensure user owns the comment
    if ($comment->user_id !== auth()->id()) {
      abort(403);
    }

    $comment->delete();

    return redirect()->back();
  }

  public function toggleLike(Comment $comment)
  {
    $user = auth()->user();

    $existingLike = $comment->likes()->where('user_id', $user->id)->first();

    if ($existingLike) {
      $existingLike->delete();
    } else {
      $comment->likes()->create(['user_id' => $user->id]);
    }

    return redirect()->back();
  }
}
