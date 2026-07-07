import { useState } from 'react'

import DashboardPage from './pages/DashboardPage'


import './styles/App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      {isLoggedIn ? (
        <DashboardPage />
      ) : (
        <button onClick={() => setIsLoggedIn(true)} className="login-btn">
          Log In
        </button>
      )}
    </div>
  )
}

export default App
