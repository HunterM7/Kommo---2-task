import React from 'react'
import ReactDOM from 'react-dom/client'

// Styles
import './styles/index.scss'

// Components 'n UI
import { App } from 'components'

// Tests
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

reportWebVitals()
