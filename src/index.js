import {render} from 'react-dom';
import App from './App';
import './index.less';

/* eslint-disable camelcase */


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

render(
    <App />,
    document.getElementById('container')
);

/* eslint-disable camelcase */