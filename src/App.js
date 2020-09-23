import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Home from './components/Home/Home';
import Series from './components/Series/Series';
import MainContainer from './containers/MainContainer/MainContainer';

function App() {
	return (
		<Router>
			<Switch>
				<Route path = '/' exact component = {Home} />
				<Route path = '/series' component = {Series} />
				<Route component = {NotFound} />
			</Switch>
		</Router>
	);
}

export default App;


const NotFound = () => <MainContainer>This page is under construction</MainContainer>