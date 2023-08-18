import React, { Component } from "react";

import { Link } from "react-router-dom";
import ProjectDetailsModal from "../../components/ProjectDetailsModal";

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

   render() {
//     let detailsModalShow = (data) => {
//       this.setState({ detailsModalShow: true, deps: data });
//     };

//     let detailsModalClose = () => this.setState({ detailsModalShow: false });
//     if (this.props.resumeProjects && this.props.resumeBasicInfo) {
//       var sectionName = this.props.resumeBasicInfo.section_name.projects;
//       var projects = this.props.resumeProjects.map(function (projects) {
//         return (
//           <div
//             className="col-sm-12 col-md-6 col-lg-4"
//             key={projects.title}
//             style={{ cursor: "pointer" }}
//           >
//             <span className="portfolio-item d-block">
//               <div className="foto" onClick={() => detailsModalShow(projects)}>
//                 <div>
//                   <img
//                     src={require(`../../assets/images/${projects.images[0]}`)}
//                     alt="projectImages"
//                     height="250px"
//                     width="250px"
//                     style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
//                   />
//                   <span className="project-date">{projects.startDate}</span>
//                   <br />
//                   <p className="project-title-settings mt-3">
//                     {projects.title}
//                   </p>
//                 </div>
//               </div>
//             </span>
//           </div>
//         );
//       });
//     }

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', padding: "5% 10% 5% 10%"}}>
            <p style={{fontSize: 16}}>In a world that thrives on constant progress and innovation, I find my greatest fulfillment in a seemingly timeless principle: giving back. There's an indescribable joy that comes from making a positive impact, from knowing that my actions can create ripples of change that extend far beyond myself. Whether it's lending a helping hand to those in need, contributing to community projects, or simply sharing my time and expertise, the act of giving back has become an integral part of who I am. It's not just a responsibility; it's a heartfelt desire to be a catalyst for compassion and empowerment in the lives of others.</p>
            <br/>
            <div style={{display:'flex', alignItems:'flex-start'}}>
                <img
                    src={require(`../../assets/images/Baturetno.png`)}
                    alt=""
                    style={{marginRight: 20, paddingBottom: 0, position: 'relative', height: 250, width: 380}}
                />
                <p style={{fontSize: 16}}>In a world that thrives on constant progress and innovation, I find my greatest fulfillment in a seemingly timeless principle: giving back. There's an indescribable joy that comes from making a positive impact, from knowing that my actions can create ripples of change that extend far beyond myself. Whether it's lending a helping hand to those in need, contributing to community projects, or simply sharing my time and expertise, the act of giving back has become an integral part of who I am. It's not just a responsibility; it's a heartfelt desire to be a catalyst for compassion and empowerment in the lives of others.</p>
            </div>
            

        </div>
    //   <section id="portfolio">        
    //     <div className="col-md-12">
    //       <div style={{width: "100%", height: "auto", top:0, display: 'flex', justifyContent:'flex-end', alignItems:'center', paddingRight: "20px", paddingTop: "20px"}}>
    //         <Link to="/portfolio">
    //           <h2 className="section-title">
    //             <span>Home</span>
    //           </h2>
    //         </Link>
    //       </div>
    //       <hr/>
    //       <h1 className="section-title" style={{ color: "black" }}>
    //         <span>{sectionName}</span>
    //       </h1>
    //       <div className="col-md-12 mx-auto">
    //         <div className="row mx-auto">{projects}</div>
    //       </div>
    //       <ProjectDetailsModal
    //         show={this.state.detailsModalShow}
    //         onHide={detailsModalClose}
    //         data={this.state.deps}
    //       />
    //     </div>
    //   </section>
    );
  }
}

export default Community;
