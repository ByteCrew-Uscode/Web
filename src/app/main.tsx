import { createRoot } from 'react-dom/client';
import '@stackflow/plugin-basic-ui/index.css';
import './global.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
