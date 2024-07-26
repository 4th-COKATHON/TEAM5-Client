import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Bucket from '../pages/Bucket';
import Login from '../pages/Login';
import KakaoRedirect from '../api/KakaoRedirect';

const Router = () => {

	const routes = [
		{
			path: '/',
			element: <Login />, // 메인홈 (로그인)
		},
		{
			path: '/oauth',
			element: <KakaoRedirect />, // 메인홈 (로그인)
		},
    {
      path: '/bucket',
      element: <Bucket />,
    }
	];

  const router = createBrowserRouter([...routes]);

	return <RouterProvider router={router} />;
};

export default Router;
