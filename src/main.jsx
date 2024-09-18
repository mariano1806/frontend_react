import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FooterButtonsDarkExample from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FooterButtonsDarkExample />  
  </StrictMode>,
)
