import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

import './App.css';
import 'remixicon/fonts/remixicon.css';
import AddPopUp from './Components/AddPopUp';

const notes = JSON.parse(window.localStorage.getItem('notes')) || [];
class App extends React.Component {
  state = {
    showAddPopUp: false,
    EditMode: false,
    EditId: null,
    Title: '',
    Description: '',
    TitleError: '',
    DescriptionError: '',
    notes: notes,
  };

  toggleAddPopup = (e) => {
    e.preventDefault();
    this.setState({
      showAddPopUp: !this.state.showAddPopUp,
    });
    if (e.target.className.includes('save-btn')){
      this.setState({
        Title: '',
        Description: '',
      });
    }
  };

  storeToLocalStorage = () => {
    window.localStorage.setItem('notes', JSON.stringify(this.state.notes));
    console.log('stored');
  }

  addNote = (e) => {
    e.preventDefault();
    const { Title, Description, notes } = this.state;
    if (Title === '') {
      this.setState({
        TitleError: 'Title is required',
      });
    } 
    if (Description === '') {
      this.setState({
        DescriptionError: 'Description is required',
      });
    }
    if(Title !== '' && Description !== ''){
      const newNote = {
        id: Date.now(),
        Title,
        Description,
      };
      this.setState({
        notes: [...notes, newNote],
        showAddPopUp: false,
        Title: '',
        Description: '',
        TitleError: '',
        DescriptionError: '',
      }, () => this.storeToLocalStorage());
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if(e.target.value !== ''){
      this.setState({
        [e.target.name + 'Error']: '',
      });
    }
  };

  render() {
    const { showAddPopUp, Title, Description, TitleError, DescriptionError } = this.state;
    console.log(this.state);
    return (
      <div className='container'>
        {showAddPopUp ? (
          <AddPopUp
            Title={Title}
            Description={Description}
            TitleError={TitleError}
            DescriptionError={DescriptionError}
            toggleAddPopup={this.toggleAddPopup}
            handleChange={this.handleChange}
            addNote={this.addNote}
          />
        ) : null}
        <BrowserRouter>
          <Switch>
            <Route path='/notfound' component={NotFound} />
            <Route
              exact
              path='/'
              render={(props) => (
                <Home {...props} toggleAddPopup={this.toggleAddPopup} />
              )}
            />
            <Redirect to='/notfound' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
