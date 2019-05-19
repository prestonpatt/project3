import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Jumbotron';
import { PieChart, Pie, Tooltip } from 'recharts';
import Axios from 'axios';
import UserInfo from '../UserInfo/UserInfo';


class Results extends React.Component {
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
                <PieChart width={400} height={400}>
                    <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                    <Tooltip />
                </PieChart>

                
            </Jumbotron>
        )
    }
}
export default Results;