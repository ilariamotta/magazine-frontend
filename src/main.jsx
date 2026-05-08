import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import AuthorCard from './components/AuthorCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <AuthorCard />
    <App />
    <Footer/>
  </StrictMode>,
)