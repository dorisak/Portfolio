import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import GoogleAnalytics from './components/GoogleAnalytics.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleAnalytics />
    <App />
  </StrictMode>,
);
