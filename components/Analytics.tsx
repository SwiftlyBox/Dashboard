import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import TabComponent from "./TabComponent";

const data = [
  { name: 'Jan', clicks: 0 },
  { name: 'Feb', clicks: 300 },
  { name: 'Mar', clicks: 200 },
  { name: 'Apr', clicks: 278 },
  { name: 'May', clicks: 189 },
  { name: 'Jun', clicks: 239 },
  { name: 'Jul', clicks: 349 },
  { name: 'Aug', clicks: 230 },
  { name: 'Sep', clicks: 280 },
  { name: 'Oct', clicks: 450 },
  { name: 'Nov', clicks: 390 },
  { name: 'Dec', clicks: 400 },
];
// The colors to use for the bars
const colors = ['#8884d8', '#82ca9d', '#ffc658'];

const AnalyticsCard = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 w-932 h-372">
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <div className="bg-red-500 rounded-md p-2">
        <FaStar className="text-white"  style={{ width: '12px', height: '12px' }}/>
      </div>
      <h2 className="text-lg font-semibold  ml-2">Business Analytics</h2>
    </div>
    </div>
    <TabComponent/>
  </div>
  );
};

export default AnalyticsCard;
