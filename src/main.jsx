import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Playbar from './Components/Playbar/Playbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Playbar />
  </StrictMode>,
)
