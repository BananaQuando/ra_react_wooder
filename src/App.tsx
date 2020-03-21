import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainMenu from './Components/MainMenu';
import PageHome from './Components/PageHome';
import PageCatalog from './Components/PageCatalog';
import PageAbout from './Components/PageAbout';
import Footer from './Components/Footer';


function App() {
  return (
    <Router >
      <MainMenu />
      <Switch>
        <Route path="/" exact component={props => <PageHome {...props} />} />
        <Route path="/catalog" component={props => <PageCatalog {...props} />} />
        <Route path="/about-us" component={props => <PageAbout {...props} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
