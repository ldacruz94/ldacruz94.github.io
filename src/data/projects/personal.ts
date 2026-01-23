export const personalProjects = [
	{
		title: "Personal Portfolio & Blog Website",
		link: "https://github.com/ldacruz94/ldacruz94.github.io",
		description: `
			Built this personal portfolio and blog using Astro and Tailwind CSS.
			Features include blog posts about learning and technology, a digital library of books I've read,
			and a curated list of projects. Designed for performance and SEO.
		`,
		technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'SSG'],
		type: 'Personal'
	},
	{
		title: "DeltaView - Diff Checker Desktop App",
		link: "https://github.com/ldacruz94/DeltaView",
		description: `
			Developed DeltaView, a desktop application for comparing and visualizing differences between files and text.
			Built with C++ and Qt framework, the application provides an intuitive interface for diff checking 
			with syntax highlighting and side-by-side comparison views. A practical tool for developers and 
			content creators who need to analyze file changes quickly and efficiently.
		`,
		technologies: ['C++', 'Qt', 'Desktop Application', 'GUI', 'File Comparison'],
		type: 'Personal'
	},
	{
		title: "ProgLog - Distributed Append-Only Log Service",
		link: "https://github.com/ldacruz94/proglog",
		description: `
			Built a distributed, append-only log service inspired by Apache Kafka. Implemented in Go, ProgLog 
			provides a scalable messaging and event streaming platform for building distributed systems. The service 
			handles high-throughput data ingestion, provides ordering guarantees, and enables multiple consumers 
			to process events independently. A hands-on exploration of distributed systems concepts and protocols.
		`,
		technologies: ['Go', 'Distributed Systems', 'Message Queue', 'Event Streaming', 'Log Service', 'Concurrency'],
		type: 'Personal'
	},
	{
		title: "SimLab - Simulation Job Service",
		link: "https://github.com/ldacruz94/simlab",
		description: `
			Building SimLab, a Python service for submitting and managing simulation jobs through a REST API.
			The service accepts simulation parameters, executes jobs in the background, and provides endpoints 
			for querying job status and retrieving results. Designed to handle asynchronous job processing 
			and provide reliable result management. Work in progress.
		`,
		technologies: ['Python', 'REST API', 'Background Jobs', 'Async Processing', 'Simulation'],
		type: 'Personal'
	},
];
