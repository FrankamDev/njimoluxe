import { format } from 'date-fns';
import { AlertCircle, Eye } from 'lucide-react';
import { usePage } from '@inertiajs/react';

interface Devis {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  project_type: string;
  message: string;
  urgent: boolean;
  budget?: number | string;
  start_when?: string;
  how_know_us?: string;
  created_at: string;
}

export default function DevisIndex() {
  const { devis } = usePage().props as { devis: Devis[] };

  const formatDate = (date?: string, pattern = 'dd/MM/yyyy HH:mm') => {
    if (!date) return '—';
    const parsed = new Date(date);
    if (isNaN(parsed.getTime())) return '—';
    return format(parsed, pattern);
  };

  return (
    <div className="min-h-screen bg-black p-3 sm:p-6">
      
      <div className="max-w-7xl mx-auto bg-zinc-900 border border-green-600/30 rounded-xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="px-4 sm:px-6 py-4 border-b border-green-600/20">
          <h2 className="text-lg sm:text-xl font-semibold text-green-500">
            Liste des devis ({devis?.length || 0})
          </h2>
        </div>

        {/* Empty */}
        {(!devis || devis.length === 0) ? (
          <div className="py-12 text-center text-gray-400 text-sm">
            Aucun devis pour le moment
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs sm:text-sm">

              <thead className="bg-zinc-800 text-green-400 uppercase tracking-wider">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left">Nom</th>
                  <th className="px-3 sm:px-6 py-3 text-left">Email</th>
                  <th className="px-3 sm:px-6 py-3 text-left">Ville</th>
                  <th className="px-3 sm:px-6 py-3 text-left">Projet</th>
                  <th className="px-3 sm:px-6 py-3 text-left">Urgence</th>
                  <th className="px-3 sm:px-6 py-3 text-left">Budget</th>
                  <th className="px-3 sm:px-6 py-3 text-left">Reçu</th>
                  <th className="px-3 sm:px-6 py-3 text-right">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-green-600/10">

                {devis.map((d) => (
                  <tr
                    key={d.id}
                    className="hover:bg-zinc-800 transition"
                  >

                    <td className="px-3 sm:px-6 py-3 text-white font-medium">
                      {d.name}
                    </td>

                    <td className="px-3 sm:px-6 py-3 text-gray-400">
                      {d.email}
                    </td>

                    <td className="px-3 sm:px-6 py-3 text-gray-400">
                      {d.city}
                    </td>

                    <td className="px-3 sm:px-6 py-3 text-gray-400">
                      {d.project_type}
                    </td>

                    <td className="px-3 sm:px-6 py-3">
                      {d.urgent ? (
                        <span className="inline-flex items-center text-red-400 text-xs">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Urgent
                        </span>
                      ) : (
                        <span className="text-gray-500 text-xs">
                          Pas tres urgent
                        </span>
                      )}
                    </td>

                    <td className="px-3 sm:px-6 py-3 text-gray-400">
                      {d.budget
                        ? typeof d.budget === 'number'
                          ? `${d.budget.toLocaleString('fr-FR')} FCFA`
                          : d.budget
                        : '—'}
                    </td>

                    <td className="px-3 sm:px-6 py-3 text-gray-400">
                      {formatDate(d.created_at)}
                    </td>

                    <td className="px-3 sm:px-6 py-3 text-right">
                      <button className="p-2 rounded-lg bg-green-600/10 hover:bg-green-600/20 text-green-400 transition">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}