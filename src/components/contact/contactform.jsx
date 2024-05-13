import React from "react";
import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/contact.css";

const ContactForm = (props) => {
	return (
		<React.Fragment>
			<div class="formbold-main-wrapper">
				<div class="formbold-form-wrapper">
					<form
						action="https://formsubmit.co/f2f2217e4e8f99cd8e053f3dc329b6de"
						method="POST"
					>
						<input
							type="hidden"
							name="_next"
							value="https://michellegunawan.github.io/portfolio/#"
						/>
						<input type="hidden" name="_captcha" value="false" />
						<div class="formbold-mb-5">
							<label for="name" class="formbold-form-label">
								Full Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Full Name"
								class="formbold-form-input"
							/>
						</div>

						<div class="formbold-mb-5">
							<label for="email" class="formbold-form-label">
								{" "}
								Email Address{" "}
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Enter your email"
								class="formbold-form-input"
							/>
						</div>

						<div class="formbold-mb-5">
							<label for="subject" class="formbold-form-label">
								{" "}
								Subject{" "}
							</label>
							<input
								type="text"
								name="subject"
								id="subject"
								placeholder="Enter your subject"
								class="formbold-form-input"
							/>
						</div>

						<div class="formbold-mb-5">
							<label for="message" class="formbold-form-label">
								{" "}
								Message{" "}
							</label>
							<textarea
								rows="6"
								name="message"
								id="message"
								placeholder="Type your message"
								class="formbold-form-input"
							></textarea>
						</div>

						<div>
							<button class="formbold-btn">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ContactForm;
