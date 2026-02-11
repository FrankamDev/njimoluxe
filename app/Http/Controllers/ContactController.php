<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contact;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render("Contact/ContactIndex");
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validated = $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|email|max:255',
      'phone' => 'required|string|max:20',
      'city' => 'nullable|string|max:255',
      'project_type' => 'required|string|max:255',
      'message' => 'required|string',
      'urgent' => 'boolean',
    ]);

    $contact = Contact::create($validated);

    // Send email to admin (configure recipient in .env later)
    try {
      \Illuminate\Support\Facades\Mail::to('njimoluxe@gmail.com')->send(new ContactMail($contact));
    } catch (\Exception $e) {
      // Log error or handle gracefully
    }

    return redirect()->back()->with('success', 'Votre message a bien été envoyé !');
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    //
  }
}
