import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/global.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<h1>hello world!</h1>
	</StrictMode>,
);
