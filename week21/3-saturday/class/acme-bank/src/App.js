import { Link, Route, Switch } from 'react-router-dom';
import { Checking, Landing, Savings } from './components';

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <div className="navs">
          <Link to="/checking">Checking</Link>
          <Link to="/savings">Savings</Link>
        </div>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/checking" component={Checking} />
          <Route exact path="/savings" component={Savings} />
        </Switch>
      </main>

      <footer>
        This the footer
      </footer>
    </div>
  );
}

export default App;
