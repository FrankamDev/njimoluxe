import { Head, usePage } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import Users from './Users/Index';
// import Devis from './Devis/Index';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    const { auth } = usePage().props;
    const { url } = usePage();

    const params = new URLSearchParams(url.split('?')[1]);
    const tab = params.get('tab');
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tableau de bord" />
             {!tab && <h1>Dashboard principal</h1>}

            {tab === 'users' && <Users />}
            {/* {tab === 'devis' && <Devis />} */}
        </AppLayout>
    );
}
