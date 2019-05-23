import React from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Jumbotron';
import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
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
    },
    PieChart: {
        textAlign: "center"
    }
}
const API_KEY = "s7oiwfsneb0waz";
// const API_KEY2 = ""
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
                }
                return Axios.get(`/api/zip/${this.state.user.zip}`)
                    .then((res) => {
                        if (res) {
                            this.setState({
                                currentLocation: res.data
                            })
                        }
                        return Axios.get(queryURL + this.state.currentLocation.city.split(' ').join('-'))
                            .then((response) => {
                                if (response) {
                                    this.setState({
                                        currentNumbeo: response.data
                                    })
                                }
                                return Axios.get(`/api/zip/${this.state.user.newZipcode}`)
                                    .then((res) => {
                                        if (res) {
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
        const currentTotal = user.currentSalary + user.bonus + user.otherIncome;
        const currentTakeHome = currentTotal; 
        const currentStateTax = currentLocation.statetaxes ? currentLocation.statetaxes[0].rate : null;;
        function federalTax(income) {
            if (income <= 9525) {
                return 0.1;
            } else if (income <= 38700) {
                return 0.12;
            } else if (income <= 82500) {
                return 0.22;
            } else if (income <= 157500) {
                return 0.24;
            } else if (income <= 200000) {
                return 0.32;
            } else if (income <= 500000) {
                return 0.35;
            } else if (income >= 500001) {
                return 0.37;
            }
        };
        const currentFederalTax = federalTax(currentTotal);
        const newTotal = user.newCurrentSalary + user.newBonus + user.newOtherIncome;
        const newTakeHome = newTotal;
        const newStateTax = newLocation.statetaxes ? newLocation.statetaxes[0].rate : null;
        const newFederalTax = federalTax(newTotal);
        const currentPayPercentage = 100 - (currentStateTax * 100) - (currentFederalTax * 100);
        const newPayPercentage = 100 - (newStateTax * 100) - (newFederalTax * 100);
        const currentPieChart = [
            { name: 'Take Home Pay', value: currentPayPercentage},
            { name: 'Federal Tax', value: currentFederalTax * 100},
            { name: 'State Tax', value: currentStateTax * 100},
        ];
        const newPieChart = [
            { name: 'Take Home Pay', value: newPayPercentage },
            { name: 'Federal Tax', value: newFederalTax * 100},
            { name: 'State Tax', value: newStateTax * 100},
        ];
        const data = [
            {
                name: 'Consumer Prices',
                [`${currentLocation.city}`]: Math.round(currentNumbeo.cpi_index * 100) / 100,
                [`${newLocation.city}`]: Math.round(newNumbeo.cpi_index * 100) / 100,
                amt: 2400,
            },
            {
                name: 'Rent Prices',
                [`${currentLocation.city}`]: Math.round(currentNumbeo.rent_index * 100) / 100,
                [`${newLocation.city}`]: Math.round(newNumbeo.rent_index * 100) / 100,
                amt: 2210,
            },
            {
                name: 'Groceries Prices',
                [`${currentLocation.city}`]: Math.round(currentNumbeo.groceries_index * 100) / 100,
                [`${newLocation.city}`]: Math.round(newNumbeo.groceries_index * 100) / 100,
                amt: 2290,
            },
            {
                name: 'Purchasing Power',
                [`${currentLocation.city}`]: Math.round(currentNumbeo.purchasing_power_incl_rent_index * 100) / 100,
                [`${newLocation.city}`]: Math.round(newNumbeo.purchasing_power_incl_rent_index * 100) / 100,
                amt: 2000,
            },
            {
                name: 'Health Care Quality',
                [`${currentLocation.city}`]: Math.round(currentNumbeo.health_care_index * 100) / 100,
                [`${newLocation.city}`]: Math.round(newNumbeo.health_care_index * 100) / 100,
                amt: 2181,
            },
            {
                name: 'Crime Rate',
                [`${currentLocation.city}`]: Math.round(currentNumbeo.crime_index * 100) / 100,
                [`${newLocation.city}`]: Math.round(newNumbeo.crime_index * 100) / 100,
                amt: 2500,
            },
            {
                name: 'Pollution Rate',
                [`${currentLocation.city}`]: Math.round(currentNumbeo.pollution_index * 100) / 100,
                [`${newLocation.city}`]: Math.round(newNumbeo.pollution_index * 100) / 100,
                amt: 2100,
            },
        ];

        return (
            <div style={{ backgroundImage: "url(" + Background1 + ")", overflow: "auto", height: '100vh', width: "100vw", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <Container style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", }}>
                    <Row>
                        <Col md={12} style={style.h2}>
                            <h2> Here are your results, {`${this.state.user.firstName}`}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} style={style.columns}>
                            <h4 style={style.h4}>Current Salary</h4>
                            <ul>
                                <li>Your current take home pay is: ${currentTotal - (currentTakeHome * (currentFederalTax + currentStateTax))}</li>
                                <li>You pay ${currentFederalTax * currentTotal} right now in federal taxes.</li>
                                <li>You pay ${currentStateTax * currentTotal} right now in state taxes.</li>
                            </ul>
                            <PieChart style={style.PieChart} width={500} height={500}>
                                <Pie dataKey="value" isAnimationActive={false} data={currentPieChart} cx={200} cy={200} outerRadius={120} fill="#07445b" label />
                                <Tooltip />
                            </PieChart>
                        </Col>
                        <Col md={6} style={style.columns}>
                            <h4 style={style.h4}>New Salary</h4>
                            <ul>
                                <li>Your new take home pay will be: ${newTotal - (newTakeHome * (newFederalTax + newStateTax))}</li>
                                <li>You will pay ${newFederalTax * newTotal} in federal taxes.</li>
                                <li>You will pay ${newStateTax * newTotal} in state taxes.</li>
                            </ul>
                            <PieChart width={500} height={500}>
                                <Pie dataKey="value" isAnimationActive={false} data={newPieChart} cx={200} cy={200} outerRadius={120} fill="#e5605c" label />
                                <Tooltip />
                            </PieChart>
                        </Col>
                    </Row>
                    <Row style={style.columns}>
                        <Col md={12}>
                            <h4 style={style.h4} width={1100}>Location Statistics</h4>
                            <BarChart
                                width={1100}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis type="number" domain={[0, "maxData"]} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey={this.state.currentLocation.city} fill="#07445b" />
                                <Bar dataKey={this.state.newLocation.city} fill="#e5605c" />
                            </BarChart>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Results;