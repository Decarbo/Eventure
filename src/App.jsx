import './App.css';
import Body from './components/Body';
import Nav from './components/Nav';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Intrest from './components/Intrest';
import Events from './components/Event';

function App() {
	return (
		<div className='overflow-x-hidden'>
			<Router>
				<nav>
					<Nav />
				</nav>
				<Routes>
					<Route
						path="/"
						element={<Body />}
					/>
					<Route
						path="/Login"
						element={<Signup />}
					/>
          <Route
            path= "/Intrest"
            element={<Intrest />}
          />
          <Route
            path= "/filter"
            element={<Events/>}
          />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
