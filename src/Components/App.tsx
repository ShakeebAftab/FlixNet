import { Route, Switch } from 'react-router';
import { Category } from './Category';
import { Home } from './Home';
import { NavBar } from "./NavBar/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/category/:type' component={Category} exact />
      </Switch>
    </>
  );
}

export default App;
