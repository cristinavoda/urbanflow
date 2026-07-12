import {
    LayoutDashboard,
    TriangleAlert,
    Map,
    Settings,
    Package,
} from 'lucide-react';

import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="logo">
                <h2>🏙️ UrbanFlow</h2>
            </div>

            <nav className="sidebar-nav">

            <NavLink to="/">
    <LayoutDashboard size={20} />
    <span>Dashboard</span>
</NavLink>


             <NavLink to="/incidents"
              className={({ isActive }) => isActive ? "active" : ""}>
                    <TriangleAlert size={20} />
                    <span>Incidents</span>
                </NavLink>
                
             <NavLink to="/materials"
              className={({ isActive }) => isActive ? "active" : ""}>
    <Package size={20} />
    <span>Materials</span>
</NavLink>

              <NavLink to="/map"
               className={({ isActive }) => isActive ? "active" : ""}>
    <Map size={20} />
    <span>Map</span>
</NavLink>

          <NavLink to="/settings"
           className={({ isActive }) => isActive ? "active" : ""}>
    <Settings size={20} />
    <span>Settings</span>
</NavLink>     
            </nav>

        </aside>
    );
}

export default Sidebar;