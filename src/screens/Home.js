import React, { Component } from "react";
import "../App.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import More from "../components/More";
import resData from "../assets/res_primaryLanguage.json";
import sharedData from '../assets/portfolio_shared_data.json';

class Home extends Component {
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
          <div>
            <Header sharedData={this.state.sharedData.basic_info} />
            <div className="col-md-12 mx-auto text-center language">
              <div style={{height: '75px'}} />
            </div>
            <About
              resumeBasicInfo={this.state.resumeData.basic_info}
              sharedBasicInfo={this.state.sharedData.basic_info}
            /> 
            <Projects
              resumeProjects={this.state.resumeData.projects}
              resumeBasicInfo={this.state.resumeData.basic_info}
            />
            <Skills
              sharedSkills={this.state.sharedData.skills}
              resumeBasicInfo={this.state.resumeData.basic_info}
            /> 
            <Experience
              resumeExperience={this.state.resumeData.experience}
              resumeBasicInfo={this.state.resumeData.basic_info}
            />
            <More
              resumeMore={this.state.resumeData.more}
              resumeBasicInfo={this.state.resumeData.basic_info}
            />
          </div>
        );
      }
}

export default Home;