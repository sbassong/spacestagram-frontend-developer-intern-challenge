import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations} >
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
