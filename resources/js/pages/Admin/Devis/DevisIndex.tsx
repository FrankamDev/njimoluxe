// // resources/js/pages/Admin/Devis/DevisList.tsx    ← ou le chemin que tu veux
// import { useState } from 'react';
// import { format } from 'date-fns';

// // Icônes – si tu n'as pas lucide-react → commente les lignes avec <AlertCircle /> et <Eye />
// import { AlertCircle, Eye } from 'lucide-react';
// import { usePage } from '@inertiajs/react';

// interface Devis {
//   id: string | number;
//   nom: string;
//   email: string;
//   phone: string;
//   ville: string;
//   typeProjet: string;
//   message: string;
//   urgence: boolean;
//   budget?: number | string;
//   dateDebut?: string;     // ex: "2026-05-10"
//   connuPar: string;
//   createdAt: string;      // ex: "2026-02-20T14:30:00Z"
// }

// interface DevisListProps {
//   devis: Devis[];
// }

// export default function DevisIndex({bb}) {
//   // const { devis } = usePage().props;
//   return (
//     <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
//       {/* En-tête */}
//       <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
//         <h2 className="text-xl font-bold text-gray-900 dark:text-white">
//           Liste des devis reçus { devis?.length }
//         </h2>
//       </div>

//       {/* Contenu */}
//       {devis?.length === 0 ? (
//         <div className="py-16 text-center text-gray-500 dark:text-gray-400">
//           Aucun devis pour le moment...
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//             <thead className="bg-gray-50 dark:bg-gray-800">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                   Nom
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                   Téléphone
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                   Ville
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                   Type projet
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                   Urgence
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                   Budget
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                   Début souhaité
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                   Connu par
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                   Reçu le
//                 </th>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                   Action
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
//               {devis.map((item) => (
//                 <tr
//                   key={item.id}
//                   className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
//                     {item.nom}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
//                     {item.email}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
//                     {item.phone}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
//                     {item.ville}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
//                     {item.typeProjet}
//                   </td>

//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {item.urgence ? (
//                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300">
//                         <AlertCircle className="w-3.5 h-3.5 mr-1" />
//                         Urgent
//                       </span>
//                     ) : (
//                       <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
//                         Pas tres urgent
//                       </span>
//                     )}
//                   </td>

//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
//                     {item.budget
//                       ? typeof item.budget === 'number'
//                         ? `${item.budget.toLocaleString('fr-FR')} FCFA`
//                         : item.budget
//                       : '—'}
//                   </td>

//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
//                     {item.dateDebut
//                       ? format(new Date(item.dateDebut), 'dd MMM yyyy')
//                       : '—'}
//                   </td>

//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
//                     {item.connuPar || '—'}
//                   </td>

//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
//                     {format(new Date(item.createdAt), 'dd/MM/yyyy HH:mm')}
//                   </td>

//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
//                       <Eye className="w-5 h-5" />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }


import { usePage } from '@inertiajs/react';
import React from 'react'

const DevisIndex = () => {
  const { devis } = usePage().props;    return (
    <div>
      {devis.map(d => (
        <h1>{ d.name}</h1>
      ))}
    </div>
  );
}


export default DevisIndex
