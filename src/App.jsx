import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './contexts/authContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
