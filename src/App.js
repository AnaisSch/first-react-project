import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

import Navigation    from './components/Navigation';

import Home          from './pages/Home';
import CreateArticle from './pages/CreateArticle';
import DeleteArticle from './pages/DeleteArticle';
import ViewArticle   from './pages/ViewArticle';
import NotFound      from './pages/NotFound';
import Signin        from './pages/Signin';


const App = () => {
  return (
    <CookiesProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/"             component={Home} />
          <Route path="/signin"             component={Signin} />
          <Route path="/articles/create/"   component={CreateArticle} />
          <Route path="/articles/delete/"   component={DeleteArticle} />
          <Route path="/article/:articleId" component={ViewArticle} />
          <Route path="*"                   component={NotFound} />
        </Switch>
        <ToastContainer />
      </Router>
      </CookiesProvider>
  );
}

export default App;
