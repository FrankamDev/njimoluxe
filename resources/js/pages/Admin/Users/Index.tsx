import { useState } from 'react';
import { useForm, router } from '@inertiajs/react';

export default function Index({ users }: any) {

    const [editingUser, setEditingUser] = useState<any>(null);
    const [showForm, setShowForm] = useState(false);

    const { data, setData, post, put, reset } = useForm({
        name: '',
        email: '',
        password: '',
        role: 'user',
    });

    function openCreate() {
        reset();
        setEditingUser(null);
        setShowForm(true);
    }

    function openEdit(user: any) {
        setEditingUser(user);
        setData({
            name: user.name,
            email: user.email,
            password: '',
            role: user.role,
        });
        setShowForm(true);
    }

    function submit(e: any) {
        e.preventDefault();

        if (editingUser) {
            put(`/admin/users/${editingUser.id}`, {
                onSuccess: () => setShowForm(false)
            });
        } else {
            post('/admin/users', {
                onSuccess: () => setShowForm(false)
            });
        }
    }

    function deleteUser(id: number) {
        router.delete(`/admin/users/${id}`);
    }

    return (
        <div>

            <button onClick={openCreate}>
                Ajouter utilisateur
            </button>

            {users.map((user: any) => (
                <div key={user.id}>
                    <p>{user.name} - {user.role}</p>

                    <button onClick={() => openEdit(user)}>
                        Modifier
                    </button>

                    <button onClick={() => deleteUser(user.id)}>
                        Supprimer
                    </button>
                </div>
            ))}

            {showForm && (
                <div>
                    <form onSubmit={submit}>
                        <input
                            placeholder="Nom"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />

                        <input
                            placeholder="Email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                        />

                        {!editingUser && (
                            <input
                                type="password"
                                placeholder="Mot de passe"
                                onChange={e => setData('password', e.target.value)}
                            />
                        )}

                        <select
                            value={data.role}
                            onChange={e => setData('role', e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>

                        <button type="submit">
                            {editingUser ? 'Modifier' : 'Créer'}
                        </button>

                        <button type="button" onClick={() => setShowForm(false)}>
                            Annuler
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}