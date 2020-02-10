import React from 'react';
import './App.scss';
import Gateway from './layout/gateway/Gateway';
import Dashboard from './layout/dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useLinkScript from './utils/hooks/useLinkScript';

function App() {
	useLinkScript('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
	useLinkScript('https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap" rel="stylesheet');

	return (
		<div className="App">
			<Router>
				<Switch>
					<Dashboard />

					<Route path="/admin">
						<Gateway role="Quản trị viên" control={true} />
					</Route>
					<Route path="/agent">
						<Gateway role="Người bán" control={true} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;