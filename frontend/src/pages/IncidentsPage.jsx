import { useEffect, useState } from 'react';

import api from '../services/api';

import IncidentsTable from '../components/incidents/IncidentsTable';
import MapView from '../components/dashboard/MapView';

function IncidentsPage() {

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {

        const fetchIncidents = async () => {

            try {

                const response = await api.get('/api/incidents');

                setIncidents(response.data);

            } catch (error) {

                console.error('Error loading incidents:', error);

            }

        };

        fetchIncidents();

    }, []);

    return (

        <div className="page">

            <h1>🚧 Incidents</h1>

            <MapView incidents={incidents} />

            <IncidentsTable incidents={incidents} />

        </div>

    );

}

export default IncidentsPage;