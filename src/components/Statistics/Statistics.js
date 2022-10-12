import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid } from 'recharts';
import './Statistics.css'


const Statistics = () => {
    const chartData = useLoaderData();
    const rawData = chartData.data;
    console.log(rawData)
    const data = [
        {
            name: 'React',
            qn: 8,
        },
        {
            name: 'Javascript',
            qn: 9,
        },
        {
            name: 'CSS',
            qn: 8,
        },
        {
            name: 'Git',
            qn: 11,
        }
    ];

    return (
        <div>
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
                <Line type="monotone" dataKey="qn" stroke="#8884d8" activeDot={{ r: 8 }} />

            </LineChart>
        </div>
    );
};

export default Statistics;