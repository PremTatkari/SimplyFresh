import React, { PureComponent } from 'react';
import "../console.css";
import image from '../farmericon.png';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function Console() {

    const data = [
        { name: "january", value: 3000 },
        { name: "February", value: 2000 },
        { name: "March", value: 2000 },
        { name: "April", value: 2000 },
    ];
    return (
        <div>
            <div class="float-container">

                <div class="float-child">
                    <div style={{ fontSize: '30px' }}>Welcome Rayson</div>

                    <div style={{ width: "50%", float: "left" }}>
                        <img src={image}></img>
                    </div>
                    <div style={{ width: "50%", float: "left" }}>
                        <div style={{ fontSize: '30px' }}>Your Rating
                            <h1>4.5</h1>
                        </div>
                        <div style={{ fontSize: '30px' }}>Current Month Profit
                            <h1>₹4000</h1>
                        </div> 
                              
                        
                        </div>
                    <div>
                        </div>    

                    </div>

                    <div class="float-child">
                        <div >Your Profits</div>
                        <div>

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
                                barSize={20}
                            >
                                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                            </BarChart>

                        </div>
                    </div>

                </div>

            </div>
            )
}
