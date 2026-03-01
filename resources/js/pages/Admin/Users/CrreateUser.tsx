import { Head, useForm, Link } from '@inertiajs/react';

export default function CreateUser() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        role: 'user',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/users');
    };

    return (
        <>
            <Head title="Créer utilisateur" />

            <div className="min-h-screen bg-black text-white p-4">
                <div className="max-w-md mx-auto">

                    <h1 className="text-lg font-semibold text-green-400 mb-6">
                        Nouvel utilisateur
                    </h1>

                    <form
                        onSubmit={submit}
                        className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4"
                    >
                        {/* Nom */}
                        <div>
                            <label className="text-sm text-zinc-400">Nom</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full mt-1 bg-black border border-zinc-700 rounded-lg p-2 text-sm focus:border-green-500 outline-none"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm text-zinc-400">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full mt-1 bg-black border border-zinc-700 rounded-lg p-2 text-sm focus:border-green-500 outline-none"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Mot de passe */}
                        <div>
                            <label className="text-sm text-zinc-400">Mot de passe</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full mt-1 bg-black border border-zinc-700 rounded-lg p-2 text-sm focus:border-green-500 outline-none"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Rôle */}
                        <div>
                            <label className="text-sm text-zinc-400">Rôle</label>
                            <select
                                value={data.role}
                                onChange={(e) => setData('role', e.target.value)}
                                className="w-full mt-1 bg-black border border-zinc-700 rounded-lg p-2 text-sm focus:border-green-500 outline-none"
                            >
                                <option value="user">Utilisateur</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        {/* Boutons */}
                        <div className="flex gap-3 pt-2">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-green-500 hover:bg-green-600 text-black text-sm px-4 py-2 rounded-lg w-full"
                            >
                                Créer
                            </button>

                            <Link
                                href="/dashboard/users"
                                className="border border-zinc-700 text-sm px-4 py-2 rounded-lg w-full text-center"
                            >
                                Annuler
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}