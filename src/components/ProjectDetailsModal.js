import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

const ProjectDetailsModal=(props)=> {
  const navigate = useNavigate();
  const [content, setContent] = React.useState([]);
  const [tech, setTech] = React.useState([])
  const [type, setType] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    if (props.data) {
      setType(props.data.type);
      setTitle(props.data.title);
      setDescription(props.data.description);

      const images = props.data.images?.splice(1);
      const videos = props.data.videos;
      let img = [], vid=[];
      if (props.data.images) {
          img = images.map((elem, i) => {
            return <div key={i} data-src={require(`../assets/images/${elem}`)} />;
          });
        }
        if (props.data.videos) {
          vid = videos.map((elem, i) => {
            return <div key={i} data-src={require(`../assets/videos/${elem}`)} />;
          });
        }
      setContent([...img, ...vid]);

      if (props.data.technologies) {
        const techMap = props.data.technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );         
        });
       setTech(techMap);
        //console.log(content);
      }
    }
  }, [props.data]);
  
    return (
      <section id="project-modal">
      <div>
      {props.data?.title!=="???" &&
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        
        <span onClick={props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className={type==="mobile"?"col-md-4 mx-auto":"col-md-20 mx-auto"} style={{ paddingBottom: "50px", height: "500px" }}>
            {/* header */}
            {type==="mobile"?
            <div className="slider-mobile-top"/>:
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>}
            
            
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className={type==="mobile"?"slider-image-mobile":"slider-image"}
            >
              {/* {img} */}
              {content}
            </AwesomeSlider>

            {type==="mobile" && <div className="slider-mobile-bottom"/>}
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ marginTop: 20, padding: "5px 5px 0 5px" }}>
              {title}
              {/* {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null} */}
            </h3>
            <p className="modal-description">{description}</p>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto">{tech}</ul>
            </div>
            <div className="col-md-12 text-center">
              {props.data.url &&
              <a
                  href={props.data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <Button style={buttonStyle}>Website</Button>
                </a>                
              } 
              {props.data.more &&
                <Button style={buttonStyle} onClick={()=>navigate(`/portfolio/${props.data.more}`)}>Learn More</Button>
              }             
            </div>
           
          </div>
        </div>
      </Modal>}
      </div>
      </section>
    );
  }

export default ProjectDetailsModal;

const buttonStyle = {
  backgroundColor: "#d1a298",
  fontSize: "1.5rem",
  borderWidth: 0,
  borderRadius: 10,
  margin: 10,
  marginTop:0,
  marginBottom: 20,
  padding: 10,
  width: "10rem",
};