import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Product A",
    sales: 4000,
    price: 2400,
    amt: 2400,
  },
  {
    name: "Product B",
    sales: 3000,
    price: 1398,
    amt: 2210,
  },
  {
    name: "Product C",
    sales: 2000,
    price: 9800,
    amt: 2290,
  },
  {
    name: "Product D",
    sales: 2780,
    price: 3908,
    amt: 2000,
  },
  {
    name: "Product E",
    sales: 1890,
    price: 4800,
    amt: 2181,
  },
  {
    name: "Product F",
    sales: 2390,
    price: 3800,
    amt: 2500,
  },
  {
    name: "Product G",
    sales: 3490,
    price: 4300,
    amt: 2100,
  },
];

const MyChart = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-100 via-purple-200 to-blue-100 ">
      <div className="container mx-auto">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </div>
    </div>
  );
};

export default MyChart;
