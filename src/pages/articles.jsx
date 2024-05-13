import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Box, Tabs, Tab } from "@mui/material";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllArticles from "../components/articles/allArticles";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

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
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-page">
						<div className="articles-main-container">
							<div className="title articles-title">
								{INFO.articles.title}
							</div>

							<div className="subtitle articles-subtitle">
								{INFO.articles.description}
							</div>

							<div className="articles">
								<div className="articles-container">
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
													value === 0
														? "#14b8a6"
														: "#65656d",
												fontSize: "16px",
												lineHeight: "28px",
												borderRadius: "15px",
												fontWeight: "400",
											}}
										/>
										<Tab
											label="Product"
											className="tab"
											style={{
												color:
													value === 1
														? "#14b8a6"
														: "#65656d",
												fontSize: "16px",
												lineHeight: "28px",
												borderRadius: "15px",
												fontWeight: "400",
											}}
										/>
										<Tab
											label="Dev"
											className="tab"
											style={{
												color:
													value === 2
														? "#14b8a6"
														: "#65656d",
												fontSize: "16px",
												lineHeight: "28px",
												borderRadius: "15px",
												fontWeight: "400",
											}}
										/>
										<Tab
											label="Other"
											className="tab"
											style={{
												color:
													value === 3
														? "#14b8a6"
														: "#65656d",
												fontSize: "16px",
												lineHeight: "28px",
												borderRadius: "15px",
												fontWeight: "400",
											}}
										/>
									</Tabs>

									<CustomTabPanel value={value} index={0}>
										<AllArticles
											myArticles={myArticles.filter(
												(article) =>
													!article.tag.includes(
														"hidden"
													)
											)}
										/>
									</CustomTabPanel>
									<CustomTabPanel value={value} index={1}>
										<AllArticles
											myArticles={myArticles.filter(
												(article) =>
													article.tag.includes(
														"product"
													)
											)}
										/>
									</CustomTabPanel>
									<CustomTabPanel value={value} index={2}>
										<AllArticles
											myArticles={myArticles.filter(
												(article) =>
													article.tag.includes("dev")
											)}
										/>
									</CustomTabPanel>
									<CustomTabPanel value={value} index={3}>
										<AllArticles
											myArticles={myArticles.filter(
												(article) =>
													article.tag.includes(
														"other"
													)
											)}
										/>
									</CustomTabPanel>
								</div>
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

export default Articles;
