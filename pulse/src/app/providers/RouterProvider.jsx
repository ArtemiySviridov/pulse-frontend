import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../../layout/MainLayout';
import HomePage from '../../pages/HomePage';
import PointPage from '../../pages/PointPage';
import PointsPage from '../../pages/PointsPage';
import ProfilePage from '../../pages/ProfilePage';
// import ShopPage from '../../pages/ShopPage';

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
			// {
			// 	path: '/events',
			// 	element: <EventsPage />,
			// },
			// {
			// 	path: '/event',
			// 	element: <EventPage />,
			// },
			// {
			// 	path: '/shop',
			// 	element: <ShopPage />,
			// },
			{
				path: '/profile',
				element: <ProfilePage />,
			},
		],
	},
]);

export const AppRouter = () => <RouterProvider router={router} />;
