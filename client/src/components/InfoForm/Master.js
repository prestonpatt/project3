import React from 'react';
import Modal from '../Modal/Modal';
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
  }

  handleStepTwo = (values) => {
    this.setState({
      ...values,
    })
  }

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