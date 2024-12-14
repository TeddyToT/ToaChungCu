import React from 'react';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (  
		<>
			<div className="mb-6">
				<Login />
			</div>
			
			<div>
				<SignUp />
			</div>
		</>
	);
}

export default App