import React from "react";
import { Link } from "react-router-dom";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img
			src="https://res.cloudinary.com/dnzis0xod/image/upload/v1717495317/logo_k1skuu.jpg"
			alt="logo"
			className="logo"
			width={width}
		/>
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
