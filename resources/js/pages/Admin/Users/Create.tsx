import { useForm, Link } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post } = useForm({
        name: '',
        email: '',
        password: '',
        role: 'user',
    });

    function submit(e: any) {
        e.preventDefault();
        post('/admin/users');
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder="Nom"
                onChange={e => setData('name', e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                onChange={e => setData('email', e.target.value)}
            />

            <input
                type="password"
                placeholder="Mot de passe"
                onChange={e => setData('password', e.target.value)}
            />

            <select
                onChange={e => setData('role', e.target.value)}
            >
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>

            <button type="submit">Créer</button>
        </form>
    );
}