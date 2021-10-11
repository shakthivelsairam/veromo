import React from 'react';
import './App.css';
import MainAppBar from './components/MainAppBar';
import Login from './components/Login';
import { Router, Route, Switch} from "react-router-dom"
import history from './history';
import Routes from './components/Routes'

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    setIsAuthenticated(true);
  };

  return (
    <div>
    {!isAuthenticated ?
      <Login onSubmit={handleLoginSubmit}/>
    :
    <Router history={history}>
      <MainAppBar/>
      <Switch>
        {Routes.map((route: any) => (
          <Route exact path={route.path} key={route.path}>
            <div style={{margin: 10}}>
            <route.component />
            </div>
          </Route>
        ))}
      </Switch>
    </Router>
    }
    </div>
  );
}

export default App;
