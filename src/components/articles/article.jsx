import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<motion.div
				className="article"
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
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

				<Link to={link}>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
						<div className="article-link">
							Read Article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</motion.div>
		</React.Fragment>
	);
};

export default Article;
