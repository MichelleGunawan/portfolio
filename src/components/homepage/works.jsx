import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Card from "../common/card";
import work from "../../data/work";

import "./styles/works.css";

const Works = (props) => {
	return (
		<div className="works">
			{/*  	<Card
		// 		icon={faBriefcase}
		// 		title="Experience"
		// 		body={ */}
			<>
				{work.map((job) => (
					// <div key={job.id} className="work">
					<motion.div
						key={job.id}
						className="work"
						initial={{ opacity: 0, y: 75 }} // Initial hidden state below
						whileInView={{ opacity: 1, y: 0 }}
					>
						<div className="work-right">
							<div className="work-info">
								<a href={job.link} className="work-image">
									{job.img}
								</a>
							</div>

							<div className="work-info">
								<div className="work-title">{job.company}</div>
								<div className="work-subtitle">
									{job.position}
								</div>
								{props.detailed && (
									<>
										<div className="work-paragraph">
											{job.description}
										</div>
										<div className="link-section">
											{job.links?.map((link) => (
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
											{job.skills?.map((skill) => (
												<div className="skill-tag">
													{skill}
												</div>
											))}
										</div>
									</>
								)}
							</div>
						</div>

						<div className="work-duration">{job.date}</div>
					</motion.div>
					// </div>
				))}
			</>
		</div>
	);
};

export default Works;
