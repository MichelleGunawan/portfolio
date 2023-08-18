import React, { Component } from "react";
import { Link } from "react-router-dom";
//import ProjectDetailsModal from "./ProjectDetailsModal";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class More extends Component {
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
    
        //let detailsModalClose = () => this.setState({ detailsModalShow: false });
        if (this.props.resumeMore && this.props.resumeBasicInfo) {
          var sectionName = this.props.resumeBasicInfo.section_name.more;
          
          var projects = this.props.resumeMore.map(function (projects) {
            return (
            <div style={{padding: 10}}>
                <div className="foto">
                  {/* <Link to={`/portfolio/${projects.link}`}> */}
                    <div className="outline">
                      <img
                        src={require(`../assets/images/${projects.image}`)}
                        alt=""
                        style={{marginBottom: 0, paddingBottom: 0, position: 'relative', height: 250, width: 380}}
                      />
                      <div className="overlay-text">
                        <p style={{fontSize:12}}>{projects.description}</p>
                      </div>
                      <p className="project-title-settings mt-3">
                        {projects.title}
                      </p>
                    </div>
                  {/* </Link>                   */}
                </div>
            </div>
                // <div class="card" key={projects.title} onClick={() => detailsModalShow(projects)}>
                //     <div class="box">
                //         <img  
                //         src={require(`../assets/images/${projects.image}`)}
                //         alt=""/>
                //         {/* <div className="text">{projects.title}</div>
                //         <div dangerouslySetInnerHTML={{__html:projects.description}}></div> */}
                //     </div>
                // </div>
            );
          });
        }
    
        return (
          <section id="more" className="more">
            <div className="max-width">
              <h1 className="section-title" style={{ color: "black" }}>
                <span>{sectionName}</span>
              </h1>
              <OwlCarousel
                items = "3"
                autoplay
                loop
                lazyLoad
                dotsEach
                autoplayHoverPause
                className="owl-height"
            >
                {projects}
              </OwlCarousel>
              {/* <ProjectDetailsModal
                show={this.state.detailsModalShow}
                onHide={detailsModalClose}
                data={this.state.deps}
              /> */}
            </div>
          </section>
        );
      }
}
export default More;