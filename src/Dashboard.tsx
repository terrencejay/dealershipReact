import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CarList from './CarList';
import AddCarForm from './AddCarForm';

const Dashboard: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/cars">Car List</Link>
                        </li>
                        <li>
                            <Link to="/add-car">Add Car</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/cars">
                        <CarList />
                    </Route>
                    <Route path="/add-car">
                        <AddCarForm />
                    </Route>
                    <Route path="/">
                        <h2>Home</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Dashboard;
