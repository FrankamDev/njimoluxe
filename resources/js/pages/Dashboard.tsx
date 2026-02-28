// resources/js/Pages/Dashboard.tsx
import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import DashboardIndex from './Admin/DashboardIndex';
import DevisIndex from './Admin/Devis/DevisIndex';
import UsersIndex from './Admin/Users/UsersIndex';



export default function Dashboard() {
    const { devis } = usePage().props as { devis: Devis[] };

    const { section = 'home' } = usePage().props as { section?: string };

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
    ];

    if (section === 'users') {
        breadcrumbs.push({ title: 'Utilisateurs', href: '#' });
    } else if (section === 'devis') {
        breadcrumbs.push({ title: 'Demandes de devis', href: '#' });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head 
                title={
                    section === 'users' ? "Utilisateurs - Dashboard" :
                    section === 'devis' ? "Devis - Dashboard" :
                    "Tableau de bordddc"
                } 
            />

            <div className="p-4 md:p-6 lg:p-8 min-h-[calc(100vh- theme('spacing.16')-theme('spacing.20'))]">

                {section === 'home' && <DashboardIndex />}

                {section === 'users' && (
                    <>
                        <UsersIndex />
                        <h2 className="text-2xl font-bold text-zinc-800">user</h2>
                    </>
                )}

                {section === 'devis' && (
                    <>
                        <h2 className="text-2xl font-bold text-zinc-800">Tous les devis</h2>
                        {/* <DevisIndex devis={devis}/> */}
ok

                     
                        
                    </>
                )}

                {/* Fallback si section inconnue */}
                {!['home', 'users', 'devis'].includes(section) && (
                    <div className="text-center py-12 text-zinc-500">
                        Section non reconnue
                    </div>
                )}
            </div>
        </AppLayout>
    );
}