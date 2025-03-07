import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import routes from './routes';
import './assets/css/global.css';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		{/* <Provider store={store}> */}
		<RouterProvider router={router} />
		{/* </Provider> */}
	</StrictMode>,
);
