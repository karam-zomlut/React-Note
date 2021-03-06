import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import AddPopUp from './Components/AddPopUp';

import 'remixicon/fonts/remixicon.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

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
    const { EditMode } = this.state;
    e.preventDefault();
    this.setState({
      showAddPopUp: !this.state.showAddPopUp,
    });
    if (EditMode) {
      this.setState({
        Title: '',
        Description: '',
        EditMode: false,
        EditId: null,
      });
    }
  };

  storeToLocalStorage = ({ msg }) => {
    window.localStorage.setItem('notes', JSON.stringify(this.state.notes));
    toast.success(msg);
  };

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
    if (Title !== '' && Description !== '') {
      const date = new Date();
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const newNote = {
        id: Date.now(),
        Title,
        Description,
        Date: `${
          months[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`,
      };
      this.setState(
        {
          notes: [...notes, newNote],
          showAddPopUp: false,
          Title: '',
          Description: '',
          TitleError: '',
          DescriptionError: '',
        },
        () => this.storeToLocalStorage({ msg: 'Note added successfully!' })
      );
    }
  };

  showEditPopup = (id) => {
    const { notes } = this.state;
    const note = notes.filter((note) => note.id === id);
    this.setState({
      EditMode: true,
      EditId: id,
      Title: note[0].Title,
      Description: note[0].Description,
      showAddPopUp: true,
    });
  };

  editNote = (e, id) => {
    e.preventDefault();
    const { Title, Description, notes } = this.state;
    const note = notes.filter((note) => note.id === id);
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
    if (Title !== '' && Description !== '') {
      note[0].Title = Title;
      note[0].Description = Description;
      this.storeToLocalStorage({ msg: 'Note updated successfully!' });
      this.toggleAddPopup(e);
    }
  };

  deleteNote = (id) => {
    const { notes } = this.state;
    Swal.fire({
      title: 'Are you sure?',
      text: "You are going to delete note!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedNotes = notes.filter((note) => note.id !== id);
        this.setState({
          notes: updatedNotes,
        }, () => this.storeToLocalStorage({ msg: 'Note deleted successfully!' }));
      }
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.value !== '') {
      this.setState({
        [e.target.name + 'Error']: '',
      });
    }
  };

  render() {
    const {
      showAddPopUp,
      Title,
      Description,
      TitleError,
      DescriptionError,
      notes,
      EditMode,
      EditId,
    } = this.state;
    return (
      <>
        <ToastContainer />
        <div className='container'>
          {showAddPopUp ? (
            <AddPopUp
              Title={Title}
              Description={Description}
              TitleError={TitleError}
              DescriptionError={DescriptionError}
              EditId={EditId}
              EditMode={EditMode}
              toggleAddPopup={this.toggleAddPopup}
              handleChange={this.handleChange}
              addNote={this.addNote}
              editNote={this.editNote}
            />
          ) : null}
          <BrowserRouter>
            <Switch>
              <Route path='/notfound' component={NotFound} />
              <Route
                exact
                path='/'
                render={(props) => (
                  <Home
                    {...props}
                    notes={notes}
                    toggleAddPopup={this.toggleAddPopup}
                    showEditPopup={this.showEditPopup}
                    deleteNote={this.deleteNote}
                  />
                )}
              />
              <Redirect to='/notfound' />
            </Switch>
          </BrowserRouter>
        </div>
      </>
    );
  }
}

export default App;
