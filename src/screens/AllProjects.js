import React, { Component } from "react";
import ProjectDetailsModal from "../components/ProjectDetailsModal";
import Navbar from "../components/NavBar";

class AllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={require(`../assets/images/${projects.images[0]}`)}
                    alt="projectImages"
                    height="250px"
                    width="250px"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">        
        <div className="col-md-12" style={{paddingRight:0, paddingLeft:0}}>
          {/* <div style={{width: "100%", height: "auto", top:0, display: 'flex', justifyContent:'flex-end', alignItems:'center', paddingRight: "20px", paddingTop: "20px"}}>
            <Link to="/portfolio">
              <h2 className="section-title">
                <span>Home</span>
              </h2>
            </Link>
          </div>
          <hr/> */}
          <Navbar/>
          <h1 className="section-title" style={{ color: "black" }}>
            <span>PROJECTS</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default AllProjects;
