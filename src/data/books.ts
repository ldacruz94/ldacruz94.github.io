export type BookStatus = 'finished' | 'reading';

export interface Book {
	title: string;
	image: string;
	link: string;
	description: string;
	tags: string[];
	rating: number;
	status: BookStatus;
}

export const books: Book[] = [
	{
		title: "Python Programming: An Introduction to Computer Science",
		image: '/book_images/intro_cs_zelle.jpg',
		link: "https://a.co/d/dws2DKe",
		description: `This was my very first programming book and honestly the one that started everything for me.
			I had zero experience and this book walked me through how to think like a programmer using Python —
			variables, loops, functions, and basic data structures. I remember spending hours building little
			programs like drawing 3D shapes just to see the concepts come to life. The big thing I took away
			was understanding how functions work as building blocks: you break a big problem into smaller pieces,
			solve each one, and compose them together. That mental model has stuck with me ever since.`,
		tags: ['beginner', 'python', 'programming', 'computer science'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "Code: The Hidden Language of Computer Hardware and Software",
		image: '/book_images/code_petzold.jpg',
		link: "https://a.co/d/2kaJSpL",
		description: `I picked this up when I was still a complete beginner trying to make sense of how computers
			actually work under the hood. Petzold does something really special here — he builds up the concept of
			a computer from scratch, starting with flashlights and Morse code all the way to logic gates and CPUs.
			The thing that blew my mind was seeing how NAND gates alone can represent all of boolean logic and,
			by extension, all computation. Before this book, "hardware" felt like magic. After it, I understood
			that it's just layers of abstraction built on very simple rules.`,
		tags: ['beginner', 'computer science', 'hardware', 'software', 'history'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "How Computers Work and What to Do When They Don't: A Guide for Users like You!",
		image: '/book_images/how_computer_work_baker.jpg',
		link: "https://a.co/d/clwEJdf",
		description: `A very beginner-friendly book I read early on when I was still getting comfortable with
			computers in general. It breaks down the core components — CPU, RAM, storage, and peripherals —
			in a way that anyone can follow. What I got out of it was finally understanding the difference
			between RAM and storage: RAM is what your computer is actively thinking about right now,
			while storage is everything it remembers long-term. Simple concept, but having it click clearly
			made a lot of other things fall into place.`,
		tags: ['beginner', 'computers', 'hardware', 'software', 'viruses'],
		rating: 3,
		status: 'finished',
	},
	{
		title: "Automate the Boring Stuff with Python: Practical Programming for Total Beginners",
		image: '/book_images/automate_the_boring_stuff_sweigart.jpg',
		link: "https://a.co/d/h2RntiV",
		description: `This was my second programming book and the one that made me realize programming was actually
			useful in everyday life, not just academic exercises. It focuses on automating real tasks — renaming
			files in bulk, scraping websites, sending emails, working with spreadsheets. I ended up writing a
			script at my job at the time to automate a repetitive data entry task, and watching it run in seconds
			what used to take me an hour was one of the most satisfying moments I'd had as a beginner.
			The big lesson: you don't need to know everything to write something useful.`,
		tags: ['beginner', 'python', 'automation', 'programming'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "HTTP: The Definitive Guide",
		image: '/book_images/http_gourley_totty.jpg',
		link: "https://a.co/d/4tfXacM",
		description: `Hands down one of the best technical books I've ever read. I went into it thinking I
			already understood HTTP reasonably well and came out realizing I had only scratched the surface.
			It covers everything — methods, headers, caching, proxies, authentication, HTTPS — in exhaustive
			but genuinely readable detail. The thing that changed how I work is understanding HTTP caching:
			how Cache-Control headers work, the difference between validation and expiration, and why
			getting caching wrong can silently cause bugs that are incredibly hard to track down.`,
		tags: ['web development', 'HTTP', 'protocols', 'networking'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "SQL: The Ultimate Beginner's Guide to Learn SQL Programming Step by Step",
		image: '/book_images/sql_turner.jpg',
		link: "https://a.co/d/bLMELhk",
		description: `I was already fumbling through SQL at work when I picked this up to fill in the gaps.
			It covers the basics — SELECT, WHERE, GROUP BY, and database design — in a structured way that
			helped me stop guessing and start understanding. The concept that finally clicked for me here was
			JOINs: understanding the difference between INNER, LEFT, and RIGHT joins and how to think about
			them as set operations rather than just syntax made my queries so much cleaner and more intentional.`,
		tags: ['beginner', 'SQL', 'databases', 'programming'],
		rating: 3,
		status: 'finished',
	},
	{
		title: "Networking Made Easy: Get Yourself Connected (Computers Made Easy)",
		image: '/book_images/networking_made_easy_bernstein.jpg',
		link: "https://a.co/d/e5OOrgU",
		description: `Networking felt like a black box to me for a long time, so I picked this up to get a
			solid foundation. It walks through IP addressing, DNS, routing, and how devices talk to each other
			in plain language with helpful diagrams. What I really took away was how DNS works — the idea
			that when you type a domain name, there's this whole lookup chain happening behind the scenes
			involving resolvers, root servers, and authoritative servers. It made the web feel a lot less
			mysterious.`,
		tags: ['beginner', 'networking', 'protocols', 'IP', 'hardware'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Networking All-in-One For Dummies (For Dummies (Computer/Tech))",
		image: '/book_images/networking_dummies_lowe.jpg',
		link: "https://a.co/d/1nX1v3H",
		description: `After Networking Made Easy I wanted to go deeper, and this book delivered. It covers a
			much wider range — from the basics all the way into network security, VLANs, and troubleshooting.
			It's well organized so you can jump to what you need. The concept that stuck with me most was
			subnetting: understanding how to carve up an IP address space using CIDR notation, and why network
			engineers think in terms of masks and blocks rather than individual IPs. I still reference this
			one when I need a refresher on something specific.`,
		tags: ['beginner', 'networking', 'protocols', 'IP', 'hardware', 'security'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Explain the Cloud Like I'm 10",
		image: '/book_images/explain_cloud_like_10_hoff.jpg',
		link: "https://a.co/d/0explain",
		description: `I read this early in my cloud journey when terms like "the cloud" still felt vague and
			hand-wavy. Todd Hoff does a great job of stripping away the jargon and explaining what the cloud
			actually is — just someone else's computers, organized in specific ways to be reliable and scalable.
			The thing that clicked for me was virtualization: the idea that one physical machine can run many
			isolated virtual machines simultaneously, and that this is the foundation almost everything in
			cloud computing is built on. Simple concept with enormous implications.`,
		tags: ['beginner', 'cloud', 'computer science'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Ry's Git Tutorial",
		image: '/book_images/rys_git_tutorial_hodson.jpg',
		link: "https://a.co/d/0rygit",
		description: `I had been using Git for a while before this — mostly just add, commit, push, and praying —
			but this tutorial actually made me understand what was happening. It walks through branching, merging,
			rebasing, and working with remotes in a very hands-on, incremental way. What changed for me was
			understanding the difference between merge and rebase: merge preserves history as-is while rebase
			replays your commits on top of another branch for a cleaner linear history. Knowing when to use
			each one made me a much more intentional collaborator.`,
		tags: ['beginner', 'git', 'version control', 'programming'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Bash Pocket Reference",
		image: '/book_images/bash_pocket_reference_robbins.jpg',
		link: "https://a.co/d/0bash",
		description: `I keep this one nearby whenever I'm writing shell scripts. It's short and dense in the
			best way — no fluff, just a thorough reference for Bash syntax, built-ins, and features. What I
			learned from working through it was how pipelines actually work under the hood: every command
			in a pipeline runs in its own subshell simultaneously, connected by file descriptors. That
			explained a lot of subtle bugs I'd encountered with variable scoping in scripts I'd written
			before reading this.`,
		tags: ['bash', 'linux', 'scripting', 'programming'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Effective Java",
		image: '/book_images/effective_java_bloch.jpg',
		link: "https://a.co/d/0effectivejava",
		description: `This is one of those books that made me look back at my own code and cringe in the best
			possible way. Bloch goes through 90 concrete items — best practices for object creation, generics,
			lambdas, concurrency, and more — each backed by solid reasoning. The one that changed how I write
			code the most was the Builder pattern for constructing objects with many optional parameters.
			Before this I was using telescoping constructors and it was a mess. Builders made my APIs so much
			cleaner and more readable.`,
		tags: ['java', 'programming', 'best practices'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "Head First Java",
		image: '/book_images/head_first_java.jpg',
		link: "https://a.co/d/0headfirstjava",
		description: `The Head First style is either for you or it isn't, but for me it worked really well when
			learning Java. The visual layout, puzzles, and conversational tone kept me engaged through topics
			that could otherwise be dry. The concept that finally made sense to me reading this was
			polymorphism — specifically how a parent class reference can point to a child class object and
			call overridden methods at runtime. Understanding that was the moment object-oriented programming
			stopped feeling like magic and started feeling like a system I could reason about.`,
		tags: ['beginner', 'java', 'programming', 'object-oriented'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Head First Design Patterns",
		image: '/book_images/head_first_design_patterns.jpg',
		link: "https://a.co/d/0headfirstdp",
		description: `This book fundamentally changed how I think about writing flexible, maintainable code.
			It takes the classic Gang of Four patterns and explains them through stories and examples that
			actually make them stick. The lesson that hit hardest was the principle of favoring composition
			over inheritance — instead of building rigid class hierarchies, you compose behaviors at runtime.
			The Strategy pattern was the clearest example of this: swap out algorithms without touching the
			classes that use them. I catch myself applying this constantly now.`,
		tags: ['design patterns', 'java', 'programming', 'object-oriented'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "Data Structures & Algorithms in Java",
		image: '/book_images/data_structures_algorithms_java_lafore.jpg',
		link: "https://a.co/d/0dsajava",
		description: `A deep dive into the fundamental data structures and how to implement them in Java.
			Lafore builds everything from the ground up with clear diagrams and working code — arrays, linked
			lists, stacks, queues, trees, hash tables, and sorting algorithms. The structure that made the
			most sense to me after reading this was the binary search tree: understanding how insertion and
			lookup work in O(log n) by always going left or right based on a comparison was one of those
			satisfying moments where an algorithm suddenly feels obvious in retrospect.`,
		tags: ['java', 'data structures', 'algorithms', 'computer science'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "The Pragmatic Programmer",
		image: '/book_images/pragmatic_programmer.jpg',
		link: "https://a.co/d/0pragprog",
		description: `One of those rare books that makes you a better developer regardless of what language
			or stack you're working in. Hunt and Thomas cover everything from debugging mindset to career
			habits, all grounded in real-world wisdom. The idea that stuck with me most is DRY — Don't Repeat
			Yourself — but beyond just "don't copy-paste code." The real point is that every piece of knowledge
			should have a single authoritative representation in your system. Violating DRY doesn't just create
			maintenance headaches, it creates inconsistencies that cause bugs. I think about this on almost
			every PR I write.`,
		tags: ['programming', 'best practices', 'career'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "Designing Data-Intensive Applications",
		image: '/book_images/designing_data_intensive_applications.jpg',
		link: "https://a.co/d/0ddia",
		description: `I don't say this lightly — this is probably the most impactful technical book I've read.
			Kleppmann covers how modern data systems are built: replication, partitioning, transactions, stream
			processing, and distributed consensus. Everything is explained with real systems as examples.
			The concept that most changed how I think about systems is the difference between eventual
			consistency and strong consistency — why you can't have both availability and consistency during
			a network partition, and what trade-offs different databases are actually making when they claim
			to be "consistent." It made database documentation make so much more sense.`,
		tags: ['distributed systems', 'databases', 'system design', 'scalability'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "Fundamentals of Software Architecture",
		image: '/book_images/fundamentals_software_architecture.jpg',
		link: "https://a.co/d/0softarch",
		description: `This book helped me understand what software architects actually do and how to think
			about architectural decisions systematically. Richards and Ford cover the major architectural
			styles — layered, event-driven, microservices, microkernel — and more importantly, how to evaluate
			trade-offs between them. The big takeaway was that there are no universally right answers in
			architecture, only trade-offs. A microservices architecture might give you scalability but costs
			you operational complexity. Learning to frame decisions that way — rather than chasing what's
			trendy — made me a much more thoughtful engineer.`,
		tags: ['architecture', 'system design', 'programming'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Soft Skills: The Software Developer's Life Manual",
		image: '/book_images/soft_skills_sonmez.jpg',
		link: "https://a.co/d/0softskills",
		description: `Most programming books ignore the fact that you're a person building a career, not just
			a code-writing machine. Sonmez covers everything — how to market yourself, negotiate salary,
			stay productive, manage your finances, and even take care of your health as a developer.
			The thing I walked away with was the importance of building a personal brand: writing, speaking,
			or contributing publicly to things you care about creates opportunities that just being good at
			your job never will. It was the nudge that led me to starting this site.`,
		tags: ['career', 'productivity', 'personal development'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "APIs: A Strategy Guide",
		image: '/book_images/apis_strategy_guide.jpg',
		link: "https://a.co/d/0apistrategy",
		description: `I read this when I started thinking more seriously about API design at work. It frames
			APIs not just as technical interfaces but as products — things you design for a specific audience,
			maintain over time, and evolve intentionally. The insight that shifted my thinking most was that
			a good API is one your users can't misuse: the design should make correct usage obvious and incorrect
			usage hard. That principle changed how I review and write API contracts, not just in REST but in
			any interface I expose.`,
		tags: ['APIs', 'web development', 'architecture'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Introduction to APIs",
		image: '/book_images/introduction_to_apis.jpg',
		link: "https://a.co/d/0introapibasil",
		description: `A practical, beginner-friendly introduction that gets you working with real APIs fast
			using Postman and Python. I read this when I was just starting to integrate third-party services
			at work. What clicked for me was how API authentication actually works in practice — specifically
			the difference between API keys, OAuth tokens, and Bearer tokens, and when you'd use each.
			Before this I was just copying authentication headers from documentation without really understanding
			what they meant. Now I actually understand what I'm sending and why.`,
		tags: ['beginner', 'APIs', 'python', 'web development'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Observability Engineering",
		image: '/book_images/observability_engineering.jpg',
		link: "https://a.co/d/0obseng",
		description: `This book challenged the way I thought about monitoring production systems. Majors,
			Fong-Jones, and Miranda argue that traditional metrics and dashboards aren't enough — you need
			to be able to ask arbitrary questions of your running system, not just the ones you anticipated
			when you set up your alerts. The concept that reframed everything for me is the difference between
			metrics and events: a metric is a pre-aggregated number that tells you something changed, while a
			structured event captures the full context of what happened. Events let you debug things you never
			predicted you'd need to debug.`,
		tags: ['observability', 'DevOps', 'distributed systems', 'monitoring'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "Continuous Delivery",
		image: '/book_images/continuous_delivery.jpg',
		link: "https://a.co/d/0contdelivery",
		description: `This is the book that made CI/CD click for me beyond just "run tests automatically."
			Humble and Farley walk through how to build a deployment pipeline that makes releasing software
			a reliable, low-risk event rather than a nerve-wracking ordeal. The concept I internalized most
			was the deployment pipeline as a confidence-building machine: each stage — unit tests, integration
			tests, user acceptance, production — adds a layer of evidence that your software works. If you're
			scared to deploy, it's because your pipeline isn't giving you enough confidence yet.`,
		tags: ['DevOps', 'CI/CD', 'automation', 'best practices'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "DevOps for the Desperate",
		image: '/book_images/devops_for_the_desperate.jpg',
		link: "https://a.co/d/0devopsdesp",
		description: `A no-nonsense survival guide for developers who need to get up to speed with DevOps
			practices quickly. It covers Linux basics, containers, CI/CD, monitoring, and infrastructure as
			code through hands-on exercises you actually do. What I got most out of it was a concrete
			understanding of how CI/CD pipelines are structured — how stages chain together, how artifacts
			get passed between them, and where tests fit in. Before this I knew CI/CD existed; after it I
			could actually build one myself.`,
		tags: ['DevOps', 'linux', 'CI/CD', 'containers'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Beginning Azure DevOps",
		image: '/book_images/beginning_azure_devops.jpg',
		link: "https://a.co/d/0azuredevops",
		description: `A practical walkthrough of the full Azure DevOps suite — Boards, Repos, Pipelines,
			Test Plans, and Artifacts — with real examples throughout. I read this when I started working
			more heavily in the Microsoft ecosystem and needed to move beyond the UI and into YAML pipelines.
			The big thing I learned was how Azure Pipelines YAML works: how stages, jobs, and steps nest
			inside each other, and how to use templates to share pipeline logic across repos. That structure
			wasn't obvious from the docs alone.`,
		tags: ['DevOps', 'Azure', 'CI/CD', 'cloud'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "The DevOps Handbook",
		image: '/book_images/devops_handbook.jpg',
		link: "https://a.co/d/0devopshandbook",
		description: `If Accelerate is the research case for DevOps, this is the playbook. Gene Kim, Jez
			Humble, Patrick Debois, and John Willis lay out the Three Ways — Flow, Feedback, and Continual
			Learning — and back each one with real case studies from companies that have done this
			transformation. The concept I reference most from this book is the idea of making work visible:
			you can't improve what you can't see, and a lot of engineering dysfunction comes from work that's
			invisible until it explodes. Kanban boards, deployment metrics, and blameless postmortems are all
			tools for making work visible.`,
		tags: ['DevOps', 'CI/CD', 'culture', 'best practices'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "Accelerate",
		image: '/book_images/accelerate.jpg',
		link: "https://a.co/d/0accelerate",
		description: `This is the book I point to when someone asks whether DevOps practices actually matter
			or are just hype. Forsgren, Humble, and Kim did the research — surveying thousands of teams over
			years — and the data is clear: the way you build and ship software directly predicts organizational
			performance. What I learned and use constantly are the four DORA metrics: deployment frequency,
			lead time for changes, mean time to recover, and change failure rate. These four numbers tell you
			more about the health of your engineering org than almost anything else.`,
		tags: ['DevOps', 'culture', 'research', 'best practices'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "Platform Engineering",
		image: '/book_images/platform_engineering.jpg',
		link: "https://a.co/d/0platformeng",
		description: `I picked this up when I started getting more exposure to platform and infrastructure
			concerns at work. Fournier and Nowland cover what platform teams actually do, how to structure
			them, and how to measure their impact. The concept that most changed my perspective was the
			idea of a "golden path" — a set of opinionated, well-supported ways to do common things that
			reduce the cognitive load on product teams. A great platform doesn't just offer capabilities,
			it makes the right thing to do also the easy thing to do.`,
		tags: ['platform engineering', 'DevOps', 'architecture', 'leadership'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "The Kubernetes Book",
		image: '/book_images/kubernetes_book.jpg',
		link: "https://a.co/d/0k8sbook",
		description: `The book I recommend to anyone getting started with Kubernetes. Poulton updates it
			every year and it shows — everything is current and clearly explained. It covers the core
			primitives: Pods, Deployments, Services, ConfigMaps, Secrets, and storage. The thing that
			finally made Kubernetes make sense to me was understanding how Deployments, ReplicaSets, and
			Pods relate to each other — a Deployment manages a ReplicaSet which manages Pods, and that
			hierarchy is what gives you self-healing and rolling updates. Once I had that mental model,
			everything else clicked.`,
		tags: ['Kubernetes', 'containers', 'DevOps', 'cloud'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Quick Start Kubernetes",
		image: '/book_images/quick_start_kubernetes.jpg',
		link: "https://a.co/d/0qsk8s",
		description: `A lean, fast-paced companion to The Kubernetes Book that gets you deploying a real
			application quickly. Less theory, more doing. What I got out of it was getting comfortable with
			kubectl — not just memorizing commands but understanding what's actually happening when you run
			them. Seeing how kubectl apply works by diffing your desired state against the current cluster
			state helped me stop thinking of Kubernetes as a command runner and start thinking of it as a
			state reconciliation engine.`,
		tags: ['Kubernetes', 'containers', 'DevOps', 'cloud'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Understanding Distributed Systems",
		image: '/book_images/understanding_distributed_systems.jpg',
		link: "https://a.co/d/0unidist",
		description: `A more accessible entry point into distributed systems than DDIA, covering communication,
			coordination, scalability, resiliency, and maintainability. Vitillo writes clearly and avoids
			burying you in theory before you understand the problem it's solving. The concept that landed
			hardest for me was the CAP theorem in practice — not as an academic curiosity but as a real
			design decision: when a network partition happens, your system has to choose between staying
			consistent or staying available. Most systems choose availability and deal with eventual
			consistency, and now I understand why.`,
		tags: ['distributed systems', 'scalability', 'architecture', 'system design'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Machine Learning for Absolute Beginners",
		image: '/book_images/machine_learning_absolute_beginners.jpg',
		link: "https://a.co/d/0mlbeginners",
		description: `I wanted to get a foothold in machine learning without drowning in statistics, and this
			book delivered exactly that. Theobald explains the key concepts — supervised vs unsupervised
			learning, regression, decision trees, neural networks — in plain English with minimal math.
			The concept that made the most intuitive sense to me was decision trees: the idea that you're
			just building a flowchart of yes/no questions that leads to a classification feels obvious
			once you see it, and it gave me a mental model for understanding more complex models as
			variations on the same idea.`,
		tags: ['machine learning', 'AI', 'beginner', 'data science'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Grokking Algorithms",
		image: '/book_images/grokking_algorithms.jpg',
		link: "https://a.co/d/0grokkalgo",
		description: `The most enjoyable algorithms book I've read. Bhargava uses hand-drawn diagrams and
			relatable examples to make topics like binary search, quicksort, graphs, and dynamic programming
			genuinely fun to learn. The thing that stuck with me most was graph traversal — specifically
			the difference between BFS and DFS and when to use each. BFS finds the shortest path (fewest
			hops) because it explores level by level, while DFS goes deep before backtracking. Seeing that
			illustrated with a real maze-solving example made it impossible to forget.`,
		tags: ['algorithms', 'data structures', 'computer science', 'beginner'],
		rating: 5,
		status: 'finished',
	},
	{
		title: "Grokking Data Structures",
		image: '/book_images/grokking_data_structures.jpg',
		link: "https://a.co/d/0grokkingds",
		description: `A natural companion to Grokking Algorithms from the same publisher. La Rocca applies
			the same visual, example-driven style to data structures — arrays, linked lists, trees, heaps,
			hash maps, and graphs. What I took away was a clearer intuition for when to reach for a hash map
			versus a tree: if you need fast lookups by exact key, use a hash map (O(1)); if you need ordered
			traversal or range queries, use a tree (O(log n)). I used to default to whatever felt familiar —
			now I make that choice deliberately.`,
		tags: ['data structures', 'algorithms', 'computer science', 'beginner'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "A Common-Sense Guide to Data Structures and Algorithms",
		image: '/book_images/common_sense_guide_dsa.jpg',
		link: "https://a.co/d/0commonsensedsa",
		description: `Wengrow's approach cuts through the academic noise and focuses on what actually matters
			for writing efficient code: understanding Big O notation and how your choice of data structure
			affects performance at scale. The framing that changed how I read code is thinking about the
			number of steps an algorithm takes relative to the input size — not in absolute numbers but in
			the shape of the curve. An O(n²) algorithm might be fine for 100 items and catastrophic for
			10,000. That mental model made me a more careful reviewer and a more intentional writer.`,
		tags: ['data structures', 'algorithms', 'computer science', 'programming'],
		rating: 4,
		status: 'finished',
	},
	{
		title: "Machine Learning",
		image: '/book_images/tom_mitchell_ml.jpg',
		link: "https://a.co/d/0fgOjodH",
		description: `Great book! Had some great chapters that made Machine Learning feel more 
    intuitive. The first two chapters especially helped me think of learning as simply a 
    search problem. I felt that provided a good high-level way to think about machine learning algorithms. I also enjoyed the chapters on Artifical Neural Networks, Bayensian learning, instance learning, and reinforcement learning. It's cool to see so many variations on how we can have a machine "learn". 
    `,
		tags: ['machine learning', 'AI', 'computer science', 'theory'],
		rating: 5,
		status: 'finished',
	},
];
