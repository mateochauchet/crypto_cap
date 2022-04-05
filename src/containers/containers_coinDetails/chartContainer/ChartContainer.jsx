import React from 'react';
import './chartContainer.css';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getCoinChartData } from '../../../service/coinsService';
import {Chart ,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,FillMode} from 'chart.js';
import { Line } from 'react-chartjs-2';

const ChartContainer = () => {

    const {id} = useParams();
    const {data, isLoading, error} = useQuery(['getCoinChartData'],()=>getCoinChartData(id,20));

    const price = [];
    const coinTimestap = [];

    for (let i = 0; i < data?.prices?.length; i++) {
        price.push(data.prices[i][1])
        coinTimestap.push( new Date(data.prices[i][0]).toLocaleDateString() )
    }
    console.log({price,coinTimestap})

    const chartData = {
        labels:coinTimestap,
        datasets:[{
            label:'Price ( USD )',
            data:price,
            fill:false,
            backgroundColor:'#0FAE96',
            borderColor:'#0FAE96',
            tension:0.1,
            pointRadius:1,
        }]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display:true,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        },
    };

    

    return (
        <div className='coinDetails__chartContainer'>
            <Line data={chartData} options={options} />
        </div>
    )
}

export default ChartContainer
