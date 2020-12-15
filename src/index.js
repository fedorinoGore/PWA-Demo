import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import ErrorBoundary from './components/error'

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root'))
