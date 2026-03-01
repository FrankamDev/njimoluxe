import { Head, Link, usePage } from '@inertiajs/react';
import { User, Shield, Edit, Trash2 } from 'lucide-react';

export default function UsersIndex() {
    const { users } = usePage().props as any;

    return (
        <>
            <Head title="Utilisateurs" />

            <div className="min-h-screen bg-black text-white p-4">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-lg font-semibold text-green-400">
                            Gestion des utilisateurs
                        </h1>

                        <Link
                            href="/dashboard/users/create"
                            className="bg-green-500 hover:bg-green-600 text-black text-sm px-3 py-2 rounded-lg"
                        >
                            + Ajouter
                        </Link>

                        <div className="">
                            <h3>{ users.length}</h3>
                        </div>
                    </div>

                    {/* Liste */}
                    <div className="space-y-3">
                        {users.map((user: any) => (
                            <div
                                key={user.id}
                                className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-black">
                                        <User size={18} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium">
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-zinc-400">
                                            {user.email}
                                        </p>

                                        <div className="flex items-center gap-1 mt-1">
                                            <Shield size={14} className="text-green-400" />
                                            <span className="text-xs text-green-400">
                                                {user.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <Link
                                        href={`/dashboard/users/${user.id}/edit`}
                                        className="text-green-400 hover:text-green-300"
                                    >
                                        <Edit size={16} />
                                    </Link>

                                    <button
                                        className="text-red-500 hover:text-red-400"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}