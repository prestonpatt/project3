import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Modal from './components/Modal/Modal';
import Master from './components/InfoForm/Master';
import SignIn from './components/SignIn/SignIn';
import InfoForm from './components/InfoForm/InfoForm';


class App extends React.Component {
  state = {
    modalOpened: true
  }

  onModalClose = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      console.log(prevState);
      return { modalOpened: !prevState.modalOpened };
    });
  }

  onSubmit = (values) => {
    alert(JSON.stringify(values));
  }

  render() {
    return (
      <div>
        <Nav />
        <Modal opened={this.state.modalOpened} onClose={this.onModalClose}>
          {/* <InfoForm /> */}
          {/* <SignIn /> */}
          <Master />
        </Modal>
      </div>
    );
  }
}

export default App;
