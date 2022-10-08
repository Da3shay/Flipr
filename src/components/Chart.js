import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {

  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

  render(props) {
   
    const data01 = [
      { name: 'Work Hours', value: Math.trunc(this.props.piedata[0]) },
      { name: 'Break Hours', value: Math.trunc(this.props.piedata[1]) },
      { name: 'Meeting Hours', value: Math.trunc(this.props.piedata[2]) },
    
    ];
    console.log(Math.trunc(this.props.piedata[0]),"piedata  ")
    
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={180}
            fill="#8884d8"
            label
          />
       
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
