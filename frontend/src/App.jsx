import { useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import './styles/App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      {isLoggedIn ? (
         <AppRoutes />
      ) : (
        <button onClick={() => setIsLoggedIn(true)} className="login-btn">
          Log In
        </button>
      )}
    </div>
  )
}

export default App
