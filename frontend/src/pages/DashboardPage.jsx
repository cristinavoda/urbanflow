import { useEffect, useState } from 'react'

import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'

import StatsCards from '../components/dashboard/KPIs'
import MapView from '../components/map/MapView'
import IncidentTable from '../components/table/IncidentTable'

import api from '../services/api'

function DashboardPage() {

    const [incidents, setIncidents] = useState([])

    useEffect(() => {
        const fetchIncidents = async () => {
            try {
                const response = await api.get('/api/incidents')
                setIncidents(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchIncidents()
    }, [])

    
    return (

        <div className="dashboard-layout">

            <Sidebar />

            <main className="main-content">

                <Header />

                <StatsCards incidents={incidents} />

                <MapView incidents={incidents} />

                <IncidentTable incidents={incidents} />

            </main>

        </div>

    )

}

export default DashboardPage