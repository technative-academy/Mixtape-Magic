import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import routes from './routes';
import './assets/css/global.css';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
