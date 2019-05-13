import React from 'react';

const style = {
  h1:{
      fontSize: "1.2rem"
  },
  input:{
      margin: 10
  }
}

class StepTwo extends React.Component {
  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }
    return (
      <div className="form-group">
        {/* <label htmlFor="city">city</label> */}
        <input
          style={style.input}
          className="form-control"
          id="city"
          name="city"
          type="text"
          placeholder="Enter City"
          value={this.props.city} // Prop: The city input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        {/* <label htmlFor="state">state</label> */}
        <input
          style={style.input}
          className="form-control"
          id="state"
          name="state"
          type="text"
          placeholder="Enter state"
          value={this.props.state} // Prop: The state input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        {/* <label htmlFor="currentSalary">currentSalary</label> */}
        <input
          style={style.input}
          className="form-control"
          id="currenSalary"
          name="currentSalary"
          type="text"
          placeholder="Enter your current salary"
          value={this.props.currentSalary} // Prop: The current salary input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        {/* <label htmlFor="bonus">bonus</label> */}
        <input
          style={style.input}
          className="form-control"
          id="bonus"
          name="bonus"
          type="text"
          placeholder="Enter Bonus"
          value={this.props.bonus} // Prop: The bonus input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        {/* <label htmlFor="otherIncome">other income</label> */}
        <input
          style={style.input}
          className="form-control"
          id="otherIncome"
          name="otherIncome"
          type="text"
          placeholder="Enter Other Income"
          value={this.props.otherIncome} // Prop: The otherIncome input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
      </div>

    )
  }
}
export default StepTwo;