import React from 'react'
import { Route, Switch } from 'react-router';
import Navbar from './Navbar';
import Home from './Home'
import About from './About'
import Offers from './Offers'
import Contact from './Contact'
import './app.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/offers" component={Offers} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <footer>
        <span>
          &copy;Bhupender Singh
        </span>
      </footer>
    </div>
  );
}

export default App;
