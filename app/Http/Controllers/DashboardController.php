<?php

namespace App\Http\Controllers;

use App\Models\Devis;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
  public function index(Request $request)
{
    $section = $request->query('section', 'home');
    $data = ['section' => $section];

    if ($section === 'devis') {
        $devis = Devis::latest()->get()->map(function ($item) {
            return [
                'id'         => $item->id,
                'nom'        => $item->name,
                'email'      => $item->email,
                'phone'      => $item->phone,
                'ville'      => $item->city ?? '',
                'typeProjet' => $item->project_type,
                'message'    => $item->message,
                'urgence'    => $item->urgent,
                'budget'     => $item->budget,
                'dateDebut'  => $item->start_when,
                'connuPar'   => $item->how_know_us ?? '',
                'createdAt'  => $item->created_at->toIso8601String(),
            ];
        });
        $data['devis'] = $devis;
    }

    return Inertia::render('Dashboard', $data);
}

 
    public function users()
    {
        return Inertia::render('Dashboard', [
            'section' => 'users',
            'users' => User::paginate(15),  
            'bb' => 'je me cocentre sur ma vie, juste 5ans',
        ]);
    }


  public function devis()
    {
        return Inertia::render('Dashboard', [
            'section' => 'devis',
            'devis' => Devis::all()  
        
        ]);
    }
}







// namespace App\Http\Controllers;

// use App\Models\Devis;
// use Illuminate\Http\Request;
// use Inertia\Inertia;

// class DashboardController extends Controller
// {
//     public function index(Request $request)
//     {
//         $section = $request->query('section', 'home');

//         $data = ['section' => $section];

//         if ($section === 'devis') {
//             $devis = Devis::latest()->get()->map(function ($item) {
//                 return [
//                     'id'         => $item->id,
//                     'nom'        => $item->name,
//                     'email'      => $item->email,
//                     'phone'      => $item->phone,
//                     'ville'      => $item->city ?? '',
//                     'typeProjet' => $item->project_type,
//                     'message'    => $item->message,
//                     'urgence'    => $item->urgent,
//                     'budget'     => $item->budget,
//                     'dateDebut'  => $item->start_when,
//                     'connuPar'   => $item->how_know_us ?? '',
//                     'createdAt'  => $item->created_at->toIso8601String(),
//                 ];
//             });

//             $data['devis'] = $devis;
//         }

//         return Inertia::render('Dashboard', $data);
//     }
// }