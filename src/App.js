import React from 'react';
// import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainMenu from './Components/MainMenu';
import PageHome from './Components/PageHome';
import PageCatalog from './Components/PageCatalog';
import Footer from './Components/Footer';


function App() {
  return (
    <Router >
      <MainMenu />
      <Switch>
        <Route path="/" exact component={PageHome} />
        <Route path="/catalog" component={PageCatalog} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
