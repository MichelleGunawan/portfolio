const projects = [
	{
		title: "Portfolio v2",
		route: "portfolio-v2",
		description:
			"The website you're currently exploring! Here, I've curated a collection of my projects, experiences, and skills, offering you a glimpse into my professional journey and creative endeavors. I hope you're finding the experience enjoyable.",
		date: "2024",
		img: (
			<img
				src="https://res.cloudinary.com/dnzis0xod/image/upload/v1717495319/portfoliov2_wp0hbx.png"
				alt="PortfolioV2"
				className="project-detail-image"
				loading="lazy"
			/>
		),
		skills: ["React JS", "Framer", "Javascript", "HTML & SCSS"],
		links: [
			{
				title: "Website",
				link: "https://michellegunawan.github.io/portfolio/#",
			},
		],
		type: "web",
	},
	{
		title: "ReCollect",
		route: "recollect",
		description:
			"With dozens of social media apps, it can be difficult and boring task to collect and organize all of your media in the same place for easy sharing. ReCollect streamlines this process by offering an accessible platform to house and sort media from other platforms. Users can easily add media from all over the web and share them with their friends, family, and co-workers. ReCollect is an open-source project.",
		date: "2023-2024",
		img: (
			<img
				src="https://res.cloudinary.com/dnzis0xod/image/upload/v1717495321/reco_whocmt.png"
				alt="ReCollect"
				className="project-detail-image"
				loading="lazy"
			/>
		),
		skills: [
			"Product Management",
			"React Native",
			"MongoDB",
			"Redux",
			"Javascript",
			"HTML & SCSS",
		],
		links: [
			{
				title: "Website",
				link: "https://recollectteam.github.io/web/",
			},
			{
				title: "Case Study",
				link: "https://michellegunawan.github.io/portfolio/#/article/recollect",
			},
		],
		type: "mobile",
	},

	{
		title: "KARGO",
		route: "kargo",
		description:
			"The KARGO app is an all encompassing delivery app. Consisting of a driver app as well as a consumer app, it utilizes GraphQL to provide real-time updates between the two apps. On the consumer side, the app allows users to see nearby kars and place a delivery orders. Additionally, the app implements the Stripe payment API to allow users to pay for their orders. On the driver side, the app allows drivers to recieve and accept delivery requests, and assists them with their navigation to the pickup and dropoff points.",

		date: "2021",
		img: (
			<img
				src="https://res.cloudinary.com/dnzis0xod/image/upload/v1717495318/kargo_xwagpj.png"
				alt="Kargo"
				className="project-detail-image"
				loading="lazy"
			/>
		),
		skills: [
			"React Native",
			"AWS",
			"GraphQL",
			"Javascript",
			"HTML & SCSS",
			"Google APIs",
			"Stripe API",
		],
		links: [],
		type: "mobile",
	},
	{
		title: "Portfolio v1",
		route: "portfolio-v1",
		description:
			"My first portolio website built to showcase my work and projects.",
		date: "2022-2023",
		img: (
			<img
				src="https://res.cloudinary.com/dnzis0xod/image/upload/v1717495318/portfoliov1_zfaer4.png"
				alt="PortfolioV1"
				className="project-detail-image"
				loading="lazy"
			/>
		),
		skills: ["React JS", "Javascript", "HTML & SCSS"],
		links: [],
		type: "web",
	},
];

export default projects;
