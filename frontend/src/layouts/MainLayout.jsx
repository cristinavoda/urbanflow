import { Outlet } from 'react-router-dom'

import Sidebar from '../components/layout/Sidebar'

export default function MainLayout() {

    return (

        <div className="app-layout">

            <Sidebar />

            <main className="main-content">
                <Outlet />
            </main>

        </div>

    )

}