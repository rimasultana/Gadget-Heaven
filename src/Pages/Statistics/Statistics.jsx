import {
  ComposedChart,
  Bar,
  Line,
  Area,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Statistics() {

  const data = [
    { name: "Laptop", price: 90, rating: 4.5, total: 100 },
    { name: "Samsung", price: 80, rating: 4.0, total: 95 },
    { name: "Watch", price: 85, rating: 4.2, total: 98 },
    { name: "MacBook", price: 70, rating: 3.9, total: 90 },
    { name: "Dell", price: 95, rating: 4.8, total: 100 },
    { name: "Iphone", price: 100, rating: 4.9, total: 100 },
  ];

  return (
    <>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <div className="text-center bg-[#9538E2] w-full h-60 flex flex-col items-center pt-10">
        <h1 className="text-3xl text-white py-3">Statistics</h1>
        <p className="text-white">
          It provides a framework for making informed decisions based on
          numerical information, enabling researchers and analysts <br />
          to summarize large amounts of data in a meaningful way.
        </p>
      </div>

      <div className="w-4/5 mt-10  flex flex-col items-center mx-auto">
        <div className="text-start flex justify-start ">
          <h1 className="text-3xl font-bold my-10">Statistics</h1>
        </div>
        <ComposedChart width={1200} height={400} data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="price"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="total" barSize={20} fill="#9538E2" />
          <Line type="monotone" dataKey="rating" stroke="red" />
        </ComposedChart>
      </div>
    </>
  );
}
