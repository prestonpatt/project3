import React from 'react';
import Modal from '../Modal/Modal';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import UserInfo from '../UserInfo/UserInfo';

const style = {
  h1: {
    fontSize: "1.2rem"
  },
  input: {
    margin: 10
  }
}

class MasterForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentStep: 1,
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      zip: '',
      currentSalary: '',
      bonus: '',
      otherIncome: ''
    }
  }

  handleStepOne = (values) => {
    this.setState({
      ...values,
      currentStep: 2
    })
  }

  handleStepTwo = (values) => {
    this.setState({
      ...values,
    })
    //send values to POST /api/record -> after it responds with new record id:
    //chanage the window.location to /results/:id
    // in the resgit ults.js component - call /api/records/:id to retrieve saved information
    fetch('/api/record', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        zip: this.state.zip,
        password: this.state.password,
        currentSalary: this.state.currentSalary,
        bonus: this.state.bonus,
        otherIncome: this.state.otherIncome,
      })
    })
        .then(response => response.json())
        .then(user => {
          console.log(user);
          if (user && user.id) {
            // this.props.loadUser(user)
            window.location.href = `/results/${user.id}`;
          }
          else {
            //show some error and not go to results page
          }
        })
    console.log(values)
  }


  // onSubmitStepTwo = () => {

  // }

  render() {
    const { currentStep } = this.state
    return (

      <React.Fragment>
        {currentStep === 2 ? (
          <StepTwo
            onSubmit={this.handleStepTwo}

          />
        ) : (
            <StepOne
              onSubmit={this.handleStepOne}
            />
          )}

      </React.Fragment>
    )
  }
}


export default MasterForm;