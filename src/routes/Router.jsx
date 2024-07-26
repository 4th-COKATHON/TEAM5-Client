import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from '../pages/Home';
import Login from '../pages/Login';

const Router = () => {
	const routes = [
		{
			path: '/',
			element: <Login />, // 메인홈 (로그인)
		}
	];

	const router = createBrowserRouter([...routes]);

	return <RouterProvider router={router} />;
};

export default Router;
