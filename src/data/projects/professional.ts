export const professionalProjects = [
	{
		title: "Integrated Pest Detection and Alerting System",
		link: "https://www.ecolab.com/",
		description: `
			Integrated a pest detection and alerting capability into an internal device management system.
            Enabled real-time alerts and exposed device data through RESTful API endpoints for enhanced monitoring.
            Also, developed a Blazor-based dashboard for visualizing pest detection data and device status.
            Added unit and integration tests to ensure system reliability and performance.
		`,
		technologies: ['C#', '.NET Core', 'Azure', 'REST API', 'Microservices', 'Blazor', 'Moq', 'Unit'],
		type: 'Professional'
	},
	{
		title: "Executive Business Review Web Application",
		link: "https://www.ecolab.com/",
		description: `
			Co-led the development, delivery, and feature enhancements of an EBR web application used by 300+ global account managers.
            The application standardized reporting across the organization and significantly improved customer engagement.
            Built with modern web technologies and integrated with backend analytics services for real-time data visualization.
		`,
		technologies: ['Angular', 'TypeScript', 'C#', '.NET', 'Snowflake','Azure SQL', 'Redis', 'CI/CD'],
		type: 'Professional'
	},
    {
        title: "Migrated Legacy Email Notification System to Event-Driven Architecture",
        link: "https://www.ecolab.com/",
        description: `
            Migrated legacy email notification processing from a monolithic system to an event-driven architecture.
            Implemented asynchronous processing using Azure Functions and Service Bus for improved scalability and reliability.
            Reduced notification processing time by 70% and enhanced system maintainability.
        `,
        technologies: ['C#', '.NET Core', 'Azure Functions', 'Service Bus', 'Event-Driven Architecture', 'Serverless'],
        type: 'Professional'
    },
    {
        title: "Enabled Observability of Commercial Systems through APM Tools",
        link: "https://www.ecolab.com/",
        description: `
            Worked with architecture teams to onboard commercial systems to Application Performance Monitoring (APM) using AppDynamics and 
            Application Insights for improved visibility and troubleshooting.
            Implemented monitoring solutions to track system performance and identify bottlenecks.
            Enhanced system reliability and reduced downtime through proactive monitoring.
        `,
        technologies: ['C#', '.NET Core', 'AppDynamics', 'Application Insights', 'APM', 'Monitoring', 'Observability Engineering'],
        type: 'Professional'
    },
    {
        title: "Remote Cache Server for JS Monorepo",
        link: "https://www.ecolab.com/",
        description: `
            Developed a remote cache server to optimize build times for a large Javascript monorepo.
            Implemented caching strategies to store and retrieve build artifacts, significantly 
            reducing build times for developers by up to ~90%.
            Improved developer productivity and streamlined the CI/CD pipeline.
        `,
        technologies: ['Python', 'FastAPI', 'Docker', 'Blob Storage', 'Caching', 'CI/CD'],
        type: 'Professional'
    },
    {
        title: "Microfrontend and UX Library Infrastructure Setup",
        link: "https://www.ecolab.com/",
        description: `
            Designed and implemented infrastructure for a microfrontend platform and reusable UX component library.
            Set up CI/CD pipelines to automate builds, testing, and deployments. Configured Terraform 
            for infrastructure-as-code management of Azure resources. Implemented blob storage for 
            artifact management and Front Door CDN for optimized global content delivery. This DevOps 
            work enabled multiple teams to develop and deploy independently while maintaining shared 
            UI components across applications.
        `,
        technologies: ['Terraform', 'CI/CD', 'Azure', 'Azure Blob Storage', 'CDN', 'DevOps', 'IaC', 'Microfrontends'],
        type: 'Professional'
    },
    {
        title: "AI Innovation Initiative - Developer Experience Experiments",
        link: "https://www.ecolab.com/",
        description: `
            Participated in an innovation initiative with data scientists to experiment with and prototype 
            cutting-edge AI tools for improving developer experience. Prototyped four key AI applications 
            before commercial alternatives became available: CLI Unit Test Generator for automating test creation, 
            ScrumMasterAgent for managing sprint workflows, Software Engineering Insights App for analyzing 
            code metrics and team productivity, and Code Review Agent for intelligent code review feedback. 
            These early-stage experiments explored how AI could streamline engineering workflows and enhance 
            developer productivity.
        `,
        technologies: ['Python', 'AI/ML', 'LLMs', 'Developer Tools', 'Innovation', 'Prototyping'],
        type: 'Professional'
    },
    {
        title: "AWS Infrastructure-as-Code for Multi-Million Commercial Product",
        link: "https://www.ecolab.com/",
        description: `
            Designed and implemented comprehensive infrastructure-as-code (IaC) for AWS resources supporting 
            a multi-million dollar commercial product. Utilized Terraform to define, provision, and manage 
            cloud resources reproducibly across development, staging, and production environments. Implemented 
            best practices for security, scalability, and cost optimization. Automated infrastructure deployment 
            and enabled reliable, consistent infrastructure management across teams.
        `,
        technologies: ['Terraform', 'AWS', 'Infrastructure-as-Code', 'DevOps', 'Cloud Architecture', 'CI/CD'],
        type: 'Professional'
    },
    {
        title: "Azure Data Factory Pipelines for Field Operations",
        link: "https://www.ecolab.com/",
        description: `
            Designed, modified, and maintained complex data pipelines in Azure Data Factory for field operation 
            sales and service data processing. Handled high-volume data ingestion and transformation of hundreds of 
            thousands of records daily. Implemented robust error handling, data validation, and monitoring to ensure 
            reliable data flow. Optimized pipeline performance and maintained data quality standards across the 
            enterprise data platform.
        `,
        technologies: ['Azure Data Factory', 'Data Pipelines', 'ETL', 'Azure SQL', 'Data Engineering', 'Cloud Data'],
        type: 'Professional'
    },
    {
        title: "Databricks Adoption for International Data Ingestion",
        link: "https://www.ecolab.com/",
        description: `
            Led the adoption and implementation of Databricks to significantly increase compute power for ingesting 
            and processing international data sources. Architected a scalable solution that enabled faster data processing, 
            improved performance, and reduced processing time. Coordinated cross-functional teams to migrate workloads 
            and established best practices for leveraging Databricks' distributed computing capabilities.
        `,
        technologies: ['Python', 'Databricks', 'Apache Spark', 'Cloud Computing', 'Data Engineering', 'ETL', 'Distributed Systems'],
        type: 'Professional'
    },
    {
        title: "Billing Invoice Processing Cron Job System",
        link: "https://www.constantcontact.com/",
        description: `
            Co-built and implemented along with a principal software engineer a high-performance cron job system for processing thousands of daily billing invoices.
            Leveraged Spring Batch framework with multithreading to efficiently handle large-scale batch processing while 
            maintaining data integrity. The system processed invoices in parallel, significantly reducing processing time and 
            enabling timely billing operations. Implemented comprehensive error handling, retry logic, and monitoring for 
            reliable invoice generation and delivery.
        `,
        technologies: ['Java', 'Spring Batch', 'Multithreading', 'Cron Jobs', 'Batch Processing', 'SQL'],
        type: 'Professional'
    },
    {
        title: "Business Partner Console Revamp",
        link: "https://www.constantcontact.com/",
        description: `
            Contributed to the revamp of the business partner console, a critical portal used by thousands of business partners to manage 
            partner relationships and operations. Worked on both frontend and backend development using React for the modern, responsive user 
            interface and Spring Boot with RESTful APIs for robust backend services. Collaborated with product and design teams to deliver an 
            improved experience that enhanced partner engagement and operational efficiency at scale.
        `,
        technologies: ['React', 'TypeScript', 'Spring Boot', 'REST API', 'Java', 'MySQL'],
        type: 'Professional'
    },
    {
        title: "DevSecOps Metrics Portal and Engineering Maturity Assessment Tool",
        link: "https://www.ecolab.com/",
        description: `
            Built an internal DevSecOps tool suite portal to showcase engineering team metrics and automate engineering maturity assessments.
            The platform aggregates data from multiple sources to provide comprehensive visibility into team performance, security posture, 
            and development practices. Automated the assessment of engineering maturity across teams, identifying improvement areas and 
            tracking progress. Enabled leadership with actionable insights and data-driven decision making for engineering excellence.
        `,
        technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'REST API', 'Data Visualization', 'DevSecOps'],
        type: 'Professional'
    }
];
