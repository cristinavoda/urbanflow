import {
    User,
    Bell,
    Shield,
    Database
} from 'lucide-react';

function SettingsPage() {

    return (

        <div className="page">

            <h1>⚙️ Settings</h1>

            <div className="settings-grid">

                <div className="settings-card">
                    <User size={24} />
                    <h3>User Profile</h3>
                    <p>Manage your account information.</p>
                </div>

                <div className="settings-card">
                    <Bell size={24} />
                    <h3>Notifications</h3>
                    <p>Configure alerts and notifications.</p>
                </div>

                <div className="settings-card">
                    <Shield size={24} />
                    <h3>Security</h3>
                    <p>Authentication and permissions.</p>
                </div>

                <div className="settings-card">
                    <Database size={24} />
                    <h3>Database</h3>
                    <p>Backend connection and synchronization.</p>
                </div>

            </div>

        </div>

    );

}

export default SettingsPage;