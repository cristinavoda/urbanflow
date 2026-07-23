import { useEffect, useState } from 'react';

import api from '../services/api';

import IncidentsTable from '../components/incidents/IncidentsTable';
import MapView from '../components/dashboard/MapView';
import { getIncidents } from "../services/urbanflowService";
function IncidentsPage() {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const fetchIncidents = async () => {
            try {
                const response = await api.get('/api/incidents');
                setIncidents(response.data);
            } catch {
                console.warn('API no disponible. Cargando datos locales...');
                const data = await getIncidents();
                setIncidents(data);
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