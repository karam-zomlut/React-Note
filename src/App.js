import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

import './App.css';
import 'remixicon/fonts/remixicon.css';
import AddPopUp from './Components/AddPopUp';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <AddPopUp />
        <BrowserRouter>
          <Switch>
            <Route path='/notfound' component={NotFound} />
            <Route exact path="/" component={Home} />
            <Redirect to='/notfound' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
