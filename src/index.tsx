import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// import {Provider} from 'react-redux';
import App from './App';
// import {store} from './store';
import './index.less';

/* eslint-disable camelcase */


// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('container') as HTMLElement
);

/* eslint-disable camelcase */