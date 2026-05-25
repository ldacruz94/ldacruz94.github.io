export const personalProjects = [
	{
		title: "AxiomStream - Event Streaming Platform",
		link: "https://github.com/ldacruz94/axiomstream",
		description: `
			Building AxiomStream, an event streaming platform written in Java and Spring Boot as a deep dive into
			distributed systems engineering. The project's ambitious goal is to explore core distributed systems
			concepts hands-on — including log replication, fault tolerance, leader election, and resilience patterns.
			Ongoing work in progress driven by a passion for understanding how systems like Kafka work under the hood.
		`,
		technologies: ['Java', 'Spring Boot', 'Distributed Systems', 'Event Streaming', 'Replication'],
		type: 'Personal'
	},
	{
		title: "Franz - AI Personal Assistant",
		link: "https://github.com/ldacruz94/franz",
		description: `
			Built Franz, a voice-driven AI personal assistant that integrates with home and system tools.
			Uses Whisper for speech recognition and Kokoro for text-to-speech, with Ollama powering a local
			LLM and LangChain orchestrating tool-use workflows. Franz can control smart home devices like the TV,
			retrieve system information, fetch live weather data, and more — all through natural voice interaction.
			Built with a React frontend for configuration and status display.
		`,
		technologies: ['Python', 'React', 'Whisper', 'Kokoro', 'Ollama', 'LangChain', 'AI/ML'],
		type: 'Personal'
	},
	{
		title: "NexusTerm - Rust Terminal Multiplexer",
		link: "https://github.com/ldacruz94/nexusterm",
		description: `
			Building NexusTerm, a terminal multiplexer inspired by tmux with a modern desktop twist.
			Written in Rust for performance and safety, and packaged as a native desktop application using Tauri.
			The project explores terminal emulation, pane/session management, and systems programming
			while delivering a fast, cross-platform terminal experience.
		`,
		technologies: ['Rust', 'Tauri', 'Systems Programming', 'Terminal Emulation'],
		type: 'Personal'
	},
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
		technologies: ['C++', 'Qt', 'File Comparison'],
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
		technologies: ['Go', 'Distributed Systems', 'Message Queue', 'Event Streaming', 'Concurrency'],
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
		technologies: ['Python', 'REST API', 'Background Jobs'],
		type: 'Personal'
	},
];
