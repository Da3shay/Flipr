import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";



export default function Chartprofilethree(props) {
  
    // console.log(props.userdataa[0], "sasasaasaaaaaaaaaaaaaa");
    const data01 = [
        { name: "Work", value: parseInt(props.userdataa?.[0].work) },
        { name: "Break", value: parseInt(props.userdataa?.[0].break) },
        { name: "Meeting", value: parseInt(props.userdataa?.[0].meeting) },
      ];
      
      const data02 = [
        { name: "Work", value: parseInt(props.userdataa?.[1].work) },
        { name: "Break", value: parseInt(props.userdataa?.[1].break) },
        { name: "Meeting", value: parseInt(props.userdataa?.[1].meeting) },
   
      ];
    // var u1w=props.userdataa?.[1].work ;
    // const data01 = [
    //   { name: "Work", value:130 },
    //   { name: "Break", value: 30},
    //   { name: "Meeting", value: 50},
    // ];
    // console.log(u1w,"u1wu1wu1wu1w");
    // const data02 = [
    //   { name: "Work", value:10 },
    //   { name: "Break", value:40 },
    //   { name: "Meeting", value: 10 },
 
    // ];
  
    
  
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
