import {
    LayoutDashboard,
    TriangleAlert,
    Map,
    Settings,
    Package,
    Menu,
    X,

} from 'lucide-react';

import { NavLink } from 'react-router-dom';

function Sidebar({ menuOpen, setMenuOpen }) {
    return (
        
        <aside className={menuOpen ? "sidebar open" : "sidebar"}>
            
<header className="mobile-header">

    <button
        onClick={() => setMenuOpen(!menuOpen)}
    >

        {menuOpen ? <X size={24} /> : <Menu size={24} />}

    </button>

   

</header>
            <div className="logo">
                <h2>🏙️ UrbanFlow</h2>
                
            </div>

            <nav className="sidebar-nav">

            <NavLink to="/"
              onClick={() => setMenuOpen(false)}>
    <LayoutDashboard size={20} />
    <span>Dashboard</span>
</NavLink>


             <NavLink to="/incidents"
               onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "active" : ""}>
                    <TriangleAlert size={20} />
                    <span>Incidents</span>
                </NavLink>
                
             <NavLink to="/materials"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "active" : ""}>
    <Package size={20} />
    <span>Materials</span>
</NavLink>

              <NavLink to="/map"
               onClick={() => setMenuOpen(false)}
               className={({ isActive }) => isActive ? "active" : ""}>
    <Map size={20} />
    <span>Map</span>
</NavLink>

          <NavLink to="/settings"
          onClick={() => setMenuOpen(false)}
           className={({ isActive }) => isActive ? "active" : ""}>
    <Settings size={20} />
    <span>Settings</span>
</NavLink>     
            </nav>

        </aside>
    );
}

export default Sidebar;