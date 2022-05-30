import React, { useState, useEffect } from "react"
import ChartContainer from "../components/ChartContainer"

import "../styles/ProcessingScreen.css"

import axios from "axios";
const ProcessingScreen = (props) => {

    const [allFiles, setAllFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState("");
    const [selectedChartType, setSelectedChartType] = useState("bar");

    const changeGraphType = (e) => {
        setSelectedChartType(e.target.value);
    }

    const changeSelectedFile = (e) => {
        setSelectedFile(e.target.value);
    }

    const generateGraph = () => {
        console.log(selectedChartType);
        console.log(selectedFile);
        // console.log(allFiles);
    }

    useEffect(() => {
        axios.get("http://localhost:5000/get_all_uploaded_files")
            .then((response) => {
                // console.log(response.data.uploaded_files);
                setAllFiles(response.data.uploaded_files);
                setSelectedFile(response.data.uploaded_files[0]);
            })
    }, []);

    return (
        <div className="ProcessingScreen">

            <div className="container" style={{ "height": "100%" }}>
                <div className="row" style={{ "height": "100%" }}>
                    <div className="col-md-9 ProcessingScreen__graph-area">
                        <ChartContainer />
                    </div>
                    <div className="col-md-3 ProcessingScreen__properties-area">
                        <div className="properties-area-top">
                            <div className="form-group">
                                <label>File</label>
                                <select className="form-control" onChange={changeSelectedFile}>
                                    {
                                        allFiles.map((file, index) => (
                                            <option value={file} key={index}>{file}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Graph Type</label>
                                <select className="form-control" value={selectedChartType} onChange={changeGraphType}>
                                    <option value="bar">Bar</option>
                                    <option value="line">Line Chart</option>
                                </select>
                            </div>
                        </div>
                        <div className="properties-area-bottom">
                            <button className="btn btn-sm btn-primary" onClick={generateGraph}>Generate</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* graph display area */}

            {/* graph properties */}
        </div>
    );
};

export default ProcessingScreen;