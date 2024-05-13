import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import ContactForm from "../components/contact/contactform";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-page">
						<div className="contact-container">
							<div className="title contact-title">Say Hello</div>

							<div className="subtitle contact-subtitle">
								Thanks for your interest in getting in touch
								with me. I'm thrilled to connect! Whether you
								have questions, ideas, or just want to say
								hello, I'm all ears. Feel free to drop me a line
								by filling out the contact form below. I'll get
								back to you as soon as possible. Additionally,
								if you prefer a more direct conversation, you
								can schedule a meeting with me by clicking on
								the calendar icon. Let's chat and explore how we
								can collaborate on exciting projects together.
								Looking forward to hearing from you!
							</div>
							<div className="homepage-socials">
								<Tooltip title="Email">
									<Link to="/contact">
										<FontAwesomeIcon
											icon={faEnvelope}
											className="homepage-social-icon"
										/>
									</Link>
								</Tooltip>
								<Tooltip title="Calendly">
									<a
										href="https://calendly.com/michelle-gunawan/30min"
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faCalendar}
											className="homepage-social-icon"
										/>
									</a>
								</Tooltip>
							</div>
							<ContactForm />
						</div>

						{/* <div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div> */}
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
