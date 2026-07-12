import { useEffect, useState } from 'react';

import api from '../services/api';

import MapView from '../components/dashboard/MapView';

function MapPage() {

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {

        const fetchIncidents = async () => {

            try {

                const response = await api.get('/api/incidents');

                setIncidents(response.data);

            } catch (error) {

                console.error('Error loading map data:', error);

            }

        };

        fetchIncidents();

    }, []);

    return (

        <div className="page">

            <h1>🗺️ Urban Map</h1>

            <MapView incidents={incidents} />

        </div>

    );

}

export default MapPage;