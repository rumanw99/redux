import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Switch, Route } from 'react-router-dom'
import Product from './component/Product';
import Products from './component/Products';
import Login from './component/Login';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <Route path="/products:id" component={Product} />
      </Switch>
    </>
  );
}

export default App;
