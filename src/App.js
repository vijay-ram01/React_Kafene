//React imports
import React from 'react';

//routers imports
import { BrowserRouter as Router, Switch } from 'react-router-dom';

//components imports
import LoggedInRedirect from './components/Routes/LoggedInRedirect';
import PrivateRoute from './components/Routes/PrivateRoute';
import Navbar from './components/Navbar/Navbar';

//pages imports
import Login from './pages/Login/Login';
import Orders from './pages/Orders/Orders';
import Order from './pages/Order';
import Products from './pages/Products/Products';
import Product from './pages/Product';
import Users from './pages/Users/Users';

//App method
const App = () => 
(
  <Router>
    <Navbar />
    <Switch>
    
      {/* login page */}
      <LoggedInRedirect path="/" exact Component={Login} />

      {/* orders page */}
      <PrivateRoute exact path="/orders" Component={Orders} />
      <PrivateRoute exact path="/order/:orderId" Component={Order} />

      {/* products page */}
      <PrivateRoute exact path="/products" Component={Products} />
      <PrivateRoute exact path="/product/:productId" Component={Product} />

      {/* users page */}
      <PrivateRoute exact path="/users" Component={Users} />
    </Switch> 
  </Router>
);

export default App;
