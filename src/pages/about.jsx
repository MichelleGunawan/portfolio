import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { Tooltip } from "@mui/material";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="https://res.cloudinary.com/dnzis0xod/image/upload/v1717495317/about_p5yx4f.jpg"
											alt="about"
											className="about-image"
											loading="lazy"
										/>
									</div>
								</div>

								{/* <div className="about-socials">
									<Socials />
								</div> */}
							</div>
						</div>
						<div className="about-skills-container">
							<div className="about-skills-section">
								<div className="about-section-title">
									(Technical) languages I speak...
								</div>
								<div className="about-skills">
									{INFO.languages.map((language) => (
										<Tooltip
											title={language.name}
											key={language.name}
										>
											<i
												className={`${language.icon} homepage-social-icon`}
											/>
										</Tooltip>
									))}
								</div>
							</div>
							<div className="about-skills-section">
								<div className="about-section-title">
									...Other skills in my toolbox
								</div>
								<div className="about-skills">
									{INFO.skills.map((skill) => (
										<Tooltip
											title={skill.name}
											key={skill.name}
										>
											<i
												className={`${skill.icon} homepage-social-icon`}
											/>
										</Tooltip>
									))}
								</div>
							</div>
						</div>
						<div className="about-experience">
							<div className="about-section-title">
								Experience
							</div>
							<Works detailed={true} />
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

export default About;
