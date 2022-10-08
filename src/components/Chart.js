import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Work Hours', value: 400 },
  { name: 'Break Hours', value: 300 },
  { name: 'Meeting Hours', value: 300 },

];



export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          />
       
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
