import './App.css';
import Router from './routes/Router';
import React, { createContext } from 'react';

function App() {
	const userInfo = true;

	return (
		<>
			<GrowthStateContext.Provider value={[memberData, jobPostData, applicationData, applicaionDetailData, infoData]}>
				<Router userInfo={userInfo} />
			</GrowthStateContext.Provider>
		</>
	);
}

export default App;
