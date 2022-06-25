import React from 'react'

import BarChart from "../charts/BarChart"
import LineChart from "../charts/LineChart"


const ChartContainer = (props) => {
    return (
        <>
            {props.chartType === "bar" ? (
                <BarChart data={props.data} options={props.options} />
            ) : null}

            {props.chartType === "line" ? (
                <LineChart data={props.data} options={props.options} />
            ) : null}
        </>

    )
}

export default ChartContainer