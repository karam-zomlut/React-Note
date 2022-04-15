import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

import './App.css';
import 'remixicon/fonts/remixicon.css';
import AddPopUp from './Components/AddPopUp';

class App extends React.Component {

  state={
    showAddPopUp: false,
    EditMode: false,
    EditId: null,
    NoteTitle: null,
    NoteContent: null,
  }

  toggleAddPopup = (e) => {
    e.preventDefault();
    this.setState({showAddPopUp: !this.state.showAddPopUp});
  }
  
  render() {
    const {showAddPopUp} = this.state;
    return (
      <div className="container">
        {showAddPopUp ? <AddPopUp toggleAddPopup={this.toggleAddPopup} /> : null}
        <BrowserRouter>
          <Switch>
            <Route path='/notfound' component={NotFound} />
            <Route exact path="/" render={(props) => (
              <Home {...props} toggleAddPopup={this.toggleAddPopup} />
            )} />
            <Redirect to='/notfound' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
