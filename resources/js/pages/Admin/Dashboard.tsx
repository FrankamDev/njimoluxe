import { useState } from 'react';

import Devis from "../Admin/Devis/DevisIndex";
import Users from "../Admin/Users/IndexIndex";
import UsersIndex from './Users/UsersIndex.tsx';
import DevisIndex from '../Admin/Devis/DevisIndex';

export default function Dashboard() {

    const [section, setSection] = useState('users');

    return (
        <div className="flex">

            {/* Sidebar */}
            <div>
                <button onClick={() => setSection('users')}>
                    Utilisateurs
                </button>

                <button onClick={() => setSection('devis')}>
                    Devis
                </button>
            </div>

            {/* Contenu dynamique */}
            <div>
                {section === 'users' && <UsersIndex />}
                {section === 'devis' && <DevisIndex />}
            </div>

        </div>
    );
}