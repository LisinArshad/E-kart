import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import productstore from './Redux/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={productstore}>
      <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
