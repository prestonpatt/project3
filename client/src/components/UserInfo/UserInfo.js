import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Axios from 'axios';
// import Button from 'react-bootstrap/Jumbotron';

class UserInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        Axios
            .get(`/api/record/${this.props.match.params.id}`).then((res) => 
                    {if (res) {this.setState({ user: res.data})}
                    console.log(res.data)
                    // console.log(this.state)
            })
    }
    
    render() {
        const user = this.state.user;
        const data01 = [
            { name: 'Group A', value: user.currentSalary + user.bonus + user.otherIncome }, { name: 'Group B', value: 300 },
            { name: 'Group C', value: 0 }, { name: 'Group D', value: 200 },
            { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
        ];
        return (
            
            <Jumbotron>
                <h1>Here are your results, {`${ this.state.user.firstName }`}</h1>
                <ul>
                    <li>{`${ this.state.user.email }`}</li>
                    <li>{`${ this.state.user.zip }`}</li>
                    <li>{`${ this.state.user.currentSalary }`}</li>
                    <li>{`${ this.state.user.bonus }`}</li>
                    <li>{`${ this.state.user.otherIncome }`}</li>
                </ul>
            </Jumbotron>
        )
    }
}

export default UserInfo;