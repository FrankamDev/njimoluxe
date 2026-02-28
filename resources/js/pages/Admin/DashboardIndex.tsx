import React from 'react';
import { 
  FiPackage, 
  FiClock, 
  FiCheckCircle, 
  FiTrendingUp, 
  FiTool, 
  FiUser 
} from 'react-icons/fi'; // Pensez à installer react-icons

const DashboardIndex = () => {
  // Données factices pour l'exemple
  const stats = [
    { id: 1, label: 'Commandes en cours', value: '12', icon: <FiPackage />, color: 'text-emerald-600' },
    { id: 2, label: 'Projets terminés', value: '145', icon: <FiCheckCircle />, color: 'text-emerald-700' },
    { id: 3, label: 'Heures d\'atelier', value: '32h', icon: <FiClock />, color: 'text-zinc-800' },
    { id: 4, label: 'Chiffre d\'Affaires', value: '8 450 €', icon: <FiTrendingUp />, color: 'text-emerald-600' },
  ];

  const recentProjects = [
    { id: 1, name: "Table en chêne massif", client: "M. Durand", status: "En ponçage", progress: 75 },
    { id: 2, name: "Bibliothèque sur mesure", client: "Mme Martin", status: "Planification", progress: 20 },
    { id: 3, name: "Restauration buffet", client: "Hôtel Rivage", status: "Terminé", progress: 100 },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Atelier Menuiserie</h1>
          <p className="text-zinc-500">Bienvenue, voici l'activité de votre atelier aujourd'hui.</p>
        </div>
        <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm flex items-center gap-2 w-fit">
          <FiTool /> Nouveau Devis
        </button>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <div className={`text-2xl mb-4 ${item.color}`}>
              {item.icon}
            </div>
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">{item.label}</p>
            <p className="text-2xl font-bold text-zinc-900 mt-1">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Table des Projets Récents */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-zinc-100 flex justify-between items-center">
            <h2 className="font-bold text-zinc-800 text-lg">Projets prioritaires</h2>
            <button className="text-emerald-700 text-sm font-semibold hover:underline">Voir tout</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-zinc-50 text-zinc-400 uppercase text-xs">
                  <th className="px-6 py-4 font-semibold">Projet</th>
                  <th className="px-6 py-4 font-semibold">Client</th>
                  <th className="px-6 py-4 font-semibold">Progression</th>
                  <th className="px-6 py-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {recentProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-zinc-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-zinc-900">{project.name}</td>
                    <td className="px-6 py-4 text-zinc-600">{project.client}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-zinc-200 rounded-full h-2 w-24">
                          <div 
                            className="bg-emerald-600 h-2 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-bold text-zinc-700">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-zinc-400 hover:text-emerald-700">Modifier</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar / Stock & Alertes */}
        <div className="bg-zinc-900 text-white rounded-xl p-6 shadow-xl">
          <h2 className="font-bold text-lg mb-6 border-b border-zinc-700 pb-2">Inventaire & Alertes</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-md">
                <FiPackage size={20} />
              </div>
              <div>
                <p className="font-medium">Chêne brut</p>
                <p className="text-xs text-zinc-400">Stock faible : 2m³ restant</p>
                <div className="w-full bg-zinc-700 h-1 mt-2 rounded">
                  <div className="bg-orange-500 w-1/4 h-1 rounded"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-zinc-700 text-white rounded-md">
                <FiUser size={20} />
              </div>
              <div>
                <p className="font-medium">Nouveau message</p>
                <p className="text-xs text-zinc-400">Demande de devis pour une cuisine...</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-emerald-800/30 border border-emerald-500/30 rounded-lg">
              <p className="text-sm italic text-emerald-100">
                "Le bois a une âme, travaillez-le avec respect."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;

