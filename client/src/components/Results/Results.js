import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Jumbotron';
import { PieChart, Pie, Tooltip } from 'recharts';
const data01 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

class Results extends React.Component {
    render() {
        return (
            <Jumbotron>
                <h1>Here are your results</h1>
                <PieChart width={400} height={400}>
                    <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                    <Tooltip />
                </PieChart>

            </Jumbotron>
        )
    }
}
export default Results;