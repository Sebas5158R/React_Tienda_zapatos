import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXTwitter, faInstagram, faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faXTwitter, faInstagram, faFacebook, faGoogle, faGithub)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
);