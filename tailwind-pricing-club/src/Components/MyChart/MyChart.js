import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  BarChart, 
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

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

const BASE_URL = 'https://openapi.programming-hero.com/api/phones?search=iphone';

const MyChart = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        const data = res.data.data;
        const phoneData = data.map(phone => {
          const parts = phone.slug.split('-');
          const ph = {
            name: parts[0],
            value: parseInt(parts[1])
          }
          return ph;
        })
        console.log(phoneData);
        setPhones(phoneData);
      })
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto mt-8">
        <LineChart
          width={1200}
          height={400}
          data={phones}
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
            dataKey="value"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
        </LineChart>

        <div className="my-4"></div>

        <BarChart
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
          <Bar dataKey="price" fill="#8884d8" />
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default MyChart;
