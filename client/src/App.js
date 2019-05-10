import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Modal from './components/Modal/Modal';
import SignIn from './components/SignIn/SignIn';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const TodoSchema = Yup.object().shape({
//   message: Yup.string().required('Message is required.')
// });

class App extends React.Component {
  state = {
    modalOpened: true,
    selectedTodo: null,
  }

  onModalClose = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      console.log(prevState);
      return { modalOpened: !prevState.modalOpened };
    });
  }

  onTodoClick = (id) => {
    this.setState({
      modalOpened: true,
      selectedTodo: id,
    })
  }

  onSubmit = (values) => {
    alert(JSON.stringify(values));
  }

  render() {
    return (
      <div>
        <Nav />
        <Modal opened={this.state.modalOpened} onClose={this.onModalClose}>
          <SignIn />
        </Modal>
      </div>
    );
  }
}

export default App;
