import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";



// import components
import Layout from "./components/Layout";
import HomeLayout from "./components/HomeLayout";
// import Sidebar from "./components/Sidebar";

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
            <Route path="process" element={<ProcessingScreen />} />
          </Route>
          <Route path="/home" element={<HomeLayout />}>
            <Route path="file-upload" element={<FileUploadScreen />} />
          </Route>
          <Route path="homelayout" element={<HomeLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
