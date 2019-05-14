import React from 'react';

const style = {
  h1:{
      fontSize: "1.2rem"
  },
  input:{
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
        {/* <label htmlFor="email">Username</label> */}
        <input
          style={style.input}
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={this.props.username} // Prop: The username input data
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