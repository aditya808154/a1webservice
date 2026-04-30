import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async' // 1. Isse import karein
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* 2. HelmetProvider ko sabse bahar rakhein */}
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)