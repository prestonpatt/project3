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
            user: {},
            newzip: {}
        }
    }

    componentDidMount() {
        Axios.get(`/api/record/${this.props.match.params.id}`)
            .then((res) => {
                if (res) {
                    this.setState({
                        user: res.data
                    })
                }
                return Axios.get(`/api/zipCodes/${this.state.user.zipCode}`)
                    .then((zipres) => {
                        if (zipres) {
                        // console.log("This is zipres " + JSON.stringify(zipres))
                        this.setState({
                            newzip: zipres.data
                        })
                    }
                    console.log(this.state.user)
                    console.log(this.state.newzip)
                    }
                    )
            })
    }

    // .then(Axios.spread((recres, zipres) => {
    //     this.setState({
    //         user: recres.data,
    //         new: zipres.data
    //     })
    //     console.log("This is recres: " + JSON.stringify(recres.data))
    //     console.log("This is zipres: " + zipres.data)
    // })
    // )
// }

render() {
    const user = this.state.user;
    const data01 = [
        { name: 'Group A', value: user.currentSalary + user.bonus + user.otherIncome }, { name: 'Group B', value: 300 },
        { name: 'Group C', value: 0 }, { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
    ];
    return (
        <Jumbotron>
        
            <h1>Here are your results, {`${user.firstName}`}</h1>
            <h3>Your take home pay is: {`${user.currentSalary * 0.1}`}</h3>
            <PieChart width={400} height={400}>
                <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                <Tooltip />
            </PieChart>


        </Jumbotron>
    )
}
}
export default Results;