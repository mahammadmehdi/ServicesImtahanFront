import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SerachProvider from './context/searchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SerachProvider>
    <App />
    </SerachProvider>
  </React.StrictMode>,
)
