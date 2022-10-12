import React, { useContext } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ItemsContext } from '../Layout/Layout';

const Charts = () => {
    const data = useContext(ItemsContext)
    return (
        <div style={{ width: '60%', height: 400 }} className='my-20 mx-auto text-slate-500'>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#123465" fill="#27C6E2" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Charts;