# Hello 👋

**AI-Native Software Engineer · Senior Backend Engineer · Tech Lead**

Search, Recommendations & Personalization · E-commerce & B2B Commerce · Workflow Automation & Low-code Platforms

## About

Over 7 years of software development experience across search, recommendations and personalization, e-commerce and B2B commerce, and workflow automation and low-code platforms. My expertise lies in designing and maintaining high-load distributed systems, where performance, reliability and fault tolerance are essential under intense workloads. I emphasize architectures that are not only scalable and flexible but also easy to support and evolve over time. I take an AI-native approach to software development, guiding AI agents from design through implementation and validation while owning architecture, code quality, and production reliability.

Throughout my career I’ve worked in large technology companies known for their rigorous standards, which helped me develop a strategic mindset and the ability to craft long-lasting, efficient solutions. In addition to back-end development, I have hands-on experience in front-end technologies, allowing me to approach projects from a full-stack perspective.

I enjoy sharing knowledge and best practices, which is why I actively maintain and develop a technical blog. When entrusted with a task, I take full ownership and ensure timely delivery with high efficiency and quality, regardless of the project’s scope or audience.

## Top Skills

![golang](https://img.shields.io/badge/golang-7d90b0?style=for-the-badge&logo=go&logoColor=white&color=7d90b0&labelColor=555555)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-7d90b0?style=for-the-badge&logo=postgresql&logoColor=white&color=7d90b0&labelColor=555555)
![Kafka](https://img.shields.io/badge/Kafka-7d90b0?style=for-the-badge&logo=apachekafka&logoColor=white&color=7d90b0&labelColor=555555)
![Redis](https://img.shields.io/badge/Redis-7d90b0?style=for-the-badge&logo=redis&logoColor=white&color=7d90b0&labelColor=555555)
![S3](https://img.shields.io/badge/S3-7d90b0?style=for-the-badge&logo=amazons3&logoColor=white&color=7d90b0&labelColor=555555)
![Kubernetes](https://img.shields.io/badge/Kubernetes-7d90b0?style=for-the-badge&logo=kubernetes&logoColor=white&color=7d90b0&labelColor=555555)
![Elasticsearch](https://img.shields.io/badge/Elasticsearch-7d90b0?style=for-the-badge&logo=elasticsearch&logoColor=white&color=7d90b0&labelColor=555555)

![Software Architecture](https://img.shields.io/badge/Software_Architecture-7d90b0?style=for-the-badge&logoColor=white&color=7d90b0&labelColor=555555)
![Scalability](https://img.shields.io/badge/Scalability-7d90b0?style=for-the-badge&logoColor=white&color=7d90b0&labelColor=555555)
![Microservices](https://img.shields.io/badge/Microservices-7d90b0?style=for-the-badge&logoColor=white&color=7d90b0&labelColor=555555)
![High Availability](https://img.shields.io/badge/High_Availability-7d90b0?style=for-the-badge&logoColor=white&color=7d90b0&labelColor=555555)
![Distributed Systems](https://img.shields.io/badge/Distributed_Systems-7d90b0?style=for-the-badge&logoColor=white&color=7d90b0&labelColor=555555)

The rest of the skills can be found in [this section](#skills).

## Experience

### <ins>[Tabby](https://www.linkedin.com/company/tabbypay/)</ins> — Marketplace · Search & Recommendations

**Tech Lead / Feature Lead, Senior Backend Developer**

**Jul 2025 — Present**

*Abu Dhabi, UAE — Remote*

#### **Key Achievements**

- Increased advertising coverage across product screens from **24.3% to 88.1%** by building a universal blender that merges items/merchants from multiple sources (monetization, organic) into a single ranked feed.
- Accelerated update delivery to users from **13–16 hours to 2 hours** (an **~87% reduction**) by decoupling pipeline stages and building a dedicated orchestrator.
- Raised successful delivery-process runs from **73.12% to 95.6%** by adding dynamic validation rules and dry-run validation to the process.
- Cut incident detection time from **30–60 minutes to 1–15 minutes** with a purpose-built process- and system-state monitoring tool.
- Reduced new ML-experiment setup time by **~71%** by enabling dynamic loading of embeddings and CTR-model versions from GCS without code releases.
- Lowered embedding update cost by **~63%** through incremental user-embedding refresh, replacing full reindexing.
- Enabled product launch in a new country by migrating the Elasticsearch cluster to geo-sharding: per-shard country-based filtering cut average search latency by **~38%** and documents scanned per query by **~55%**, while maintaining **99.95%** cluster availability throughout the migration.

#### **Responsibilities**

- Acted as Feature/Tech Lead across multiple initiatives: owned solution architecture, feature delivery control and hands-on development end to end.
- Designed and built the search and recommendation engines, including merchant suggest improvements and result limiting.
- Led the Elasticsearch cluster migration for a new-country market entry: requirements gathering, country-specific data filtering, functional and load testing, HA/failover validation and recovery-scenario documentation.
- Worked in tight coordination with the ML team on artifacts and data stored in GCS.
- Handled on-call rotations, authored incident documentation and postmortems in English, and mentored colleagues (including writing performance reviews).

#### **Technical Contributions**

- Built a universal source blender with template-based source mixing, cross-window deduplication and caching for faster responses.
- Implemented dynamic, contract-based loading of embeddings for products, users and merchants, plus incremental user-embedding updates.
- Added loading and indexing of multiple CTR-model versions from GCS, enabling side-by-side comparison and switching within experiments without redeploys.
- Delivered a centralized configuration system tunable per A/B experiment group for rapid hypothesis testing.
- Rebuilt the category tree as a facet-based structure with counters and facet logic.
- Diagnosed an Elasticsearch performance bottleneck in JSON deserialization within the ES client and evaluated a custom marshaller.
- Developed a delivery orchestrator and a state-tracking tool for observability.
- Adopted AI-assisted development tooling (Cursor, Claude Code, GitHub Spec Kit, OpenCode, MCP) to speed up prototyping, spec-driven workflows and delivery.

#### **Key Learnings**

- Deepened expertise in large-scale search, ranking, and recommendation systems on Elasticsearch.
- Strengthened collaboration patterns between backend and ML teams around shared GCS artifacts.
- Learned to design for experimentation, decoupling configuration and ML artifacts from release cycles.
- Reinforced the value of observability and validation in reducing operational risk.

**Team Size:** 7 people

*Microservices, Golang, Python, Apache Airflow, Mermaid, Elasticsearch, PostgreSQL, GCP, GCS, Pub/Sub, Redis, Kubernetes, Scalability, Software Architecture, REST API, gRPC, DDD, High Availability, Distributed Systems, Observability, Datadog, OpenTelemetry, TDD, GitLab, Jira*

### <ins>[Kuper](https://www.linkedin.com/company/kuper-ru/)</ins> — B2B · Growth & Engagement

**Senior Backend Developer**

**Dec 2023 — Jun 2025**

*Abu Dhabi, UAE — Remote*

#### **Key Achievements**

- Reduced deployment times by **34.5%** by extracting B2B logic into microservices using Golang, PostgreSQL and Kafka.
- Increased B2B sales volume by **427%** within six months by launching a scalable wholesale orders platform with Redis and S3.
- Improved client retention by **21.8%** through a loyalty program with tiered rewards and personalized offers.
- Decreased bug rates by **20.4%** by decoupling B2C/B2B workflows, enhancing system modularity.
- Maintained **99.9% uptime** via Kubernetes orchestration and proactive monitoring.

#### **Responsibilities**

- Extracted B2B logic from the monolith into microservices, applying Domain-Driven Design (DDD) principles for scalability.
- Designed and built a wholesale orders platform, integrating Redis for caching and S3 for storage.
- Developed a loyalty program with gRPC for inter-service communication and high availability.
- Led efforts to separate B2C/B2B scenarios, streamlining business processes.
- Conducted technical interviews, onboarded 5 specialists and ensured SLAs through on-call support.

#### **Technical Contributions**

- Implemented event-driven architectures using Kafka for real-time communication.
- Utilized Kubernetes for container orchestration and fault tolerance.
- Applied Test-Driven Development (TDD) practices to ensure code quality.
- Managed CI/CD pipelines with GitLab and tracked tasks in Jira.

#### **Key Learnings**

- Mastered distributed systems and DDD principles for complex domains.
- Enhanced communication skills to align technical solutions with business needs.
- Balanced short-term goals with long-term architectural improvements.
- Refined hiring practices to build cohesive, high-performing teams.

**Team Size:** 5 people

*Microservices, PostgreSQL, Kubernetes, S3, Redis, Kafka, Scalability, Software Architecture, REST API, gRPC, DDD, Golang, High Availability, Distributed Systems, Observability, Grafana, VictoriaMetrics, Kibana, Jaeger, Sentry, OpenTelemetry, TDD, GitLab, Jira*

### <ins>[ELMA365](https://www.linkedin.com/company/elmabpm/)</ins> — Document Management

**Senior Full Stack Developer**

**Nov 2022 — Dec 2023**

*Tbilisi, Georgia — Remote*

#### **Key Achievements**

- Reduced document generation time by **25.5%**, improving operational efficiency.
- Achieved **97% test coverage**, reducing runtime errors and enhancing stability.
- Enabled seamless scalability to handle growing workloads with high availability.
- Delivered an intuitive Angular-based UI, praised for responsiveness and usability.
- Automated document management processes, addressing critical business needs.

#### **Responsibilities**

- Developed document generation and templating capabilities within a low-code business process automation platform using Golang, Angular and microservices.
- Optimized workflows by identifying bottlenecks and implementing performance improvements.
- Ensured code quality through TDD, covering unit, integration and end-to-end tests.
- Developed a user-friendly UI/UX with smooth backend integration for optimal interactions.
- Mentored junior developers, conducted code reviews and promoted best practices.

#### **Technical Contributions**

- Implemented Kubernetes for container orchestration, ensuring fault tolerance and scalability.
- Integrated Redis for caching and S3 for storage, boosting system performance.
- Applied TDD principles to minimize technical debt and ensure maintainability.
- Used GitLab for CI/CD pipelines, streamlining development and deployment.

#### **Key Learnings**

- Mastered scalable microservices design using Golang, Kubernetes, and distributed systems.  
- Improved full-stack development skills to create cohesive, user-focused solutions.  
- Recognized the value of TDD in maintaining code quality and reducing errors.  
- Enhanced collaboration skills within cross-functional teams for timely project delivery.  
- Gained expertise in workflow optimization and leveraging caching mechanisms like Redis.

**Team Size:** 6 people

*Golang, MongoDB, Kubernetes, Angular, Distributed Systems, High Availability, Scalability, Microservices, REST API, S3, Redis, Observability, Grafana, Prometheus, Loki, Jaeger, TDD, GitLab*

### <ins>[Rainbowsoft](https://www.linkedin.com/company/%D0%BD%D0%BF%D0%BE-rbs-rainbowsoft-/)</ins> — Research & Development

**Middle Full Stack Developer**

**Oct 2020 — Nov 2022**

*Tbilisi, Georgia — Remote*

#### **Key Achievements**

- Developed an SDK for microcomponent management, enabling seamless integration into robotics projects.
- Built a remote control system using Golang, WebSockets and React.js, improving device management efficiency.
- Simplified deployment with Docker, reducing maintenance complexity.
- Contributed to the [SPECTR Traffic Rules](https://spectr-pdd.ru/) system, enhancing its usability for teaching traffic rules.
- Optimized [RepkaPi](https://repka-pi.ru/) setup by testing OS options and selecting optimal software.

#### **Responsibilities**

- Designed and implemented an SDK for microcomponents using Golang and gRPC.
- Developed the server-side RC system with Golang, WebSockets and Docker for scalability.
- Built the client-side RC interface with React.js, ensuring intuitive user interactions.
- Tested operating systems and configured software for the RepkaPi single-board computer.
- Contributed to the SPECTR Traffic Rules system, handling database design and logic with PHP and MySQL.

#### **Technical Contributions**

- Integrated gRPC for efficient communication between components.
- Used Docker to streamline deployment and scaling processes.
- Applied WebSockets for real-time device control in the RC system.
- Utilized Jenkins for CI/CD pipelines, ensuring smooth workflows.
- Modeled architecture with UML and BPMN for clarity and alignment.

#### **Key Learnings**

- Mastered microcomponent integration and hardware-software interaction.  
- Gained expertise in Docker for simplifying deployment and scaling.  
- Learned gRPC, WebSockets, and cgo for high-performance solutions.  
- Improved full-stack skills, combining Golang, PHP, and React.js effectively.  
- Recognized the value of thorough testing and software selection for hardware projects.

**Team Size:** 8 people

*Golang, Node.js, REST API, gRPC, Jenkins, MySQL, UML, BPMN, WebSockets, React.js, Docker, PHP, Observability, Prometheus, Grafana, Graylog, Jaeger, Full Stack Development, Web Technologies*

### Freelance

**Software Developer**

**Oct 2019 — Sep 2020**

*Remote*

#### **Responsibilities**

- Developed Telegram bots for clients.
- Built websites and landing pages for clients.
- Wrote scripts to automate routine tasks.
- Combined freelance work with studies, reinforcing theoretical knowledge through practical projects.

*C#, Python, Node.js, HTML, CSS, Bash*

## Education

**Computer and Information Systems Security/Information Assurance** - **Sep 2016 - Jan 2020**

Saratov State Technical University - Saratov, Russia

## Licences & Certificates

**<ins>[Web3 General Proficiency Certification](https://cert.chainstack.com/certificates/certificates.php?id=6A608CC76AD24)</ins>**

**Issued Jul 2025**

*Chainstack*

Successfully completed the Web3 General Proficiency assessment, demonstrating practitioner-level knowledge of the Web3 industry and technology, along with proficiency in day-to-day Web3 operations. Evaluated through a carefully curated set of questions derived from Chainstack, a leader in Web3 infrastructure.

Web3, Blockchain, Infrastructure

**<ins>[SQL and PostgreSQL: The Complete Developer's Guide](https://ude.my/UC-891c03c5-be4a-4d5e-931b-3a34e0c26bd5/)</ins>**

**Issued Mar 2024**

*Udemy*

Gained comprehensive skills in working with relational databases through hands-on learning of SQL and PostgreSQL. Mastered essential database operations including data storage and retrieval, query optimization, and efficient database design. This course provided a solid foundation in SQL programming, performance tuning, and best practices for building robust data-driven applications.

SQL, PostgreSQL, Database Design, Software Development

**<ins>[Redis: The Complete Developer's Guide](https://ude.my/UC-54fb98de-5a87-494b-a812-814f59e286a5/)</ins>**

**Issued Jan 2024**

*Udemy*

A comprehensive course covering Redis v7.0 from the ground up, with hands-on exercises and real-world use cases. Explored core and advanced topics including data structures, persistence, scripting with Lua, concurrency patterns, Redis Streams, and performance optimization. Gained practical experience working with Redis in modern application development.

Redis, Database Design

**<ins>[Go - The Complete Guide](https://ude.my/UC-cd6c145e-d53b-4fcc-a8b6-0339bd6cccf8/)</ins>**

**Issued May 2023**

*Udemy*

A comprehensive course covering the Go (Golang) programming language from the ground up. Gained in-depth knowledge by building multiple hands-on projects, including a fully functional REST API. Covered core and advanced topics such as goroutines, channels, packages, testing, data marshaling, and best practices for developing high-performance, concurrent applications.

Golang, Software Development, Programming Languages

## Skills

**Domain Expertise:** Search, Recommendations & Personalization · E-commerce & B2B Commerce · Workflow Automation & Low-code Platforms

**Languages:** English (Professional working proficiency), Russian (native)

**Programming Languages:** Go (Golang), JavaScript, TypeScript, PHP, C#, Python, Bash

**Backend Runtime:** Node.js

**Frontend Development:** HTML, CSS, React, Angular, SASS

**Storages:** PostgreSQL, Elasticsearch, OpenSearch, MySQL, Redis, S3, Google Cloud Storage (GCS), MongoDB

**Search & Ranking:** Search Relevance, Ranking, Information Retrieval, Recommendation Systems, Personalization, Embeddings, A/B Testing, Experimentation, Search Indexing, Search Query Optimization, Faceted Search, Autocomplete, Feature Engineering Pipelines, Vector Search

**Database Engineering:** Query Optimization, Indexing, Transactions & Isolation Levels, Database Migrations

**Performance & Concurrency:** Profiling, Benchmarking, Concurrency

**Data Pipelines:** Workflow Orchestration, Data Pipelines, ETL/ELT, Data Quality

**Version Control:** Git, GitLab

**Infrastructure & Orchestration:** Docker, Kubernetes, Helm, Infrastructure as Code (IaC), ArgoCD, Nginx, Apache Airflow

**APIs & Communication:** REST API, gRPC, Protocol Buffers (protobuf), OpenAPI/Swagger, WebSockets, JWT, OAuth 2.0, API Versioning, Backward Compatibility, Schema Evolution

**Messaging Systems:** Kafka, Google Cloud Pub/Sub, WebSockets, Delivery Semantics, Consumer Groups, Partitioning, Dead-Letter Queues

**Observability & Monitoring:** Prometheus, Grafana, VictoriaMetrics, Datadog, OpenTelemetry, Jaeger, Loki, Graylog, Kibana, Sentry

**Reliability & SRE:** SLO, SLA, Alerting, Incident Management, Postmortems, On-call, Disaster Recovery, Capacity Planning, Load Testing, Fault Tolerance Testing, Zero-Downtime Deployments

**Design Methodologies & Principles:** Software Architecture, Domain-Driven Design (DDD), Clean Architecture, CQRS, Outbox Pattern, Idempotency, Rate Limiting, Event-Driven Architecture, Microservices, Scalability, High Availability, Distributed Systems, Retries & Backoff, Circuit Breakers, Backpressure, Deduplication, FSD

**Development Practices:** Test-Driven Development (TDD)

**Leadership & Collaboration:** Technical Leadership, Mentoring, System Design, Code Review, Hiring, Technical Interviewing, Stakeholder Management, Agile, RFCs, ADRs, Technical Planning, Cross-team Collaboration

**AI-Assisted Development:** Cursor, Claude Code, Codex, GitHub Spec Kit, Claude Design, OpenCode, Model Context Protocol (MCP), Claude Skills, AI Harnesses

**CI/CD Tools:** GitLab CI/CD, Jenkins

**Project Management:** Jira

**Modeling & Documentation:** UML, BPMN, C4, Mermaid, Postman

**Cloud & Other:** Google Cloud Platform, Figma

## Honors & Awards

**Sales Growth Excellence Award**

**Sep 2024**

*Issued by Kuper*

Achieved a 427% increase in B2B sales volume within six months by launching a scalable wholesale orders platform powered by Redis and S3. The platform's robust architecture and caching mechanisms enabled seamless handling of high transaction volumes.

**Code Quality Champion Award**

**Oct 2023**

*Issued by ELMA365*

Achieved 97% test coverage through rigorous Test-Driven Development (TDD) practices, minimizing runtime errors and enhancing system stability. Demonstrated expertise in unit, integration, and end-to-end testing to ensure maintainable and reliable code.

**Operational Efficiency Excellence Award**

**Sep 2023**

*Issued by ELMA365*

Recognized for reducing document generation time by 25.5%, significantly improving operational efficiency. Optimized backend workflows and implemented performance enhancements using Golang and microservices architecture.

## Personal Brand

I enjoy sharing knowledge and best practices, which is why I actively maintain and develop a technical blog. It serves as a platform to document insights, explore new technologies, and contribute to the developer community.

**[Website](https://rykhlov.tech/)**
**[DevTo](https://dev.to/nikita_rykhlov)**
**[Medium](https://medium.com/@nikita_rykhlov)**
**[LinkedIn](https://www.linkedin.com/in/nikita-rykhlov/)**
**[Facebook](https://www.facebook.com/groups/nikitarykhlov)**
**[Telegram](https://t.me/nikitaRykhlovBlog)**
**[X](https://x.com/NikitaRykhlov)**
