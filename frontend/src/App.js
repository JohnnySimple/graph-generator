import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";



// import components
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";

// import screens
import FileUploadScreen from "./screens/FileUploadScreen";
import ProcessingScreen from "./screens/ProcessingScreen";

function App() {

  return (
    <div className="App">
      {/* <Layout />
      <div className="FileUploadSection">
        <div className="FileUploadInner">
          <div className="FileUploadSection__input">
            <input type="file" onChange={changeFile} />
          </div>
          <div className="FileUploadSection__button">
            <Button label="Upload File" onClick={uploadFile} />
          </div>
        </div>
      </div> */}

      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="file-upload" element={<FileUploadScreen />} />
            <Route path="process" element={<ProcessingScreen />} />
          </Route>
          <Route path="sidebar" element={<Sidebar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
