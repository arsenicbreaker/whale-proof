import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { AuthProvider } from './context/AuthContext';
import './styles/app.css';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
