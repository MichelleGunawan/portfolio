import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import projects from "../data/projects";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/projectDetails.css";
import "./styles/readArticle.css";

const ProjectDetails = () => {
	let { slug } = useParams();

	//const project = projects[slug - 1];

	// Find the project object based on its route property
	const project = projects.find((project) => project.route === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [project]);

	return (
		<React.Fragment>
			<Helmet>
				<title>{project.title} </title>
				<meta name="description" content={project.description} />
				{/* <meta name="keywords" content={project.keywords.join(", ")} /> */}
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-project-logo-container">
						<div className="read-project-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-wrapper">
							<div className="read-article-admin">
								<FontAwesomeIcon
									icon={faChevronCircleLeft}
									className="read-article-back-button"
									onClick={() =>
										(window.location.href =
											"https://michellegunawan.github.io/portfolio/#/projects")
									}
								/>
								<div className="read-article-date-container">
									<div className="read-article-date">
										{project.date}
									</div>
								</div>
							</div>

							<div className="title read-project-title">
								{project.title}
							</div>

							<div className="project-detail-body">
								<div>{project.img}</div>
								<div className="project-description">
									<div className="project-subheader">
										Description
									</div>
									{project.description}
								</div>

								<div className="link-section">
									{project.links?.map((link) => (
										<Link
											to={link.link}
											className="link-tag"
										>
											<div className="link-icon">
												<FontAwesomeIcon
													icon={faLink}
												/>
											</div>
											{link.title}
										</Link>
									))}
								</div>
								<div className="skills-section">
									{project.skills?.map((skill) => (
										<div className="skill-tag">{skill}</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProjectDetails;
