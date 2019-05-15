import React from 'react';

const style = {
  h1: {
    fontSize: "1.2rem"
  },
  input: {
    margin: 10
  }
}

class StepOne extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    return (
      <div className="form-group">
        <input
          style={style.input}
          className="form-control"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Enter First Name"
          value={this.props.firstName} // Prop: The username input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        <input
          style={style.input}
          className="form-control"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Enter Last Name"
          value={this.props.lastName} // Prop: The username input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        {/* <label htmlFor="email">Email</label> */}
        <input
          style={style.input}
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={this.props.email} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        {/* <label htmlFor="email">Password</label> */}
        <input
          style={style.input}
          className="form-control"
          id="password"
          name="password"
          type="text"
          placeholder="Enter password"
          value={this.props.password} // Prop: The password input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
      </div>

    )
  }
}
export default StepOne;