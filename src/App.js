import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import resData from "./assets/res_primaryLanguage.json";
import sharedData from './assets/portfolio_shared_data.json';
//import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import AllProjects from "./screens/AllProjects";
import ReCollect from "./screens/More/ReCollect";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {resData}.resData,
      sharedData: {sharedData}.sharedData,
    };
  }

  render() {
    return (
      <Router>
      <div>
        {/* <Header sharedData={this.state.sharedData.basic_info} /> */}
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/projects" element={<AllProjects
              resumeProjects={this.state.resumeData.projects}
              resumeBasicInfo={this.state.resumeData.basic_info}
            />} />
            <Route path="/portfolio/ReCollect" element={<ReCollect
              resumeProjects={this.state.resumeData.projects}
              resumeBasicInfo={this.state.resumeData.basic_info}
            />} />
        </Routes>
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    </Router>
    );
  }
}

export default App;
