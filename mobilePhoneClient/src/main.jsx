import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextPhone from './context/ContextPhone.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextPhone>
      <App />
    </ContextPhone>
  </StrictMode>,
)
