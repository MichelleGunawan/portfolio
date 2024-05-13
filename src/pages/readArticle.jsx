import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myArticles from "../data/articles";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

import "./styles/readArticle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
	let { slug } = useParams();

	// Find the project object based on its route property
	const article = myArticles.find((article) => article.route === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	ArticleStyle = styled.div`
		${article.style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article.description} />
				<meta name="keywords" content={article.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						{/* <div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div> */}

						<div className="read-article-wrapper">
							<div className="read-article-admin">
								<FontAwesomeIcon
									icon={faChevronCircleLeft}
									className="read-article-back-button"
									onClick={() =>
										(window.location.href =
											"https://michellegunawan.github.io/portfolio/#/articles")
									}
								/>
								<div className="read-article-date-container">
									<div className="read-article-date">
										{article.date}
									</div>
								</div>
							</div>

							<div className="title read-article-title">
								{article.title}
							</div>

							<div className="read-article-body">
								<ArticleStyle>{article.body}</ArticleStyle>
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

export default ReadArticle;
