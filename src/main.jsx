import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root'),{ unstable_concurrentUpdatesByDefault: true }).render(
  <App />,
)
// const root = createRoot(container, { unstable_concurrentUpdatesByDefault: true });

