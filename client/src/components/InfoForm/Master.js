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
      city: '',
      state: '',
      currentSalary: '',
      bonus: '',
      otherIncome: ''
    }

    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)

    // Bind the submission to handleChange() 
    this.handleChange = this.handleChange.bind(this)
  }

  _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  get previousButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  get nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, firstName, lastName, password } = this.state
    console.log(JSON.stringify({ email, firstName, lastName, password }))
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={style.h1}>Enter Information below to sign in</h1>

        <form onSubmit={this.handleSubmit}>

          <StepOne
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            username={this.state.username}
            password={this.state.password}
          />
          <StepTwo
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            city={this.state.username}
            state={this.state.state}
            currentSalary={this.state.currentSalary}
            bonus={this.state.bonus}
            otherIncome={this.state.otherIncome}
          />
          {this.previousButton}
          {this.nextButton}
        </form>

      </React.Fragment>
    )
  }
}

export default MasterForm;