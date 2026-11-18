# Hello 👋

## About
<p class="text-block">I have over 5 years of experience in software development, focusing on building robust and scalable solutions that drive value across various industries. My expertise lies in designing and maintaining high-load distributed systems, where performance, reliability, and fault tolerance are essential under intense workloads. I emphasize creating architectures that are not only scalable and flexible but also easy to support and evolve over time. I always strive to deliver high-quality results that align with both user expectations and business goals.

Throughout my career, I’ve worked in large technology companies known for their rigorous standards, which helped me develop a strategic mindset and the ability to craft long-lasting, efficient solutions. In addition to back-end development, I have hands-on experience in front-end technologies, allowing me to approach projects from a full-stack perspective.

I enjoy sharing knowledge and best practices, which is why I actively maintain and develop a technical blog. It serves as a platform to document insights, explore new technologies, and contribute to the developer community.

I thrive in team environments, adapt quickly to new settings, and am committed to mastering tools and technologies to achieve the best possible outcomes. When entrusted with a task, I take full ownership and ensure timely delivery with high efficiency and quality, regardless of the project’s scope or audience.</p>

## Top Skills

![](https://img.shields.io/badge/golang-7d90b0?style=for-the-badge&logo=go&logoColor=white&color=7d90b0&labelColor=555555)
![](https://img.shields.io/badge/PostgreSQL-7d90b0?style=for-the-badge&logo=postgresql&logoColor=white&color=7d90b0&labelColor=555555)
![](https://img.shields.io/badge/Kafka-7d90b0?style=for-the-badge&logo=apachekafka&logoColor=white&color=7d90b0&labelColor=555555)
![](https://img.shields.io/badge/Redis-7d90b0?style=for-the-badge&logo=redis&logoColor=white&color=7d90b0&labelColor=555555)
![](https://img.shields.io/badge/S3-7d90b0?style=for-the-badge&logo=amazons3&logoColor=white&color=7d90b0&labelColor=555555)
![](https://img.shields.io/badge/Kubernetes-7d90b0?style=for-the-badge&logo=kubernetes&logoColor=white&color=7d90b0&labelColor=555555)
![](https://img.shields.io/badge/ElasticSearch-7d90b0?style=for-the-badge&logo=elasticsearch&logoColor=white&color=7d90b0&labelColor=555555)

![](https://img.shields.io/badge/Software_Design-7d90b0?style=for-the-badge&logoColor=white&color=7d90b0&labelColor=555555)
![](https://img.shields.io/badge/Scalability-7d90b0?style=for-the-badge&logoColor=white&color=7d90b0&labelColor=555555)
![](https://img.shields.io/badge/Microservices-7d90b0?style=for-the-badge&logoColor=white&color=7d90b0&labelColor=555555)
![](https://img.shields.io/badge/High_Availability-7d90b0?style=for-the-badge&logoColor=white&color=7d90b0&labelColor=555555)
![](https://img.shields.io/badge/Distributed_Systems-7d90b0?style=for-the-badge&logoColor=white&color=7d90b0&labelColor=555555)

<p class="text-center text-italic text-block">The rest of the skills can be found in <a class="text-underline" href="#skills">this section</a>.</p>

## Experience

### <ins>[Tabby](https://www.linkedin.com/company/tabbypay/)</ins> — Search & Recommendations

**Tech Lead/Feature Lead, Senior Backend Developer**

**Jul 2025 - Present**

*Abu Dhabi, Abu Dhabi Emirate, United Arab Emirates - Remote*

#### **Key Achievements**
- Increased advertising coverage across product screens from **24.3% to 88.1%** by building a universal blender that merges items/merchants from multiple sources (monetization, organic) into a single ranked feed.
- Accelerated update delivery to users from **13-16 hours to 2 hours** (an **~87% reduction**) by decoupling pipeline stages and building a dedicated orchestrator.
- Raised successful delivery-process runs from **73.12% to 95.6%** by adding dynamic validation rules and dry-run validation to the process.
- Cut incident detection time from **30-60 minutes to 1–15 minutes** with a purpose-built process- and system-state monitoring tool.
- Reduced new ML-experiment setup time by **~71%** by enabling dynamic loading of embeddings and CTR-model versions from GCS without code releases.
- Lowered embedding update cost by **~63%** through incremental user-embedding refresh, replacing full reindexing.
- Enabled product launch in a new country by migrating the ElasticSearch cluster to geo-sharding: implemented per-shard country-based data filtering, cutting average search latency by **~38%** and documents scanned per query by **~55%**, while maintaining **99.95%** cluster availability throughout the migration.

#### **Responsibilities**
- Acted as Feature/Tech Lead across multiple initiatives: owned solution architecture, feature delivery control, and hands-on development end to end.
- Designed and built the search and recommendation engines, including merchant suggest improvements and result limiting.
- Led the ElasticSearch cluster migration for a new-country market entry: requirements gathering, country-specific data filtering, functional and load testing, HA/failover validation, and recovery-scenario documentation.
- Worked in tight coordination with the ML team on artifacts and data stored in GCS.
- Handled on-call rotations, authored incident documentation and postmortems in English, and mentored colleagues (including writing performance reviews).

#### **Technical Contributions**
- Built a universal source blender with template-based source mixing, cross-window deduplication, and caching for faster responses.
- Implemented dynamic, contract-based loading of embeddings for products, users, and merchants, plus incremental user-embedding updates.
- Added loading and indexing of multiple CTR-model versions from GCS, enabling side-by-side comparison and switching within experiments without redeploys.
- Delivered a centralized configuration system tunable per A/B experiment group for rapid hypothesis testing.
- Rebuilt the category tree as a facet-based structure with counters and facet logic.
- Diagnosed an ElasticSearch performance bottleneck in JSON deserialization within the ES client and evaluated a custom marshaller.
- Developed a delivery orchestrator and a state-tracking tool for observability.
- Adopted AI-assisted development tooling (Cursor, Claude Code, GitHub Spec Kit, OpenCode, MCP) to speed up prototyping, spec-driven workflows, and delivery.

#### **Key Learnings**
- Deepened expertise in large-scale search, ranking, and recommendation systems on ElasticSearch.
- Strengthened collaboration patterns between backend and ML teams around shared GCS artifacts.
- Learned to design for experimentation, decoupling configuration and ML artifacts from release cycles.
- Reinforced the value of observability and validation in reducing operational risk.

**Team Size:** 7 people  

*Microservices, Golang, ElasticSearch, PostgreSQL, GCP, GCS, Pub/Sub, Redis, Kubernetes, Scalability, Software Architecture, gRPC, Domain-Driven Design(DDD), High Availability, Distributed Systems, Test-Driven Development, GitLab, Jira*

### <ins>[Kuper](https://www.linkedin.com/company/kuper-ru/)</ins> — B2B, Growth & Engagement

**Senior Backend Developer**

**Dec 2023 - Jun 2025 (1 year 7 months)**

*Abu Dhabi, Abu Dhabi Emirate, United Arab Emirates - Remote*

#### **Key Achievements**
- Reduced deployment times by **34.5%** by extracting B2B logic into microservices using Golang, PostgreSQL, and Kafka.
- Increased B2B sales volume by **427%** within six months by launching a scalable wholesale orders platform with Redis and S3.
- Improved client retention by **21.8%** through a loyalty program with tiered rewards and personalized offers.
- Decreased bug rates by **20.4%** by decoupling B2C/B2B workflows, enhancing system modularity.
- Maintained **99.9% uptime** via Kubernetes orchestration and proactive monitoring.

#### **Responsibilities**
- Extracted B2B logic from monolith to microservices, applying Domain-Driven Design (DDD) principles for scalability.
- Designed and built a wholesale orders platform, integrating Redis for caching and S3 for storage.
- Developed a loyalty program with gRPC for inter-service communication and high availability.
- Led efforts to separate B2C/B2B scenarios, streamlining business processes.
- Conducted technical interviews, onboarded 5 specialists, and ensured SLAs through on-call support.

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

*Microservices, PostgreSQL, Kubernetes, S3, Redis, Kafka, Scalability, Software Architecture, gRPC, Domain-Driven Design(DDD), Golang, High Availability, Distributed Systems, Test-Driven Development, GitLab, Jira*

### <ins>[ELMA365](https://www.linkedin.com/company/elmabpm/)</ins> — Document Management

**Senior Full Stack Developer**

**Nov 2022 - Dec 2023 (1 year 2 months)**

*Tbilisi, Georgia - Remote*

#### **Key Achievements**  
- Reduced document generation time by **25.5%**, improving operational efficiency.  
- Achieved **97% test coverage**, reducing runtime errors and enhancing stability.  
- Enabled seamless scalability to handle growing workloads with high availability.  
- Delivered an intuitive Angular-based UI, praised for responsiveness and usability.  
- Automated document management processes, addressing critical business needs.  

#### **Responsibilities**  
- Designed and built a document templating platform using Golang, Angular, and microservices architecture.  
- Optimized workflows by identifying bottlenecks and implementing performance improvements.  
- Ensured code quality through TDD, covering unit, integration, and end-to-end tests.  
- Developed a user-friendly UI/UX with smooth backend integration for optimal interactions.  
- Collaborated with a six-person team to deliver scalable, reliable solutions.  
- Mentored junior developers, conducted code reviews, and promoted best practices.  

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

**Team size:** 6 people  

*Golang, Kubernetes, Angular, Distributed Systems, High Availability, Scalability, Microservices, S3, Redis, Test-Driven Development, GitLab*

### <ins>[Rainbowsoft](https://www.linkedin.com/company/%D0%BD%D0%BF%D0%BE-rbs-rainbowsoft-/)</ins> — Research & Development

**Middle Full Stack Developer**

**Oct 2020 - Nov 2022 (2 years 2 months)**

*Tbilisi, Georgia - Remote*

#### **Key Achievements**  
- Developed an SDK for microcomponent management, enabling seamless integration into robotics projects.  
- Built a remote control system using Golang, WebSockets, and React.js, improving device management efficiency.  
- Simplified deployment with Docker, reducing maintenance complexity.  
- Contributed to the <ins>[SPECTR Traffic Rules](https://spectr-pdd.ru/)</ins> system, enhancing its usability for teaching traffic rules.  
- Optimized <ins>[RepkaPi](https://repka-pi.ru/)</ins> setup by testing OS options and selecting optimal software.  

#### **Responsibilities**  
- Designed and implemented an SDK for microcomponents using Golang and gRPC.  
- Developed server-side RC system with Golang, WebSockets, and Docker for scalability.  
- Built client-side RC interface with React.js, ensuring intuitive user interactions.  
- Tested operating systems and configured software for RepkaPi single-board computer.  
- Contributed to SPECTR Traffic Rules system, handling database design and logic with PHP and MySQL.  

#### **Technical Contributions**  
- Integrated gRPC for efficient communication between components.  
- Used Docker to streamline deployment and scaling processes.  
- Applied WebSockets for real-time device control in RC system.  
- Utilized Jenkins for CI/CD pipelines, ensuring smooth workflows.  
- Modeled architecture with UML and BPMN for clarity and alignment.  

#### **Key Learnings**  
- Mastered microcomponent integration and hardware-software interaction.  
- Gained expertise in Docker for simplifying deployment and scaling.  
- Learned gRPC, WebSockets, and cgo for high-performance solutions.  
- Improved full-stack skills, combining Golang, PHP, and React.js effectively.  
- Recognized the value of thorough testing and software selection for hardware projects. 

**Team size:** 8 people  

*Golang, gRPC, Jenkins, MySQL, Unified Modeling Language (UML), BPMN, WebSockets, React.js, Docker, PHP, Full Stack Development, Web Technologies*

## Education

**Computer and Information Systems Security/Information Assurance** - **Sep 2016 - Jan 2020**

Saratov State Technical University - Saratov, Russia

## Licences & Certificates

**<ins>[Web3 General Proficiency Certification](https://cert.chainstack.com/certificates/certificates.php?id=6A608CC76AD24)</ins>**

**Issued Jul 2026**

*Chainstack*

Successfully completed the Web3 General Proficiency assessment, demonstrating practitioner-level knowledge of the Web3 industry and technology, along with proficiency in day-to-day Web3 operations. Evaluated through a carefully curated set of questions derived from Chainstack, a leader in Web3 infrastructure.

<p class="pb text-italic">Web3, Blockchain, Infrastructure</p>

**<ins>[SQL and PostgreSQL: The Complete Developer's Guide](https://ude.my/UC-891c03c5-be4a-4d5e-931b-3a34e0c26bd5/)</ins>**

**Issued Mar 2024**

*Udemy*

Gained comprehensive skills in working with relational databases through hands-on learning of SQL and PostgreSQL. Mastered essential database operations including data storage and retrieval, query optimization, and efficient database design. This course provided a solid foundation in SQL programming, performance tuning, and best practices for building robust data-driven applications.

<p class="pb text-italic">SQL, PostgreSQL, Database Design, Software Development</p>

**<ins>[Redis: The Complete Developer's Guide](https://ude.my/UC-54fb98de-5a87-494b-a812-814f59e286a5/)</ins>**

**Issued Jan 2024**

*Udemy*

A comprehensive course covering Redis v7.0 from the ground up, with hands-on exercises and real-world use cases. Explored core and advanced topics including data structures, persistence, scripting with Lua, concurrency patterns, Redis Streams, and performance optimization. Gained practical experience working with Redis in modern application development.

<p class="pb text-italic">Redis, Database Design</p>

**<ins>[Go - The Complete Guide](https://ude.my/UC-cd6c145e-d53b-4fcc-a8b6-0339bd6cccf8/)</ins>**

**Issued May 2023**

*Udemy*

A comprehensive course covering the Go (Golang) programming language from the ground up. Gained in-depth knowledge by building multiple hands-on projects, including a fully functional REST API. Covered core and advanced topics such as goroutines, channels, packages, testing, data marshaling, and best practices for developing high-performance, concurrent applications.

<p class="pb text-italic">Golang, Software Development, Programming Languages</p>

## Skills

**Languages:** English (Professional working proficiency), Russian (native)

**Programming Languages:** Golang, JavaScript, TypeScript, PHP.

**Frontend Development:** HTML, CSS, React, Angular.

**Storages:** PostgreSQL, ElasticSearch, MySQL, Redis, S3.

**Version Control Tools:** Git, GitLab.

**Containerization and Orchestration:** Docker, Kubernetes, Helm.

**Messaging Systems:** Kafka, WebSockets.

**Design Methodologies and Principles:** Domain-Driven Design (DDD), Microservices, Scalability, High Availability, Distributed Systems.

**Development Practices:** Test-Driven Development (TDD).

**AI-Assisted Development:** Cursor, Claude Code, GitHub Spec Kit, Claude Design, OpenCode, Model Context Protocol (MCP), Claude Skills.

**CI/CD Tools:** GitLab CI/CD, Jenkins.

**Project Management:** Jira.

**Modeling and Documentation:** UML, BPMN, C4

**Other:** Google Cloud Platform, Figma

## Honors & Awards

**Sales Growth Excellence Award**

**Sep 2024**

*Issued by Kuper*

<p class="pb">Achieved a 427% increase in B2B sales volume within six months by launching a scalable wholesale orders platform powered by Redis and S3. The platform's robust architecture and caching mechanisms enabled seamless handling of high transaction volumes.</p>

**Code Quality Champion Award**

**Oct 2023**

*Issued by ELMA365*

<p class="pb">Achieved 97% test coverage through rigorous Test-Driven Development (TDD) practices, minimizing runtime errors and enhancing system stability. Demonstrated expertise in unit, integration, and end-to-end testing to ensure maintainable and reliable code.</p>

**Operational Efficiency Excellence Award**

**Sep 2023**

*Issued by ELMA365*

<p class="pb">Recognized for reducing document generation time by 25.5% , significantly improving operational efficiency. Optimized backend workflows and implemented performance enhancements using Golang and microservices architecture.</p>

## Presonal brand

<p class="pb">I enjoy sharing knowledge and best practices, which is why I actively maintain and develop a technical blog. It serves as a platform to document insights, explore new technologies, and contribute to the developer community.</p>

**[Website](https://rykhlov.tech/)**
**[DevTo](https://dev.to/nikita_rykhlov)**
**[Medium](https://medium.com/@nikita_rykhlov)**
**[LinkedIn](https://www.linkedin.com/in/nikita-rykhlov/)**
**[Facebook](https://www.facebook.com/groups/nikitarykhlov)**
**[Telegram](https://t.me/nikitaRykhlovBlog)**
**[X](https://x.com/NikitaRykhlov)**
