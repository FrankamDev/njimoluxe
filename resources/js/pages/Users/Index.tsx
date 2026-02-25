import AdminLayout from '../';

export default function Users() {
    return (
        <div>
            <h1>Gestion des utilisateurs</h1>
        </div>
    );
}

Users.layout = (page: any) => <AdminLayout children={page} />;