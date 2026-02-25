import { useState } from 'react';
import Users from '../Users/Index';
import Devis from '../Devis/Devis';
import Realisations from './Realisations/Index';
import Services from './Services/Index';
import Messages from './Messages/Index';
import Parametres from './Parametres/Index';
import { usePage } from '@inertiajs/react';

export default function DashboardAdmin() {
    const { url } = usePage(); // récupère l'URL actuelle
    let Component;

    if (url.includes('/users')) Component = Users;
    else if (url.includes('/admin/devis')) Component = Devis;
    else if (url.includes('/realisations')) Component = Realisations;
    else if (url.includes('/services')) Component = Services;
    else if (url.includes('/messages')) Component = Messages;
    else if (url.includes('/parametres')) Component = Parametres;
    else Component = () => <h1>Bienvenue Admin</h1>;

    return <Component  />;
}