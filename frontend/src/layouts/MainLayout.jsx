import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import Sidebar from '../components/layout/Sidebar'
import MobileHeader from '../components/layout/MobileHeader'

export default function MainLayout() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <div className="app-layout">

            <MobileHeader
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

            <Sidebar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

 {menuOpen && (

        <div
            className="sidebar-overlay"
            
            onClick={() => setMenuOpen(false)}
        />

    )}

            <main className="main-content">
                <Outlet />
            </main>

        </div>

    )

}