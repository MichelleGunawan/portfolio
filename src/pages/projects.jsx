import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Box, Tabs, Tab } from "@mui/material";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import projects from "../data/projects";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function CustomTabPanel(props) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && <Box sx={{ p: 0 }}>{children}</Box>}
			</div>
		);
	}

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle">
							I've worked on a variety of projects over the years,
							and I'm proud of the progress I've made. Many of the
							projects I've worked on stem from a desire to
							address real-life needs and streamline challenges
							I've encountered myself or observed others grappling
							with in their everyday lives. If you're curious
							about any of the projects I've worked on or have any
							suggestions on improvements or enhancements, feel
							free to reach out. Collaborating with others is a
							great way to learn and grow, and I'm always open to
							new ideas and feedback.
						</div>

						<div className="projects-list">
							<Tabs
								value={value}
								onChange={handleChange}
								indicatorColor="transparent"
								centered
							>
								<Tab
									label="All"
									className="tab"
									style={{
										color:
											value === 0 ? "#14b8a6" : "#65656d",
										fontSize: "16px",
										lineHeight: "28px",
										borderRadius: "15px",
										fontWeight: "400",
									}}
								/>
								<Tab
									label="Web"
									className="tab"
									style={{
										color:
											value === 1 ? "#14b8a6" : "#65656d",
										fontSize: "16px",
										lineHeight: "28px",
										borderRadius: "15px",
										fontWeight: "400",
									}}
								/>
								<Tab
									label="Mobile"
									className="tab"
									style={{
										color:
											value === 2 ? "#14b8a6" : "#65656d",
										fontSize: "16px",
										lineHeight: "28px",
										borderRadius: "15px",
										fontWeight: "400",
									}}
								/>
							</Tabs>

							<CustomTabPanel value={value} index={0}>
								<AllProjects projects={projects} />
							</CustomTabPanel>
							<CustomTabPanel value={value} index={1}>
								<AllProjects
									projects={projects.filter(
										(project) => project.type === "web"
									)}
								/>
							</CustomTabPanel>
							<CustomTabPanel value={value} index={2}>
								<AllProjects
									projects={projects.filter(
										(project) => project.type === "mobile"
									)}
								/>
							</CustomTabPanel>
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

export default Projects;
