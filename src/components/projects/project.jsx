import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { img, title, description, links, date, skills, route, index } =
		props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<Link to={"/project/" + route}>
						<div className="project-logo">
							{img}
							{/* <img src={logo} alt="logo" /> */}
						</div>
						<div className="project-title">{title}</div>
					</Link>
					<div className="link-section">
						{links?.map((link) => (
							<a href={link.link} className="link-tag">
								<div className="link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								{link.title}
							</a>
						))}
					</div>
					<div className="skills-section">
						{skills?.map((skill) => (
							<div className="skill-tag">{skill}</div>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
