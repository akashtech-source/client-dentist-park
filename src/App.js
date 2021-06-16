import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Appointment from './components/Appointment/Appointment';
import AllBooking from './components/AllBooking/AllBooking';
import TotalService from './components/TotalService/TotalService';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <PrivateRoute path="/appointment">
          <Appointment />
        </PrivateRoute>
        <Route path="/allBooking">
          <AllBooking/>
        </Route>
        <Route path="/totalService">
          <TotalService/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        
        <PrivateRoute path="/dashboard/:id">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/addService">
          <AddService />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
