import React, { useRef } from "react";

import Project from "./project";

import { motion, useInView } from "framer-motion";

import "./styles/allProjects.css";

const AllProjects = (props) => {
	const { projects } = props;
	const ref = useRef(null);
	const inView = useInView(ref);

	return (
		<div className="all-projects-container" ref={ref}>
			{projects.map((project, index) => (
				<motion.div
					className="all-projects-project"
					key={index}
					initial={{
						opacity: 0,
						x: index % 2 === 0 ? "-10vw" : "10vw",
					}}
					// animate={{
					// 	opacity: inView ? 1 : 0,
					// 	x: inView ? 0 : index % 2 === 0 ? -500 : 500,
					// }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				>
					<Project
						img={project.img}
						title={project.title}
						description={project.description}
						links={project.links}
						date={project.date}
						skills={project.skills}
						route={project.route}
						index={index}
					/>
				</motion.div>
			))}
		</div>
	);
};

export default AllProjects;
