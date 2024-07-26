import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';

// 부모 컴포넌트로부터 로그인 여부에 대한 값 받아와서 사용
const Router = () => {
	const routes = [
		{
			path: '/',
			element: <Home />, // 메인홈
		}
	];

	const router = createBrowserRouter([...routes]);

	// 구성요소 전달 및 활성화 -> App.jsx로 빼도 괜찮음
	return <RouterProvider router={router} />;
};

export default Router;
