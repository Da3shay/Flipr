import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";



export default function Chartprofilethree(props) {
  
    console.log(props.userdataa, "sasasaasaaaaaaaaaaaaaa");
    const data01 = [
        { name: "Work", value: 400 },
        { name: "Break", value: 300 },
        { name: "Meeting", value: 300 },
      ];
      
      const data02 = [
        { name: "Work", value: 2400 },
        { name: "Break", value: 4567 },
        { name: "Meeting", value: 1398 },
   
      ];
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="20%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data02}
          cx="80%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
