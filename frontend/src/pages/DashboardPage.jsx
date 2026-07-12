import { useEffect, useState } from 'react'

import Header from '../components/layout/Header'
import StatsCards from '../components/dashboard/KPIs'
import MapView from '../components/dashboard/MapView'
import IncidentTable from '../components/incidents/IncidentsTable'

import api from '../services/api'

function DashboardPage() {

    const [incidents, setIncidents] = useState([]);
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        const fetchIncidents = async () => {
            try {
                const response = await api.get('/api/incidents')
                console.log("TIPO:", typeof response.data)
                console.log("ES ARRAY:", Array.isArray(response.data))
                console.log(response.data)

                setIncidents(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        const fetchMaterials = async () => {
    try {
        const response = await api.get('/api/materiales' , "/api/materials/low-stock");

        console.log(response.data);

        setMaterials(response.data);

    } catch (error) {
        console.error(error);
    }
}

        fetchIncidents();
        fetchMaterials();
    }, [])

    const totalMaterials = materials.length;

const totalStock = materials.reduce(
    (sum, material) => sum + material.stock,
    0
);

const warehouses = new Set(
    materials.map(material => material.warehouse)
).size;

const categories = new Set(
    materials.map(material => material.category)
).size;
    
const lowStock = materials.filter(m => (m.stock ?? 0) < 5).length;
    
    return (

        <div className="dashboard-layout">

           

            <main className="main-content">

                <Header />

                <StatsCards incidents={incidents} />

                <MapView incidents={incidents} />

                <IncidentTable incidents={incidents} />

                
              <div className="stat-card">

    <div className="stat-header">
        <h3>📦 Materiales</h3>
    </div>

    <div className="stat-item">
        <span>Total materiales</span>
        <strong>{totalMaterials}</strong>
    </div>

    <div className="stat-item">
        <span>Stock total</span>
        <strong>{totalStock}</strong>
    </div>

    <div className="stat-item">
        <span>Almacenes</span>
        <strong>{warehouses}</strong>
    </div>

    <div className="stat-item">
        <span>Categorías</span>
        <strong>{categories}</strong>
    </div>
    
    <div className="stat-item">
        <span>LowStock</span>
        <strong>{lowStock}</strong>
    </div>


</div>

            </main>

        </div>

    )

}

export default DashboardPage