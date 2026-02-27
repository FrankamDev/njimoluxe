import { useState } from 'react';
import Users from './Sections/Users';
import Devis from '../Devis/Devis';
// import Devis from './Sections/Devis';

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
                {section === 'users' && <Users />}
                {section === 'devis' && <Devis />}
            </div>

        </div>
    );
}