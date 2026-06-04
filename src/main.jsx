
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import store from './store';
import './index.css'
import "./App.css"
import { Provider } from 'react-redux';
import "./i18n";
import App from './App.jsx'



createRoot(document.getElementById('root')).render(<Provider store={store}>
  <App />
</Provider>);
