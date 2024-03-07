import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const BarChat = ({ dns }) => {

    const data = [
        {
            name: 'A',
            type: dns.filter((item) => item.record_type === "A").length,
        },
        {
            name: 'AAAA',
            type: dns.filter((item) => item.record_type === "AAAA").length,
        },
        {
            name: 'AFSDB',
            type: dns.filter((item) => item.record_type === "AFSDB").length,
        },
        {
            name: 'APL',
            type: dns.filter((item) => item.record_type === "APL").length,
        },
        {
            name: 'CAA',
            type: dns.filter((item) => item.record_type === "CAA").length,
        },
        {
            name: 'CDNSKEY',
            type: dns.filter((item) => item.record_type === "CDNSKEY").length,
        },
        {
            name: 'CDS',
            type: dns.filter((item) => item.record_type === "CDS").length,
        },
        {
            name: 'CSYNC',
            type: dns.filter((item) => item.record_type === "CSYNC").length,
        },
        {
            name: 'SVCB',
            type: dns.filter((item) => item.record_type === "SVCB").length,
        },
    ];


    return (
        <div className='charts-container'>
            <p style={{ fontWeight: "600", fontSize: "16px", padding: "0.5rem" }}>This BarChart represents Record types </p>
            <ResponsiveContainer width="99%" height="85%">
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
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="type" barSize={20} fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

}

export default BarChat