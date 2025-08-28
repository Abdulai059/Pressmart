import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./component/Footer/footer.css"
import App from './App.jsx'
import "./component/CustomerTestimonials/CustomerTestimonials.css"
import "./global.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
