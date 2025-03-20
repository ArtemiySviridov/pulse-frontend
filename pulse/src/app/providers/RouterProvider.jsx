import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../../layout/MainLayout';
import HomePage from '../../pages/HomePage';
import PointPage from '../../pages/PointPage';
import PointsPage from '../../pages/PointsPage';
import ProfilePage from '../../pages/ProfilePage';

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/point',
				element: <PointPage />,
			},
			{
				path: '/points',
				element: <PointsPage />,
			},
			{
				path: '/profile',
				element: <ProfilePage />,
			},
		],
	},
]);

export const AppRouter = () => <RouterProvider router={router} />;
