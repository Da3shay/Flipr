import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Day 1',
    Meeting: 4000,
    Break: 2400,
    Work: 2400,
  },
  {
    name: 'Day 2',
    Meeting: 3000,
    Break: 1398,
    Work: 2210,
  },
  {
    name: 'Day 3',
    Meeting: 2000,
    Break: 9800,
    Work: 2290,
  },
  {
    name: 'Day 4',
    Meeting: 2780,
    Break: 3908,
    Work: 2000,
  },
  {
    name: 'Day 5',
    Meeting: 1890,
    Break: 4800,
    Work: 2181,
  },
  {
    name: 'Day 6',
    Meeting: 2390,
    Break: 3800,
    Work: 2500,
  },
  {
    name: 'Day 7  ',
    Meeting: 3490,
    Break: 4300,
    Work: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  render(props) {
    

    return (
      <ResponsiveContainer width="90%" height="90%" style={{marginLeft:"auto", marginRight:"auto"}}>
        <BarChart
          width={500}
          height={300}
          data={this.props.userdataa}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="break" stackId="a" fill="#8884d8" />
          <Bar dataKey="meeting" stackId="a" fill="#82ca9d" />
          <Bar dataKey="work" stackId="a" fill="#000" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
