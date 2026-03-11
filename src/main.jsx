import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Žádný import index.css zde není potřeba, vše řeší skript v index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
