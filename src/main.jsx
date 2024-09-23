import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Paths from './Paths'
import ErrorBoundary from './ErrorBoundry';

console.log('Starting to render the app');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
    <Paths />
    </ErrorBoundary>
  </React.StrictMode>
)

console.log('Finished rendering the app');