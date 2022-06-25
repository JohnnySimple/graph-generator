import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// data = {
//     labels,
//     datasets: [
//         {
//             label: "Dataset 1",
//             data: [50, 55, 60, 65, 70, 75, 80],
//             backgroundColor: "rgba(255, 99, 132, 0.5)"
//         },
//         {
//             label: "Dataset 2",
//             data: [50, 55, 60, 65, 70, 75, 80],
//             backgroundColor: "rgba(53, 162, 235, 0.5)"
//         }
//     ],
// };

// options = {
//     plugins: {
//         title: {
//             display: true,
//             text: "TestingChart"
//         },
//         legend: {
//             display: true,
//             position: "bottom"
//         }
//     }
// }

const BarChart = (props) => {
    return (
        <Bar data={props.data} options={props.options} />
    )
}

export default BarChart