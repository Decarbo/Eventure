import './App.css';
import Body from './components/Body';
import Nav from './components/Nav';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Intrest from './components/Intrest';
import Events from './components/Event';
import EventDetail from './components/EventDetail';
import TicketBooking from './components/TicketBooking';
import CreateEventForm from './components/CreateEventForm';
import BannerStep from './components/BannerStep';
import TicketingStep from './components/TicketingStep';
import AccountSettings from './components/Account/AccountSettings';
import EventListing from './components/EventListing';
import EventCreationWizard from './components/EventCreationWizard';

function App() {
	return (
		<div className="overflow-x-hidden">
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
						path="/Intrest"
						element={<Intrest />}
					/>
					<Route
						path="/Events"
						element={<EventListing/>}
					/>
					<Route
						path="/Proceed"
						element={<TicketBooking />}
					/>
					<Route
						path="/banner"
						element={<BannerStep />}
					/>
					<Route
						path="/TicketingStep"
						element={<TicketingStep />}
					/>
					<Route
						path="/CreateEventForm"
						element={<EventCreationWizard />}
					/>
					<Route
						path="/event/:id"
						element={<EventDetail />}
					/>
					<Route
						path="/Profile"
						element={<AccountSettings />}
					/>
					<Route
						path="/events/:id"
						element={<EventDetail />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
