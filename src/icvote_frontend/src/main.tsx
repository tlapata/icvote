import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import Footer from "./components/layout/footer/Footer";


const rootElement = document.getElementById('root');

// Add a null check before creating the root
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
      <Footer />
    </React.StrictMode>,
  );
} else {
  console.error("Root element not found");
}