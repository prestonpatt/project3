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
const API_KEY = process.env.NUMBEOKEY
var queryURL = "http://www.numbeo.com:8008/api/indices?api_key=" + API_KEY + "&query="

class Results extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            newzip: {},
            federal: {},
            numbeo: {},
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
                                newzip: res.data
                            })
                            console.log(this.state.newzip)

                        }
                        return Axios.get(queryURL + this.state.user.zip.state)
                            .then((response) => {
                                console.log(this.state.user)
                                if (response) {
                                    console.log("This is numbeo" + JSON.stringify(response.data))
                                    this.setState({
                                        numbeo: response.data
                                    })
                                }
                                return Axios.get(`/api/federaltax/`)
                            });
                    }
                    )
            })
    }



    render() {
        const user = this.state.user;
        const newzip = this.state.newzip;
        const numbeo = this.state.numbeo;
        const takeHome = user.currentSalary + user.bonus + user.otherIncome;
        const stateTaxRate = newzip.statetaxes ? newzip.statetaxes[0].rate : null;
        const federalTaxRate = 0;
        const data01 = [
            { name: 'Take Home Pay', value: 100 - stateTaxRate }, { name: 'Federal Tax', value: 0 },
            { name: 'State Tax', value: stateTaxRate },
        ];

        const data = [
            {
                name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
            },
            {
                name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
            },
            {
                name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
            },
            {
                name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
            },
            {
                name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
            },
            {
                name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
            },
            {
                name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
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
                                <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                                <Tooltip />
                            </PieChart>
                        </Col>
                        <Col md={6} style={style.columns}>
                            <h4 style={style.h4}>New Job</h4>
                            <PieChart width={500} height={500}>
                                <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#82ca9d" label />
                                <Tooltip />
                            </PieChart>
                        </Col>
                    </Row>
                    <Row style={style.columns}>
                        <Col md={8}>
                            <h4 style={style.h4}>Numbeo Data</h4>
                            <BarChart
                                width={500}
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
                                <Bar dataKey="uv" fill="#8884d8" />
                                <Bar dataKey="pv" fill="#82ca9d" />
                            </BarChart>
                        </Col>
                        <Col md={4}>
                            <h4 style={style.h4}>Text will Go here</h4>
                        </Col>
                    </Row>
                </Container >
            </div>
        )
    }
}
export default Results;