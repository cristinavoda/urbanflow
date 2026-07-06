import {
    LayoutDashboard,
    TriangleAlert,
    Map,
    Settings
} from 'lucide-react';

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="logo">
                <h2>🏙️ UrbanFlow</h2>
            </div>

            <nav className="sidebar-nav">

                <a href="#" className="active">
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </a>

                <a href="#">
                    <TriangleAlert size={20} />
                    <span>Incidents</span>
                </a>

                <a href="#">
                    <Map size={20} />
                    <span>Map</span>
                </a>

                <a href="#">
                    <Settings size={20} />
                    <span>Settings</span>
                </a>

            </nav>

        </aside>
    );
}

export default Sidebar;