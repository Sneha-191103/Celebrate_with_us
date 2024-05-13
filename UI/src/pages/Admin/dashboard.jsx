import React, { useEffect, useRef, useState } from 'react';
import { FaBirthdayCake, FaCartPlus, FaMoneyCheckAlt, FaUserTie, FaUsers } from 'react-icons/fa';
import Chart from 'chart.js/auto';
import '../../css/dasboard.css';

function Dashboard() {
    const [data, setData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        values: [65, 59, 80, 81, 56, 55, 40],
    });

    const chartContainer = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartContainer.current) {
            chartRef.current = new Chart(chartContainer.current, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Sales',
                            data: data.values,
                            backgroundColor: '#ffdde1', // Blue color
                            borderColor: '#ee9ca7', // Border color
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }

        // Cleanup function
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [data]);

    return (
        <div className="dashboard">
            <h1>Welcome to Dashboard</h1>
            <div style={{ padding: '20px 20px 20px 20px' }} className='dash-borad-flex'>
                <div className="dash-bord">
                    <div className="dashb">
                        <div className="dash-box-gap">
                            <div className="dashboard-box">
                                <div className="dashboard-text">Total Users<br></br>10<br></br><FaUsers style={{ fontSize: '30px', marginLeft: "180px", marginTop: "40px" }} /></div>
                            </div>
                            <div className="dashboard-box">
                                <div className="dashboard-text">Net Profit<br></br>₹1,00,000<br></br><FaMoneyCheckAlt style={{ fontSize: '30px', marginLeft: "180px", marginTop: "40px" }} /></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="dash-box-gap">
                            <div className="dashboard-box">
                                <div className="dashboard-text">Total Orders<br></br>10<br></br><FaCartPlus style={{ fontSize: '30px', marginLeft: "180px", marginTop: "40px" }} /></div>
                            </div>
                            <div className="dashboard-box">
                                <div className="dashboard-text">Total Events<br></br>5<br></br><FaBirthdayCake style={{ fontSize: '30px', marginLeft: "180px", marginTop: "40px" }} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '40px 20px 20px 20px' }}>
                    <canvas ref={chartContainer} width="400" height="400"></canvas>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
