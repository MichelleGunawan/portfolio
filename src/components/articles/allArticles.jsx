import React, { useRef } from "react";

import "./style/allArticles.css";
import Article from "./article";

const AllArticles = (props) => {
	const { myArticles } = props;

	return (
		<div className="articles-wrapper">
			{myArticles?.map((article, index) => (
				<div className="articles-article" key={(index + 1).toString()}>
					<Article
						key={(index + 1).toString()}
						date={article.date}
						title={article.title}
						description={article.description}
						link={"/article/" + article.route}
					/>
				</div>
			))}
		</div>
	);
};

export default AllArticles;
