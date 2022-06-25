import React, { useState, useEffect } from "react"
import ChartContainer from "../components/ChartContainer"
import GraphAxisInputs from "../components/GraphAxisInputs"

import "../styles/ProcessingScreen.css"

import default_pic from "../assets/images/default_pic.jpg"
import { get_data_options } from "../utils/DataOptions";

import axios from "axios";
const ProcessingScreen = () => {

    let [data, setData] = useState({});
    let [options, setOptions] = useState({});
    let [labels, setLabels] = useState([]);
    let [yvalues, setYValues] = useState([]);
    const [allFiles, setAllFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState("");
    const [selectedChartType, setSelectedChartType] = useState("bar");
    const [fileHeaders, setFileHeaders] = useState([]);
    const [graphPlotted, setGraphPlotted] = useState(false);
    const [xaxis, setXaxis] = useState("");
    const [yaxis, setYaxis] = useState("");

    const changeGraphType = (e) => {
        setSelectedChartType(e.target.value);
    }

    const changeSelectedFile = (e) => {
        setSelectedFile(e.target.value);
    }

    const changeXAxis = (e) => {
        setXaxis(e.target.value);
    }

    const changeYAxis = (e) => {
        setYaxis(e.target.value);
    }

    const generateGraph = () => {

        setGraphLabels();
        setGraphYValues();

    }

    const generateGraphFinal = () => {
        // set data
        let get_data = {
            labels,
            datasets: [
                {
                    label: "Dataset 1",
                    data: yvalues,
                    backgroundColor: "rgba(53, 162, 235, 0.5)"
                }
            ],
        };

        let get_options = get_data_options();

        setData(get_data);
        setOptions(get_options);
        setGraphPlotted(true);
    }

    const setGraphLabels = () => {
        axios.get(`http://localhost:5000/get_column_content?file_name=${selectedFile}&column_name=${xaxis}`)
            .then((response) => {
                setLabels(response.data.content);
            });
    }

    const setGraphYValues = () => {
        axios.get(`http://localhost:5000/get_column_content?file_name=${selectedFile}&column_name=${yaxis}`)
            .then((response) => {
                setYValues(response.data.content);
            })
    }

    useEffect(() => {
        axios.get("http://localhost:5000/get_all_uploaded_files")
            .then((response) => {
                // console.log("all uploaded files: " + response.data.uploaded_files);
                setAllFiles(response.data.uploaded_files);
                setSelectedFile(response.data.uploaded_files[0]);
            })
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5000/get_file_headers?filename=${selectedFile}`)
            .then((response) => {
                // console.log("file headers: " + response.data.headers);
                setFileHeaders(response.data.headers);
                setXaxis(response.data.headers[0]);
                setYaxis(response.data.headers[0])
            })
    }, [selectedFile]);

    useEffect(() => {
        console.log("labels: ", labels);
        generateGraphFinal();
    }, [labels, yvalues]);

    return (
        <div className="ProcessingScreen">

            <div className="container" style={{ "height": "100%" }}>
                <div className="row" style={{ "height": "100%" }}>
                    {/* graph display area */}
                    <div className="col-md-9 ProcessingScreen__graph-area">
                        {graphPlotted ? (
                            <ChartContainer data={data} options={options} chartType={selectedChartType} />
                        ) : (
                            <div style={noGraphStyle}>

                            </div>
                        )}
                    </div>
                    {/* end of graph display area */}

                    {/* graph properties */}
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
                            <GraphAxisInputs
                                chartType={selectedChartType}
                                headers={fileHeaders}
                                changeXAxis={changeXAxis}
                                changeYAxis={changeYAxis}
                            />
                        </div>
                        <div className="properties-area-bottom">
                            <button className="btn btn-sm btn-primary" onClick={generateGraph}>Generate</button>
                        </div>
                    </div>
                    {/* end of graph properties */}
                </div>
            </div>



        </div>
    );
};

const noGraphStyle = {
    backgroundImage: `url(${default_pic})`,
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}

export default ProcessingScreen;