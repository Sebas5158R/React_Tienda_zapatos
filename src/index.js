import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXTwitter, faInstagram, faFacebook, faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUser, faEnvelope, faLock, faHashtag, faBuilding, faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faXTwitter, faInstagram, faFacebook, faGoogle, faGithub, faLinkedin, faUser, faEnvelope, faLock, faHashtag, faBuilding, faHeart)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
);