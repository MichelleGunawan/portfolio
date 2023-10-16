import React, { Component, useEffect, useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { useNavigate } from "react-router-dom";


function Projects(props) {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate('/portfolio/projects'); // Navigate to the desired page
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const [deps, setDeps] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setSectionName(props.resumeBasicInfo.section_name.projects)
    const proj = props.resumeProjects.slice(0, 3).map(function (project) {
      return (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={project.title}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div className="foto" onClick={() => detailsModalShowFn(project)}>
              <div>
                <img
                  src={require(`../assets/images/${project.images[0]}`)}
                  alt="projectImages"
                  height="300px"
                  width="300px"
                  style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                />
                <span className="project-date">{project.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">
                  {project.title}
                </p>
              </div>
            </div>
          </span>
        </div>
      );
    });

    setProjects(proj);
  },[props.resumeProjects, props.resumeBasicInfo])

  const detailsModalShowFn = (data) => {
    setDetailsModalShow(true);
    setDeps(data);
  };

  const detailsModalClose = () => setDetailsModalShow(false);

    return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ paddingBottom: 0 }}>
          <span>{sectionName}</span>
        </h1>
          <h2 className="section-caption"
            style={{
              cursor: 'pointer', // Change the cursor to a pointer on hover
              textDecoration: 'underline', // Underline the text on hover
              transition: 'font-size 0.4s', // Add a font-size transition
            }}
            onClick={handleSeeMoreClick}
          >
            <span
              onMouseEnter={(e) => { e.target.style.fontSize = '1.15em'; }} // Increase font-size on hover
              onMouseLeave={(e) => { e.target.style.fontSize = '1.1em'; }} // Reset font-size on hover exit
            >
              See More
            </span>
          </h2>

        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={detailsModalShow}
          onHide={detailsModalClose}
          data={deps}
        />
      </div>
    </section>
    );
  
}

export default Projects;
