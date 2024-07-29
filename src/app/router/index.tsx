import App from '@/App';
import { ROUTES } from '@constants/routes';
import DummyDetailsPage from '@modules/DummyModule/dummy-details-page';
import DummyListPage from '@modules/DummyModule/dummy-list-page';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: ROUTES.DUMMY,
				children: [
					{
						index: true,
						element: <DummyListPage />,
					},
					{
						path: ':id',
						element: <DummyDetailsPage />,
					},
				],
			},
		],
	},
]);
