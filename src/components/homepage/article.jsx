import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<motion.div
				className="homepage-article"
				initial={{ opacity: 0, y: 75 }} // Initial hidden state below
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5, // duration of the animation in seconds
						delay: 0.1, // delay before the animation starts in seconds
						ease: "easeOut", // easing function for the animation
					},
				}}
			>
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-article-title">{title}</div>
					<div className="homepage-article-description">
						{description}
					</div>
					<div className="homepage-article-link">
						<Link to={link}>
							Read article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</motion.div>
		</React.Fragment>
	);
};

export default Article;
