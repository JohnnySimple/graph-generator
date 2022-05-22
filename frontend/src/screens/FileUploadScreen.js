import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FileUploadScreen.css";

// import components
import Button from "../components/Button";

// import packages
import axios from "axios";

const FileUploadScreen = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [errorUploadingFile, setErrorUploadingFile] = useState(false);

    const navigate = useNavigate();

    const changeFile = event => {
        setSelectedFile(event.target.files[0]);
    }

    const uploadFile = () => {
        if (!selectedFile) {
            setErrorUploadingFile(true);
            return;
        }
        // console.log(selectedFile.name);
        const formData = new FormData();

        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );

        // send request to backend
        axios.post("http://localhost:5000/upload_file", formData)
            .then(
                (response) => {
                    console.log(response.data);
                    setErrorUploadingFile(false);
                    navigate("/process");
                }
            )
            .catch(
                (error) => {
                    setErrorUploadingFile(true);
                    console.log(error);
                }
            );
    }

    return (
        <div className="FileUploadScreen">
            {
                errorUploadingFile ? (
                    <div className="FileUploadScreen__error">
                        <p>Error uploading file. (Only excel files are allowed).</p>
                    </div>
                ) : null
            }
            <div className="FileUploadSection">
                <div className="FileUploadInner">
                    <div className="FileUploadSection__input">
                        <input type="file" onChange={changeFile} />
                    </div>
                    <div className="FileUploadSection__buttonSection">
                        <Button label="Upload File" onClick={uploadFile} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUploadScreen;
