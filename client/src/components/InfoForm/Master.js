import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

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
      zipCode: '',
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
    console.log("yo")
  }

  handleStepTwo = (values) => {
    this.setState({
      ...values,
    })
    fetch('/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        zipCode: this.state.zipCode,
        password: this.state.password,
        currentSalary: this.state.currentSalary,
        bonus: this.state.bonus,
        otherIncome: this.state.otherIncome,
      })
    })
      .then(user => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  // onSubmitStepTwo = () => {
    
  // }

  render() {
    const { currentStep } = this.state
    return (
      <React.Fragment>
        <h1 style={style.h1}>Enter Information below to sign in</h1>

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