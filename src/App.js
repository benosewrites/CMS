import Header from './components/layouts/Header';
import About from './components/pages/About';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import NotFound from './components/pages/NotFound';
import EditContact from './components/contacts/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Provider from './Context';

function App() {
	return (
		<Provider>
			<Router>
				<div className="App">
					<Header branding="CMS" />
					<div className="container mt-3">
						<Switch>
							<Route exact path="/" component={Contacts} />
							<Route exact path="/add/contact" component={AddContact} />
							<Route exact path="/edit/contact/:id" component={EditContact} />
							<Route exact path="/about" component={About} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
