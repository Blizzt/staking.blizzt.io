/**
 * Blizzt Staking App
 * @author Germán D. Schneck <german.schneck@blizzt.io>
 */
// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers';

// Assets
import './index.css';

// ReportWeb Vitals
import reportWebVitals from './reportWebVitals';

// Application
import AppLayout from "@components/layouts/AppLayout";

// Web3 Library Provider
function getLibrary(provider) {
  return new Web3Provider(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <AppLayout />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
