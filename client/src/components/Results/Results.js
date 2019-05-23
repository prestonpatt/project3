import React from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Jumbotron';
import { PieChart, Pie, Tooltip, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import Axios from 'axios';
import { Container, Row, Col } from 'react-grid-system';
import Background1 from '../../background1.jpg'
// import UserInfo from '../UserInfo/UserInfo';

const style = {
    h4: {
        textAlign: "center"
    },
    h2: {
        textAlign: "center"
    },
    input: {
        margin: 10
    },
    columns: {
        border: "solid"
    }
}

const API_KEY = "s7oiwfsneb0waz";
// var queryURL = "http://www.numbeo.com:8008/api/indices?api_key=" + API_KEY + "&query="
var queryURL = "https://www.numbeo.com/api/indices?api_key=" + API_KEY + "&query="

class Results extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            currentLocation: {},
            newLocation: {},
            federal: {},
            currentNumbeo: {},
            newNumbeo: {},
        }
    }



    componentDidMount() {
        Axios.get(`/api/record/${this.props.match.params.id}`)
            .then((res) => {
                if (res) {
                    this.setState({
                        user: res.data
                    })
                    console.log(this.state.user)
                }
                return Axios.get(`/api/zip/${this.state.user.zip}`)
                    .then((res) => {
                        if (res) {
                            console.log("This is zipres " + JSON.stringify(res))
                            this.setState({
                                currentLocation: res.data
                            })
                            console.log(this.state.currentLocation)

                        }
                        return Axios.get(queryURL + this.state.currentLocation.city.split(' ').join('-'))
                            .then((response) => {
                                console.log(queryURL)
                                if (response) {
                                    console.log("This is numbeo" + JSON.stringify(response.data))
                                    this.setState({
                                        currentNumbeo: response.data
                                    })
                                }
                                return Axios.get(`/api/zip/${this.state.user.newZipcode}`)
                                    .then((res) => {
                                        if (res) {
                                            console.log("This is newzip" + JSON.stringify(res))
                                            this.setState({
                                                newLocation: res.data
                                            })
                                        }
                                        return Axios.get(queryURL + this.state.newLocation.city.split(' ').join('-'))
                                            .then((response) => {
                                                if (response) {
                                                    this.setState({
                                                        newNumbeo: response.data
                                                    })
                                                }
                                            })
                                    })
                            });
                    })
            })
    }



    render() {
        const user = this.state.user;
        const currentLocation = this.state.currentLocation;
        const newLocation = this.state.newLocation;
        const currentNumbeo = this.state.currentNumbeo;
        const newNumbeo = this.state.newNumbeo;
        const currentTakeHome = user.currentSalary + user.bonus + user.otherIncome;
        const currentStateTax = currentLocation.statetaxes ? currentLocation.statetaxes[0].rate * 100 : null;;
        const currentFederalTax = 0;
        const newTakeHome = user.newCurrentSalary + user.newBonus + user.newOtherIncome;
        const newStateTax = newLocation.statetaxes ? newLocation.statetaxes[0].rate * 100 : null;
        const newFederalTax = 12;
        const currentPayPercentage = 100 - currentStateTax - currentFederalTax;
        const newPayPercentage = 100 - newStateTax - newFederalTax;
        const currentPieChart = [
            { name: 'Take Home Pay', value: currentPayPercentage }, { name: 'Federal Tax', value: currentFederalTax },
            { name: 'State Tax', value: currentStateTax },
            console.log(currentPayPercentage)
        ];
        const newPieChart = [
            { name: 'Take Home Pay', value: newPayPercentage }, { name: 'Federal Tax', value: newFederalTax },
            { name: 'State Tax', value: newStateTax },
            // console.log(newPayPercentage)
        ];
        console.log(newPieChart)
        console.log(`This is user: ${JSON.stringify(user)}`)
        console.log(`This is currentLocation: ${JSON.stringify(currentLocation)}`)
        console.log(`This is numbeo: ${JSON.stringify(currentNumbeo)}`)
        const data = [
            {
                name: 'Consumer Prices', [`${currentLocation.city}`]: currentNumbeo.cpi_index, [`${newLocation.city}`]: newNumbeo.cpi_index, amt: 2400,
            },
            {
                name: 'Rent', [`${currentLocation.city}`]: currentNumbeo.rent_index, [`${newLocation.city}`]: newNumbeo.rent_index, amt: 2210,
            },
            {
                name: 'Groceries', [`${currentLocation.city}`]: currentNumbeo.groceries_index, [`${newLocation.city}`]: newNumbeo.groceries_index, amt: 2290,
            },
            {
                name: 'Purchasing Power', [`${currentLocation.city}`]: currentNumbeo.purchasing_power_incl_rent_index, [`${newLocation.city}`]: newNumbeo.purchasing_power_incl_rent_index, amt: 2000,
            },
            {
                name: 'Health Care', [`${currentLocation.city}`]: currentNumbeo.health_care_index, [`${newLocation.city}`]: newNumbeo.health_care_index, amt: 2181,
            },
            {
                name: 'Crime', [`${currentLocation.city}`]: currentNumbeo.crime_index, [`${newLocation.city}`]: newNumbeo.crime_index, amt: 2500,
            },
            {
                name: 'Pollution', [`${currentLocation.city}`]: currentNumbeo.pollution_index, [`${newLocation.city}`]: newNumbeo.pollution_index, amt: 2100,
            },
        ];

        return (
            <div style={{ backgroundImage: "url(" + Background1 + ")", overflow: "auto", height: '100vh', width: "100vw", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <Container style={{ backgroundColor: "white" }}>
                    <Row>
                        <Col md={12} style={style.h2}>
                            <h2> Here are your results, {`${this.state.user.firstName}`}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} style={style.columns}>
                            <h4 style={style.h4}>Current Salary</h4>
                            <PieChart width={400} height={400}>
                                <Pie dataKey="value" isAnimationActive={false} data={currentPieChart} cx={200} cy={200} outerRadius={80} fill="#07445b" label />
                                <Tooltip />
                            </PieChart>
                        </Col>
                        <Col md={6} style={style.columns}>
                            <h4 style={style.h4}>New Job</h4>
                            <PieChart width={500} height={500}>
                                <Pie dataKey="value" isAnimationActive={false} data={newPieChart} cx={200} cy={200} outerRadius={80} fill="#e5605c" label />
                                <Tooltip />
                            </PieChart>
                        </Col>
                    </Row>
                    <Row style={style.columns}>
                        <Col md={8}>
                            <h4 style={style.h4}>Location Statistics</h4>
                            <BarChart
                                width={1000}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey={currentLocation.city}  fill="#07445b" />
                                <Bar dataKey={newLocation.city}  fill="#e5605c" />
                            </BarChart>
                        </Col>
                        <Col md={4}>
                            <h4 style={style.h4}>Text will Go here</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Results;