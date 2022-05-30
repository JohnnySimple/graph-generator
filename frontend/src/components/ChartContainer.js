import React from 'react'
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// import { Bar } from 'react-chartjs-2';

import BarChart from "../charts/BarChart"

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: [50, 55, 60, 65, 70, 75, 80],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        },
        {
            label: "Dataset 2",
            data: [50, 55, 60, 65, 70, 75, 80],
            backgroundColor: "rgba(53, 162, 235, 0.5)"
        }
    ],
};

const options = {
    plugins: {
        title: {
            display: true,
            text: "TestingChart"
        },
        legend: {
            display: true,
            position: "bottom"
        }
    }
}


const ChartContainer = () => {
    return (
        <BarChart data={data} options={options} />
        // <Bar data={data}
        //     options={{
        //         plugins: {
        //             title: {
        //                 display: true,
        //                 text: 'just testing'
        //             },
        //             legend: {
        //                 display: true,
        //                 position: "bottom"
        //             }
        //         }
        //     }} />
    )
}

export default ChartContainer