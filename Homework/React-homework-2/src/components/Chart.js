import React from "react";
import { useLocation } from "react-router-dom";
import { Pie, PieChart, Cell } from "recharts";

function Chart() {
  let location = useLocation();

  let data = [
    { classfication: "carbohydrate", value: location.state.carbohydrate * 4 },
    { classfication: "protein", value: location.state.protein * 4 },
    { classfication: "fat", value: location.state.fat * 9 },
    { classfication: "sugars", value: location.state.sugars * 4 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Cell 태그는 Pie의 옵션보다 우선적으로 적용됨
  return (
    <div>
      <h2>{location.state.name}</h2>
      <h3>1회 섭취량 당 칼로리 {location.state.calorie} kcal</h3>
      <PieChart width={730} height={300} fill="#8884d8">
        <Pie
          data={data}
          labelLine={false}
          label={(e) => (e.value ? e.classfication + " " + e.value : "")}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default Chart;
