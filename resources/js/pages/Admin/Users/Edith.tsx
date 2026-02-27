import { useForm } from '@inertiajs/react';

export default function Edit({ user }: any) {
    const { data, setData, put } = useForm({
        name: user.name,
        email: user.email,
        role: user.role,
    });

    function submit(e: any) {
        e.preventDefault();
        put(`/admin/users/${user.id}`);
    }

    return (
        <form onSubmit={submit}>
            <input
                value={data.name}
                onChange={e => setData('name', e.target.value)}
            />

            <input
                value={data.email}
                onChange={e => setData('email', e.target.value)}
            />

            <select
                value={data.role}
                onChange={e => setData('role', e.target.value)}
            >
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>

            <button type="submit">Mettre à jour</button>
        </form>
    );
}