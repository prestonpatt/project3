import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Modal from './components/Modal/Modal';
import Master from './components/InfoForm/Master'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Results from './components/Results/Results';
import LogIn from './components/LogIn/LogIn';
import UserInfo from './components/UserInfo/UserInfo';
import Splash from './components/Splash/Splash';


class App extends React.Component {
  state = {
    modalOpened: true
  }

  // onModalClose = (e) => {
  //   e.preventDefault();
  //   this.setState((prevState) => {
  //     console.log(prevState);
  //     return { modalOpened: !prevState.modalOpened };
  //   });
  // }

  onSubmit = (values) => {
    console.log(JSON.stringify(values));
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        firstName: data.firstName,
        email: data.email
      }
    })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Splash}></Route>
            <Route exact path="/register" component={Master} />
            <Route exact path="/signin" component={LogIn} />
            <Route exact path="/results/:id" component={Results} />
            <Route exact path="/user" component={UserInfo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
