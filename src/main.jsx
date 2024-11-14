import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nav from './Navbar.jsx'
import './index.css'
import Navbar from './Navbar.jsx'
import CartModal from './CartModal.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App/>
  </StrictMode>,
)
