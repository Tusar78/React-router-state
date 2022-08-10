import React from "react";
import {
  LineChart,
  Line,
} from "recharts";

const data = [
  {
    name: 'Page A',
    uv: 4000,
    price: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    price: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    price: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    price: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    price: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    price: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    price: 4300,
    amt: 2100,
  },
];

const MyChart = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-100 via-purple-200 to-blue-100 ">
      <div className="container mx-auto">
        <LineChart width={500} height={300} data={data}>
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default MyChart;
