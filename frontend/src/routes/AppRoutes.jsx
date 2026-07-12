import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import DashboardPage from '../pages/DashboardPage'
import IncidentsPage from '../pages/IncidentsPage'
import MaterialsPage from '../pages/MaterialsPage'
import MapPage from '../pages/MapPage'
import SettingsPage from '../pages/SettingsPage'

export default function AppRoutes() {

    return (

        <Routes>

            <Route element={<MainLayout />}>

                <Route path="/" element={<DashboardPage />} />

                <Route path="/incidents" element={<IncidentsPage />} />

                <Route path="/materials" element={<MaterialsPage />} />

                <Route path="/map" element={<MapPage />} />

                <Route path="/settings" element={<SettingsPage />} />

            </Route>

        </Routes>

    )

}