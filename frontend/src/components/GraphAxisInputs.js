import React from 'react'

const GraphAxisInputs = (props) => {
    return (
        <div>
            {props.chartType === "bar" || props.chartType === "line" ? (
                <>
                    <div className="form-group">
                        <label>X-Axis</label>
                        <select className="form-control" onChange={props.changeXAxis}>
                            {props.headers.map((header, index) => (
                                <option value={header} key={index}>{header}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Y-Axis</label>
                        <select className="form-control" onChange={props.changeYAxis}>
                            {props.headers.map((header, index) => (
                                <option value={header} key={index}>{header}</option>
                            ))}
                        </select>
                    </div>
                </>
            ) : null}

            {/* {props.chartType === "line" ? (
                <h1>Line</h1>
            ) : null} */}
        </div>
    )
}

export default GraphAxisInputs