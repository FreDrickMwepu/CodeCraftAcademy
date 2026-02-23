import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Unregister any stale service workers (e.g. from previous projects on the same port)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}
