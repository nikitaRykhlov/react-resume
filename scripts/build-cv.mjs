// Generates print-ready CV PDFs (EN + RU) into public/cv/.
//
// Content is the full résumé (richer than the site copy): every job carries
// Key Achievements, Responsibilities, Technical Contributions and Key Learnings.
// Rendered from a styled HTML template via the system Chrome in headless mode —
// no Puppeteer/Chromium download. Run with: npm run cv
//
// Source of truth for the copy: ../resume/resume.md and ../resume/resume.ru.md.
// When the résumé changes, update the data below and re-run this script.

import { writeFileSync, mkdirSync, existsSync, mkdtempSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'public', 'cv');

const CHROME_CANDIDATES = [
  process.env.CHROME_BIN,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

function findChrome() {
  for (const p of CHROME_CANDIDATES) if (existsSync(p)) return p;
  throw new Error('No Chrome/Chromium found. Set CHROME_BIN to a Chromium binary.');
}

// --- tiny inline-markdown renderer: escapes HTML, then **bold** and [text](url) ---
function inline(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

// ---------------------------------------------------------------- shared data
const shared = {
  name: 'Nikita Rykhlov',
  website: { label: 'rykhlov.tech', href: 'https://rykhlov.tech' },
  phone: { label: '+995 599-390-961', href: 'https://wa.me/995599390961' },
  email: 'nikita_rykhlov@outlook.com',
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikita-rykhlov/' },
  github: { label: 'GitHub', href: 'https://github.com/nikitaRykhlov' },
  timezone: 'UTC+04:00',
  roleLine: 'Tech Lead · Feature Lead · Senior Backend Developer',
};

// ---------------------------------------------------------------- English copy
const en = {
  ...shared,
  L: {
    about: 'About', topSkills: 'Top Skills', experience: 'Experience',
    achievements: 'Key Achievements', responsibilities: 'Responsibilities',
    contributions: 'Technical Contributions', learnings: 'Key Learnings',
    team: 'Team', education: 'Education', certs: 'Licences & Certificates',
    skills: 'Skills', awards: 'Honors & Awards', brand: 'Personal Brand', stack: 'Stack',
  },
  about: [
    'Over 5 years of experience in software development, focused on building robust and scalable solutions that drive value across various industries. My expertise lies in designing and maintaining high-load distributed systems, where performance, reliability and fault tolerance are essential under intense workloads. I emphasize architectures that are not only scalable and flexible but also easy to support and evolve over time.',
    'Throughout my career I’ve worked in large technology companies known for their rigorous standards, which helped me develop a strategic mindset and the ability to craft long-lasting, efficient solutions. In addition to back-end development, I have hands-on experience in front-end technologies, allowing me to approach projects from a full-stack perspective.',
    'I enjoy sharing knowledge and best practices, which is why I actively maintain and develop a technical blog. When entrusted with a task, I take full ownership and ensure timely delivery with high efficiency and quality, regardless of the project’s scope or audience.',
  ],
  topSkills: ['Golang', 'PostgreSQL', 'Kafka', 'Redis', 'S3', 'Kubernetes', 'ElasticSearch', 'Software Architecture', 'Scalability', 'Microservices', 'High Availability', 'Distributed Systems'],
  experience: [
    {
      company: 'Tabby', href: 'https://www.linkedin.com/company/tabbypay/', unit: 'Search & Recommendations',
      role: 'Tech Lead / Feature Lead, Senior Backend Developer', period: 'Jul 2025 — Present',
      location: 'Abu Dhabi, UAE — Remote', team: '7 people',
      achievements: [
        'Increased advertising coverage across product screens from **24.3% to 88.1%** by building a universal blender that merges items/merchants from multiple sources (monetization, organic) into a single ranked feed.',
        'Accelerated update delivery to users from **13–16 hours to 2 hours** (an **~87% reduction**) by decoupling pipeline stages and building a dedicated orchestrator.',
        'Raised successful delivery-process runs from **73.12% to 95.6%** by adding dynamic validation rules and dry-run validation to the process.',
        'Cut incident detection time from **30–60 minutes to 1–15 minutes** with a purpose-built process- and system-state monitoring tool.',
        'Reduced new ML-experiment setup time by **~71%** by enabling dynamic loading of embeddings and CTR-model versions from GCS without code releases.',
        'Lowered embedding update cost by **~63%** through incremental user-embedding refresh, replacing full reindexing.',
        'Enabled product launch in a new country by migrating the ElasticSearch cluster to geo-sharding: per-shard country-based filtering cut average search latency by **~38%** and documents scanned per query by **~55%**, while maintaining **99.95%** cluster availability throughout the migration.',
      ],
      responsibilities: [
        'Acted as Feature/Tech Lead across multiple initiatives: owned solution architecture, feature delivery control and hands-on development end to end.',
        'Designed and built the search and recommendation engines, including merchant suggest improvements and result limiting.',
        'Led the ElasticSearch cluster migration for a new-country market entry: requirements gathering, country-specific data filtering, functional and load testing, HA/failover validation and recovery-scenario documentation.',
        'Worked in tight coordination with the ML team on artifacts and data stored in GCS.',
        'Handled on-call rotations, authored incident documentation and postmortems in English, and mentored colleagues (including writing performance reviews).',
      ],
      contributions: [
        'Built a universal source blender with template-based source mixing, cross-window deduplication and caching for faster responses.',
        'Implemented dynamic, contract-based loading of embeddings for products, users and merchants, plus incremental user-embedding updates.',
        'Added loading and indexing of multiple CTR-model versions from GCS, enabling side-by-side comparison and switching within experiments without redeploys.',
        'Delivered a centralized configuration system tunable per A/B experiment group for rapid hypothesis testing.',
        'Rebuilt the category tree as a facet-based structure with counters and facet logic.',
        'Diagnosed an ElasticSearch performance bottleneck in JSON deserialization within the ES client and evaluated a custom marshaller.',
        'Developed a delivery orchestrator and a state-tracking tool for observability.',
        'Adopted AI-assisted development tooling (Cursor, Claude Code, GitHub Spec Kit, OpenCode, MCP) to speed up prototyping, spec-driven workflows and delivery.',
      ],
      learnings: [
        'Deepened expertise in large-scale search, ranking and recommendation systems on ElasticSearch.',
        'Strengthened collaboration patterns between backend and ML teams around shared GCS artifacts.',
        'Learned to design for experimentation, decoupling configuration and ML artifacts from release cycles.',
        'Reinforced the value of observability and validation in reducing operational risk.',
      ],
      stack: 'Microservices, Golang, ElasticSearch, PostgreSQL, GCP, GCS, Pub/Sub, Redis, Kubernetes, Scalability, Software Architecture, gRPC, DDD, High Availability, Distributed Systems, TDD, GitLab, Jira',
    },
    {
      company: 'Kuper', href: 'https://www.linkedin.com/company/kuper-ru/', unit: 'B2B · Growth & Engagement',
      role: 'Senior Backend Developer', period: 'Dec 2023 — Jun 2025',
      location: 'Abu Dhabi, UAE — Remote', team: '5 people',
      achievements: [
        'Reduced deployment times by **34.5%** by extracting B2B logic into microservices using Golang, PostgreSQL and Kafka.',
        'Increased B2B sales volume by **427%** within six months by launching a scalable wholesale orders platform with Redis and S3.',
        'Improved client retention by **21.8%** through a loyalty program with tiered rewards and personalized offers.',
        'Decreased bug rates by **20.4%** by decoupling B2C/B2B workflows, enhancing system modularity.',
        'Maintained **99.9% uptime** via Kubernetes orchestration and proactive monitoring.',
      ],
      responsibilities: [
        'Extracted B2B logic from the monolith into microservices, applying Domain-Driven Design (DDD) principles for scalability.',
        'Designed and built a wholesale orders platform, integrating Redis for caching and S3 for storage.',
        'Developed a loyalty program with gRPC for inter-service communication and high availability.',
        'Led efforts to separate B2C/B2B scenarios, streamlining business processes.',
        'Conducted technical interviews, onboarded 5 specialists and ensured SLAs through on-call support.',
      ],
      contributions: [
        'Implemented event-driven architectures using Kafka for real-time communication.',
        'Utilized Kubernetes for container orchestration and fault tolerance.',
        'Applied Test-Driven Development (TDD) practices to ensure code quality.',
        'Managed CI/CD pipelines with GitLab and tracked tasks in Jira.',
      ],
      learnings: [
        'Mastered distributed systems and DDD principles for complex domains.',
        'Enhanced communication skills to align technical solutions with business needs.',
        'Balanced short-term goals with long-term architectural improvements.',
        'Refined hiring practices to build cohesive, high-performing teams.',
      ],
      stack: 'Microservices, PostgreSQL, Kubernetes, S3, Redis, Kafka, Scalability, Software Architecture, gRPC, DDD, Golang, High Availability, Distributed Systems, TDD, GitLab, Jira',
    },
    {
      company: 'ELMA365', href: 'https://www.linkedin.com/company/elmabpm/', unit: 'Document Management',
      role: 'Senior Full Stack Developer', period: 'Nov 2022 — Dec 2023',
      location: 'Tbilisi, Georgia — Remote', team: '6 people',
      achievements: [
        'Reduced document generation time by **25.5%**, improving operational efficiency.',
        'Achieved **97% test coverage**, reducing runtime errors and enhancing stability.',
        'Enabled seamless scalability to handle growing workloads with high availability.',
        'Delivered an intuitive Angular-based UI, praised for responsiveness and usability.',
        'Automated document management processes, addressing critical business needs.',
      ],
      responsibilities: [
        'Designed and built a document templating platform using Golang, Angular and microservices architecture.',
        'Optimized workflows by identifying bottlenecks and implementing performance improvements.',
        'Ensured code quality through TDD, covering unit, integration and end-to-end tests.',
        'Developed a user-friendly UI/UX with smooth backend integration for optimal interactions.',
        'Mentored junior developers, conducted code reviews and promoted best practices.',
      ],
      contributions: [
        'Implemented Kubernetes for container orchestration, ensuring fault tolerance and scalability.',
        'Integrated Redis for caching and S3 for storage, boosting system performance.',
        'Applied TDD principles to minimize technical debt and ensure maintainability.',
        'Used GitLab for CI/CD pipelines, streamlining development and deployment.',
      ],
      learnings: [
        'Mastered scalable microservices design using Golang, Kubernetes and distributed systems.',
        'Improved full-stack development skills to create cohesive, user-focused solutions.',
        'Recognized the value of TDD in maintaining code quality and reducing errors.',
        'Gained expertise in workflow optimization and leveraging caching mechanisms like Redis.',
      ],
      stack: 'Golang, Kubernetes, Angular, Distributed Systems, High Availability, Scalability, Microservices, S3, Redis, TDD, GitLab',
    },
    {
      company: 'Rainbowsoft', href: 'https://www.linkedin.com/company/%D0%BD%D0%BF%D0%BE-rbs-rainbowsoft-/', unit: 'Research & Development',
      role: 'Middle Full Stack Developer', period: 'Oct 2020 — Nov 2022',
      location: 'Tbilisi, Georgia — Remote', team: '8 people',
      achievements: [
        'Developed an SDK for microcomponent management, enabling seamless integration into robotics projects.',
        'Built a remote control system using Golang, WebSockets and React.js, improving device management efficiency.',
        'Simplified deployment with Docker, reducing maintenance complexity.',
        'Contributed to the [SPECTR Traffic Rules](https://spectr-pdd.ru/) system, enhancing its usability for teaching traffic rules.',
        'Optimized [RepkaPi](https://repka-pi.ru/) setup by testing OS options and selecting optimal software.',
      ],
      responsibilities: [
        'Designed and implemented an SDK for microcomponents using Golang and gRPC.',
        'Developed the server-side RC system with Golang, WebSockets and Docker for scalability.',
        'Built the client-side RC interface with React.js, ensuring intuitive user interactions.',
        'Tested operating systems and configured software for the RepkaPi single-board computer.',
        'Contributed to the SPECTR Traffic Rules system, handling database design and logic with PHP and MySQL.',
      ],
      contributions: [
        'Integrated gRPC for efficient communication between components.',
        'Used Docker to streamline deployment and scaling processes.',
        'Applied WebSockets for real-time device control in the RC system.',
        'Utilized Jenkins for CI/CD pipelines, ensuring smooth workflows.',
        'Modeled architecture with UML and BPMN for clarity and alignment.',
      ],
      learnings: [
        'Mastered microcomponent integration and hardware-software interaction.',
        'Gained expertise in Docker for simplifying deployment and scaling.',
        'Learned gRPC, WebSockets and cgo for high-performance solutions.',
        'Improved full-stack skills, combining Golang, PHP and React.js effectively.',
      ],
      stack: 'Golang, gRPC, Jenkins, MySQL, UML, BPMN, WebSockets, React.js, Docker, PHP, Full Stack Development, Web Technologies',
    },
  ],
  education: {
    degree: 'Computer and Information Systems Security / Information Assurance',
    school: 'Saratov State Technical University', location: 'Saratov, Russia', period: 'Sep 2016 — Jan 2020',
  },
  certs: [
    { title: 'SQL and PostgreSQL: The Complete Developer’s Guide', href: 'https://ude.my/UC-891c03c5-be4a-4d5e-931b-3a34e0c26bd5/', issuer: 'Udemy', date: 'Mar 2024', tags: 'SQL, PostgreSQL, Database Design, Software Development' },
    { title: 'Redis: The Complete Developer’s Guide', href: 'https://ude.my/UC-54fb98de-5a87-494b-a812-814f59e286a5/', issuer: 'Udemy', date: 'Jan 2024', tags: 'Redis, Database Design' },
    { title: 'Go — The Complete Guide', href: 'https://ude.my/UC-cd6c145e-d53b-4fcc-a8b6-0339bd6cccf8/', issuer: 'Udemy', date: 'May 2023', tags: 'Golang, Software Development, Programming Languages' },
  ],
  skills: [
    { label: 'Languages', items: 'English (Limited working proficiency), Russian (native)' },
    { label: 'Programming Languages', items: 'Golang, JavaScript, TypeScript, PHP' },
    { label: 'Frontend Development', items: 'HTML, CSS, React, Angular' },
    { label: 'Storages', items: 'PostgreSQL, ElasticSearch, MySQL, Redis, S3' },
    { label: 'Version Control', items: 'Git, GitLab' },
    { label: 'Containerization & Orchestration', items: 'Docker, Kubernetes, Helm' },
    { label: 'Messaging Systems', items: 'Kafka, WebSockets' },
    { label: 'Design Methodologies & Principles', items: 'Domain-Driven Design (DDD), Microservices, Scalability, High Availability, Distributed Systems' },
    { label: 'Development Practices', items: 'Test-Driven Development (TDD)' },
    { label: 'AI-Assisted Development', items: 'Cursor, Claude Code, GitHub Spec Kit, Claude Design, OpenCode, Model Context Protocol (MCP), Claude Skills' },
    { label: 'CI/CD Tools', items: 'GitLab CI/CD, Jenkins' },
    { label: 'Project Management', items: 'Jira' },
    { label: 'Modeling & Documentation', items: 'UML, BPMN, C4' },
    { label: 'Cloud & Other', items: 'Google Cloud Platform, Figma' },
  ],
  awards: [
    { title: 'Sales Growth Excellence Award', date: 'Sep 2024', org: 'Kuper', text: 'Achieved a 427% increase in B2B sales volume within six months by launching a scalable wholesale orders platform powered by Redis and S3.' },
    { title: 'Code Quality Champion Award', date: 'Oct 2023', org: 'ELMA365', text: 'Achieved 97% test coverage through rigorous Test-Driven Development (TDD), minimizing runtime errors and enhancing system stability.' },
    { title: 'Operational Efficiency Excellence Award', date: 'Sep 2023', org: 'ELMA365', text: 'Reduced document generation time by 25.5%, significantly improving operational efficiency through backend optimization with Golang and microservices.' },
  ],
  brand: {
    text: 'I actively maintain a technical blog where I document insights, explore new technologies and contribute to the developer community.',
    links: [
      { label: 'Website', href: 'https://rykhlov.tech/' },
      { label: 'dev.to', href: 'https://dev.to/nikita_rykhlov' },
      { label: 'Medium', href: 'https://medium.com/@nikita_rykhlov' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikita-rykhlov/' },
      { label: 'Telegram', href: 'https://t.me/nikitaRykhlovBlog' },
      { label: 'X', href: 'https://x.com/NikitaRykhlov' },
    ],
  },
};

// ---------------------------------------------------------------- Russian copy
const ru = {
  ...shared,
  roleLine: 'Tech Lead · Feature Lead · Senior Backend Developer',
  L: {
    about: 'О себе', topSkills: 'Ключевые навыки', experience: 'Опыт работы',
    achievements: 'Ключевые достижения', responsibilities: 'Обязанности',
    contributions: 'Технический вклад', learnings: 'Ключевые выводы',
    team: 'Команда', education: 'Образование', certs: 'Лицензии и сертификаты',
    skills: 'Навыки', awards: 'Награды и достижения', brand: 'Личный бренд', stack: 'Стек',
  },
  about: [
    'Более 5 лет опыта в разработке ПО с фокусом на создании надёжных и масштабируемых решений, приносящих ценность в самых разных индустриях. Моя экспертиза — проектирование и поддержка высоконагруженных распределённых систем, где под интенсивными нагрузками критичны производительность, надёжность и отказоустойчивость. Делаю акцент на архитектурах, которые масштабируемы и гибки, но при этом легко поддерживаются и развиваются.',
    'На протяжении карьеры я работал в крупных технологических компаниях с высокими стандартами, что помогло развить стратегическое мышление и способность создавать долговечные, эффективные решения. Помимо backend-разработки, у меня есть практический опыт во frontend, что позволяет подходить к проектам с full-stack перспективы.',
    'Мне нравится делиться знаниями и лучшими практиками, поэтому я активно веду технический блог. Когда мне поручают задачу, я беру на себя полную ответственность и обеспечиваю своевременную доставку с высокой эффективностью и качеством, независимо от масштаба проекта.',
  ],
  topSkills: ['Golang', 'PostgreSQL', 'Kafka', 'Redis', 'S3', 'Kubernetes', 'ElasticSearch', 'Software Architecture', 'Scalability', 'Microservices', 'High Availability', 'Distributed Systems'],
  experience: [
    {
      company: 'Tabby', href: 'https://www.linkedin.com/company/tabbypay/', unit: 'Поиск и рекомендации',
      role: 'Tech Lead / Feature Lead, Senior Backend Developer', period: 'Июл 2025 — наст. время',
      location: 'Абу-Даби, ОАЭ — Удалённо', team: '7 человек',
      achievements: [
        'Повысил покрытие рекламой по экранам продукта с **24.3% до 88.1%**, разработав универсальный блендер, объединяющий товары/мерчантов из нескольких источников (монетизация, органика) в единую ранжированную выдачу.',
        'Ускорил доставку обновлений до пользователя с **13–16 часов до 2 часов** (сокращение на **~87%**) за счёт decoupling этапов процесса и отдельного оркестратора.',
        'Увеличил долю успешных запусков процесса доставки с **73.12% до 95.6%**, добавив динамические правила валидации и dry-run валидацию.',
        'Сократил время обнаружения инцидентов с **30–60 минут до 1–15 минут** с помощью специального инструмента отслеживания состояния процесса и системы.',
        'Сократил время подготовки нового ML-эксперимента на **~71%**, реализовав динамическую загрузку эмбеддингов и версий CTR-моделей из GCS без релизов кода.',
        'Снизил стоимость обновления эмбеддингов на **~63%** за счёт инкрементального обновления пользовательских эмбеддингов вместо полного реиндекса.',
        'Обеспечил запуск продукта в новой стране, проведя миграцию кластера ElasticSearch на geo-sharding: пошардовая фильтрация по странам снизила среднюю latency поиска на **~38%** и объём сканируемых документов на запрос на **~55%**, сохранив **99.95%** доступности кластера в ходе миграции.',
      ],
      responsibilities: [
        'Выступал в роли Feature/Tech Lead в нескольких инициативах: отвечал за архитектуру решения, контроль доставки фичи и непосредственную разработку от начала до конца.',
        'Проектировал и разрабатывал движки поиска и рекомендаций, включая улучшение саджестов мерчантов и лимитирование результатов.',
        'Руководил миграцией кластера ElasticSearch в рамках выхода на рынок новой страны: сбор требований, фильтрация данных по странам, функциональное и нагрузочное тестирование, проверка HA/отказоустойчивости и описание сценариев восстановления.',
        'Работал в плотной координации с командой ML над артефактами и данными в GCS.',
        'Участвовал в on-call дежурствах, писал incident-документацию и постмортемы на английском, менторил коллег (в том числе писал перформанс-ревью).',
      ],
      contributions: [
        'Разработал универсальный блендер источников с шаблонным подмешиванием, cross-window дедубликацией и кэшированием для быстрого ответа.',
        'Реализовал динамическую загрузку эмбеддингов по контракту для товаров, пользователей и мерчантов, а также инкрементальное обновление пользовательских эмбеддингов.',
        'Добавил загрузку и индексацию нескольких версий CTR-моделей из GCS, что позволило сравнивать и переключать их в экспериментах без релизов.',
        'Сделал централизованную систему конфигураций, настраиваемую per A/B-группу эксперимента, для быстрой проверки гипотез.',
        'Перестроил категорийное дерево в структуру на базе фасетов с каунтерами и facet logic.',
        'Диагностировал боттлнек производительности ElasticSearch на десериализации JSON в ES-клиенте и оценил вариант с кастомным маршаллером.',
        'Разработал оркестратор доставки и инструмент отслеживания состояния для наблюдаемости.',
        'Внедрил инструменты AI-разработки (Cursor, Claude Code, GitHub Spec Kit, OpenCode, MCP) для ускорения прототипирования, spec-driven процессов и доставки.',
      ],
      learnings: [
        'Углубил экспертизу в крупномасштабных системах поиска, ранжирования и рекомендаций на ElasticSearch.',
        'Усилил паттерны взаимодействия между backend- и ML-командами вокруг общих артефактов в GCS.',
        'Научился проектировать под эксперименты, отделяя конфигурацию и ML-артефакты от релизного цикла.',
        'Закрепил ценность наблюдаемости и валидации для снижения операционных рисков.',
      ],
      stack: 'Microservices, Golang, ElasticSearch, PostgreSQL, GCP, GCS, Pub/Sub, Redis, Kubernetes, Scalability, Software Architecture, gRPC, DDD, High Availability, Distributed Systems, TDD, GitLab, Jira',
    },
    {
      company: 'Kuper', href: 'https://www.linkedin.com/company/kuper-ru/', unit: 'B2B · Рост и вовлечение',
      role: 'Senior Backend Developer', period: 'Дек 2023 — Июн 2025',
      location: 'Абу-Даби, ОАЭ — Удалённо', team: '5 человек',
      achievements: [
        'Сократил время деплоя на **34.5%**, выделив B2B-логику в микросервисы на Golang, PostgreSQL и Kafka.',
        'Увеличил объём B2B-продаж на **427%** за шесть месяцев, запустив масштабируемую платформу оптовых заказов на Redis и S3.',
        'Повысил удержание клиентов на **21.8%** за счёт программы лояльности с многоуровневыми наградами и персонализированными предложениями.',
        'Снизил уровень багов на **20.4%**, разделив B2C/B2B-сценарии и повысив модульность системы.',
        'Поддерживал **99.9% аптайма** за счёт оркестрации Kubernetes и проактивного мониторинга.',
      ],
      responsibilities: [
        'Выделял B2B-логику из монолита в микросервисы, применяя принципы Domain-Driven Design (DDD) для масштабируемости.',
        'Спроектировал и построил платформу оптовых заказов, интегрировав Redis для кэширования и S3 для хранения.',
        'Разработал программу лояльности с gRPC для межсервисного взаимодействия и высокой доступности.',
        'Руководил разделением B2C/B2B-сценариев, оптимизируя бизнес-процессы.',
        'Проводил технические интервью, онбордил 5 специалистов и обеспечивал SLA через on-call поддержку.',
      ],
      contributions: [
        'Реализовал event-driven архитектуры с использованием Kafka для коммуникации в реальном времени.',
        'Использовал Kubernetes для оркестрации контейнеров и отказоустойчивости.',
        'Применял практики Test-Driven Development (TDD) для обеспечения качества кода.',
        'Управлял CI/CD пайплайнами в GitLab и вёл задачи в Jira.',
      ],
      learnings: [
        'Освоил распределённые системы и принципы DDD для сложных доменов.',
        'Развил навыки коммуникации для согласования технических решений с потребностями бизнеса.',
        'Балансировал между краткосрочными целями и долгосрочными архитектурными улучшениями.',
        'Отточил практики найма для построения сплочённых, высокопроизводительных команд.',
      ],
      stack: 'Microservices, PostgreSQL, Kubernetes, S3, Redis, Kafka, Scalability, Software Architecture, gRPC, DDD, Golang, High Availability, Distributed Systems, TDD, GitLab, Jira',
    },
    {
      company: 'ELMA365', href: 'https://www.linkedin.com/company/elmabpm/', unit: 'Документооборот',
      role: 'Senior Full Stack Developer', period: 'Ноя 2022 — Дек 2023',
      location: 'Тбилиси, Грузия — Удалённо', team: '6 человек',
      achievements: [
        'Сократил время генерации документов на **25.5%**, повысив операционную эффективность.',
        'Достиг **97% покрытия тестами**, снизив количество runtime-ошибок и повысив стабильность.',
        'Обеспечил бесшовную масштабируемость для обработки растущих нагрузок с высокой доступностью.',
        'Реализовал интуитивный UI на Angular, отмеченный за отзывчивость и удобство.',
        'Автоматизировал процессы управления документами, закрыв критичные бизнес-потребности.',
      ],
      responsibilities: [
        'Спроектировал и построил платформу шаблонизации документов на Golang, Angular и микросервисной архитектуре.',
        'Оптимизировал рабочие процессы, выявляя боттлнеки и внедряя улучшения производительности.',
        'Обеспечивал качество кода через TDD, покрывая unit-, интеграционные и end-to-end тесты.',
        'Разрабатывал удобный UI/UX с плавной интеграцией с backend.',
        'Менторил младших разработчиков, проводил код-ревью и продвигал лучшие практики.',
      ],
      contributions: [
        'Внедрил Kubernetes для оркестрации контейнеров, обеспечивая отказоустойчивость и масштабируемость.',
        'Интегрировал Redis для кэширования и S3 для хранения, повысив производительность системы.',
        'Применял принципы TDD для минимизации технического долга и поддержания сопровождаемости.',
        'Использовал GitLab для CI/CD пайплайнов, упрощая разработку и развёртывание.',
      ],
      learnings: [
        'Освоил проектирование масштабируемых микросервисов на Golang, Kubernetes и распределённых системах.',
        'Улучшил навыки full-stack разработки для создания цельных, ориентированных на пользователя решений.',
        'Осознал ценность TDD в поддержании качества кода и снижении количества ошибок.',
        'Получил экспертизу в оптимизации рабочих процессов и кэшировании вроде Redis.',
      ],
      stack: 'Golang, Kubernetes, Angular, Distributed Systems, High Availability, Scalability, Microservices, S3, Redis, TDD, GitLab',
    },
    {
      company: 'Rainbowsoft', href: 'https://www.linkedin.com/company/%D0%BD%D0%BF%D0%BE-rbs-rainbowsoft-/', unit: 'Research & Development',
      role: 'Middle Full Stack Developer', period: 'Окт 2020 — Ноя 2022',
      location: 'Тбилиси, Грузия — Удалённо', team: '8 человек',
      achievements: [
        'Разработал SDK для управления микрокомпонентами, обеспечив бесшовную интеграцию в проекты робототехники.',
        'Построил систему удалённого управления на Golang, WebSockets и React.js, повысив эффективность управления устройствами.',
        'Упростил развёртывание с помощью Docker, снизив сложность сопровождения.',
        'Внёс вклад в систему [SPECTR ПДД](https://spectr-pdd.ru/), улучшив её удобство для обучения правилам дорожного движения.',
        'Оптимизировал настройку [RepkaPi](https://repka-pi.ru/), протестировав варианты ОС и подобрав оптимальное ПО.',
      ],
      responsibilities: [
        'Спроектировал и реализовал SDK для микрокомпонентов на Golang и gRPC.',
        'Разработал серверную часть RC-системы на Golang, WebSockets и Docker для масштабируемости.',
        'Построил клиентский интерфейс RC-системы на React.js, обеспечив интуитивное взаимодействие.',
        'Тестировал операционные системы и настраивал ПО для одноплатного компьютера RepkaPi.',
        'Внёс вклад в систему SPECTR ПДД, занимаясь проектированием БД и логикой на PHP и MySQL.',
      ],
      contributions: [
        'Интегрировал gRPC для эффективного взаимодействия между компонентами.',
        'Использовал Docker для упрощения процессов развёртывания и масштабирования.',
        'Применял WebSockets для управления устройствами в реальном времени в RC-системе.',
        'Использовал Jenkins для CI/CD пайплайнов, обеспечивая бесперебойные процессы.',
        'Моделировал архитектуру с помощью UML и BPMN для ясности и согласованности.',
      ],
      learnings: [
        'Освоил интеграцию микрокомпонентов и взаимодействие аппаратной и программной частей.',
        'Получил экспертизу в Docker для упрощения развёртывания и масштабирования.',
        'Изучил gRPC, WebSockets и cgo для высокопроизводительных решений.',
        'Улучшил full-stack навыки, эффективно сочетая Golang, PHP и React.js.',
      ],
      stack: 'Golang, gRPC, Jenkins, MySQL, UML, BPMN, WebSockets, React.js, Docker, PHP, Full Stack Development, Web Technologies',
    },
  ],
  education: {
    degree: 'Безопасность компьютерных и информационных систем / защита информации',
    school: 'Саратовский государственный технический университет', location: 'Саратов, Россия', period: 'Сен 2016 — Янв 2020',
  },
  certs: [
    { title: 'SQL and PostgreSQL: The Complete Developer’s Guide', href: 'https://ude.my/UC-891c03c5-be4a-4d5e-931b-3a34e0c26bd5/', issuer: 'Udemy', date: 'Март 2024', tags: 'SQL, PostgreSQL, Database Design, Software Development' },
    { title: 'Redis: The Complete Developer’s Guide', href: 'https://ude.my/UC-54fb98de-5a87-494b-a812-814f59e286a5/', issuer: 'Udemy', date: 'Янв 2024', tags: 'Redis, Database Design' },
    { title: 'Go — The Complete Guide', href: 'https://ude.my/UC-cd6c145e-d53b-4fcc-a8b6-0339bd6cccf8/', issuer: 'Udemy', date: 'Май 2023', tags: 'Golang, Software Development, Programming Languages' },
  ],
  skills: [
    { label: 'Языки', items: 'Английский (Limited working proficiency), Русский (родной)' },
    { label: 'Языки программирования', items: 'Golang, JavaScript, TypeScript, PHP' },
    { label: 'Frontend-разработка', items: 'HTML, CSS, React, Angular' },
    { label: 'Хранилища', items: 'PostgreSQL, ElasticSearch, MySQL, Redis, S3' },
    { label: 'Контроль версий', items: 'Git, GitLab' },
    { label: 'Контейнеризация и оркестрация', items: 'Docker, Kubernetes, Helm' },
    { label: 'Системы обмена сообщениями', items: 'Kafka, WebSockets' },
    { label: 'Методологии и принципы проектирования', items: 'Domain-Driven Design (DDD), Microservices, Scalability, High Availability, Distributed Systems' },
    { label: 'Практики разработки', items: 'Test-Driven Development (TDD)' },
    { label: 'AI-разработка', items: 'Cursor, Claude Code, GitHub Spec Kit, Claude Design, OpenCode, Model Context Protocol (MCP), Claude Skills' },
    { label: 'CI/CD инструменты', items: 'GitLab CI/CD, Jenkins' },
    { label: 'Управление проектами', items: 'Jira' },
    { label: 'Моделирование и документация', items: 'UML, BPMN, C4' },
    { label: 'Облако и прочее', items: 'Google Cloud Platform, Figma' },
  ],
  awards: [
    { title: 'Sales Growth Excellence Award', date: 'Сен 2024', org: 'Kuper', text: 'Рост объёма B2B-продаж на 427% за шесть месяцев благодаря масштабируемой платформе оптовых заказов на Redis и S3.' },
    { title: 'Code Quality Champion Award', date: 'Окт 2023', org: 'ELMA365', text: 'Достиг 97% покрытия тестами благодаря строгому Test-Driven Development (TDD), минимизировав runtime-ошибки и повысив стабильность системы.' },
    { title: 'Operational Efficiency Excellence Award', date: 'Сен 2023', org: 'ELMA365', text: 'Сократил время генерации документов на 25.5%, значительно повысив операционную эффективность за счёт оптимизации backend на Golang и микросервисах.' },
  ],
  brand: {
    text: 'Активно веду технический блог: фиксирую инсайты, исследую новые технологии и помогаю сообществу разработчиков.',
    links: [
      { label: 'Website', href: 'https://rykhlov.tech/' },
      { label: 'dev.to', href: 'https://dev.to/nikita_rykhlov' },
      { label: 'Medium', href: 'https://medium.com/@nikita_rykhlov' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikita-rykhlov/' },
      { label: 'Telegram', href: 'https://t.me/nikitaRykhlovBlog' },
      { label: 'X', href: 'https://x.com/NikitaRykhlov' },
    ],
  },
};

// --------------------------------------------------------------------- styles
const css = `
  *{box-sizing:border-box;margin:0;padding:0}
  @page{size:A4;margin:13mm 14mm 14mm}
  html{-webkit-print-color-adjust:exact;print-color-adjust:exact}
  body{font-family:"Helvetica Neue",Arial,"Segoe UI",Roboto,sans-serif;color:#1E293B;
    font-size:10pt;line-height:1.42;font-feature-settings:"kern" 1}
  a{color:#0F766E;text-decoration:none}
  strong{color:#0F172A;font-weight:700}
  .header{border-bottom:2px solid #0D9488;padding-bottom:10px;margin-bottom:14px}
  .name{font-size:23pt;font-weight:800;letter-spacing:-.4px;color:#0F172A;line-height:1.05}
  .role{font-size:11pt;font-weight:600;color:#0D9488;margin-top:3px}
  .contacts{margin-top:8px;font-size:8.6pt;color:#475569;display:flex;flex-wrap:wrap;gap:4px 0}
  .contacts span{white-space:nowrap}
  .contacts .sep{margin:0 8px;color:#CBD5E1}
  section{margin-top:13px}
  h2{font-size:9.2pt;font-weight:800;text-transform:uppercase;letter-spacing:1.4px;color:#0D9488;
    border-bottom:1px solid #E2E8F0;padding-bottom:3px;margin-bottom:7px;break-after:avoid}
  p{margin-bottom:5px;text-align:justify}
  .about p:last-child{margin-bottom:0}
  .chips{display:flex;flex-wrap:wrap;gap:5px}
  .chip{font-size:8.3pt;background:#F0FDFA;color:#0F766E;border:1px solid #99F6E4;
    border-radius:999px;padding:2px 8px;white-space:nowrap}
  .job{margin-bottom:11px;break-inside:avoid}
  .job + .job{padding-top:10px;border-top:1px solid #F1F5F9}
  .job__top{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
  .job__co{font-size:11.5pt;font-weight:800;color:#0F172A}
  .job__unit{font-weight:600;color:#0D9488;font-size:9.5pt}
  .job__period{font-size:8.8pt;color:#475569;white-space:nowrap;font-weight:600}
  .job__role{font-size:9.7pt;font-weight:600;color:#334155;margin-top:1px}
  .job__meta{font-size:8.6pt;color:#64748B;margin-top:1px}
  .block{margin-top:6px;break-inside:avoid}
  .block__label{font-size:8.4pt;font-weight:700;text-transform:uppercase;letter-spacing:.6px;
    color:#475569;margin-bottom:3px}
  ul{list-style:none}
  li{position:relative;padding-left:11px;margin-bottom:2.5px;text-align:justify}
  li::before{content:"";position:absolute;left:1px;top:6px;width:3px;height:3px;border-radius:50%;background:#14B8A6}
  .stack{margin-top:6px;font-size:8.6pt;color:#64748B;font-style:italic;line-height:1.4}
  .edu__row,.cert,.award{break-inside:avoid;margin-bottom:8px}
  .row__top{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
  .row__title{font-weight:700;color:#0F172A;font-size:10pt}
  .row__date{font-size:8.8pt;color:#475569;white-space:nowrap;font-weight:600}
  .row__sub{font-size:9pt;color:#475569;margin-top:1px}
  .row__text{font-size:9pt;margin-top:3px}
  .row__tags{font-size:8.3pt;color:#64748B;font-style:italic;margin-top:2px}
  .skills__grid{display:grid;grid-template-columns:1fr 1fr;gap:3px 22px}
  .skill__row{font-size:9pt;break-inside:avoid;margin-bottom:1px}
  .skill__row b{color:#334155}
  .brand__links{font-size:9pt;margin-top:3px}
`;

// --------------------------------------------------------------------- render
function list(label, items) {
  if (!items || !items.length) return '';
  return `<div class="block"><div class="block__label">${label}</div><ul>${
    items.map((i) => `<li>${inline(i)}</li>`).join('')}</ul></div>`;
}

function render(d) {
  const head = `
    <div class="header">
      <div class="name">${inline(d.name)}</div>
      <div class="role">${inline(d.roleLine)}</div>
      <div class="contacts">
        <span><a href="${d.website.href}">${d.website.label}</a></span><span class="sep">·</span>
        <span><a href="${d.phone.href}">${d.phone.label}</a></span><span class="sep">·</span>
        <span><a href="mailto:${d.email}">${d.email}</a></span><span class="sep">·</span>
        <span><a href="${d.linkedin.href}">${d.linkedin.label}</a></span><span class="sep">·</span>
        <span><a href="${d.github.href}">${d.github.label}</a></span><span class="sep">·</span>
        <span>${d.timezone}</span>
      </div>
    </div>`;

  const about = `<section class="about"><h2>${d.L.about}</h2>${
    d.about.map((p) => `<p>${inline(p)}</p>`).join('')}</section>`;

  const top = `<section><h2>${d.L.topSkills}</h2><div class="chips">${
    d.topSkills.map((s) => `<span class="chip">${inline(s)}</span>`).join('')}</div></section>`;

  const exp = `<section><h2>${d.L.experience}</h2>${d.experience.map((j) => `
    <div class="job">
      <div class="job__top">
        <div><span class="job__co"><a href="${j.href}">${inline(j.company)}</a></span> <span class="job__unit">— ${inline(j.unit)}</span></div>
        <div class="job__period">${inline(j.period)}</div>
      </div>
      <div class="job__role">${inline(j.role)}</div>
      <div class="job__meta">${inline(j.location)} · ${d.L.team}: ${inline(j.team)}</div>
      ${list(d.L.achievements, j.achievements)}
      ${list(d.L.responsibilities, j.responsibilities)}
      ${list(d.L.contributions, j.contributions)}
      ${list(d.L.learnings, j.learnings)}
      <div class="stack"><b>${d.L.stack}:</b> ${inline(j.stack)}</div>
    </div>`).join('')}</section>`;

  const edu = `<section><h2>${d.L.education}</h2>
    <div class="edu__row">
      <div class="row__top"><span class="row__title">${inline(d.education.degree)}</span>
        <span class="row__date">${inline(d.education.period)}</span></div>
      <div class="row__sub">${inline(d.education.school)} · ${inline(d.education.location)}</div>
    </div></section>`;

  const certs = `<section><h2>${d.L.certs}</h2>${d.certs.map((c) => `
    <div class="cert">
      <div class="row__top"><span class="row__title"><a href="${c.href}">${inline(c.title)}</a></span>
        <span class="row__date">${inline(c.date)}</span></div>
      <div class="row__sub">${inline(c.issuer)}</div>
      <div class="row__tags">${inline(c.tags)}</div>
    </div>`).join('')}</section>`;

  const skills = `<section><h2>${d.L.skills}</h2><div class="skills__grid">${
    d.skills.map((s) => `<div class="skill__row"><b>${inline(s.label)}:</b> ${inline(s.items)}</div>`).join('')}</div></section>`;

  const awards = `<section><h2>${d.L.awards}</h2>${d.awards.map((a) => `
    <div class="award">
      <div class="row__top"><span class="row__title">${inline(a.title)}</span>
        <span class="row__date">${inline(a.date)} · ${inline(a.org)}</span></div>
      <div class="row__text">${inline(a.text)}</div>
    </div>`).join('')}</section>`;

  const brand = `<section><h2>${d.L.brand}</h2><p>${inline(d.brand.text)}</p>
    <div class="brand__links">${d.brand.links.map((l) => `<a href="${l.href}">${inline(l.label)}</a>`).join(' · ')}</div></section>`;

  return `<!doctype html><html><head><meta charset="utf-8"><title>${inline(d.name)} — CV</title>
    <style>${css}</style></head><body>
    ${head}${about}${top}${exp}${edu}${certs}${skills}${awards}${brand}
    </body></html>`;
}

// ----------------------------------------------------------------------- main
const chrome = findChrome();
mkdirSync(outDir, { recursive: true });
const work = mkdtempSync(join(tmpdir(), 'cv-'));

const targets = [
  { data: en, html: 'cv-en.html', pdf: 'Nikita-Rykhlov-CV-EN.pdf' },
  { data: ru, html: 'cv-ru.html', pdf: 'Nikita-Rykhlov-CV-RU.pdf' },
];

for (const t of targets) {
  const htmlPath = join(work, t.html);
  const pdfPath = join(outDir, t.pdf);
  writeFileSync(htmlPath, render(t.data), 'utf8');
  execFileSync(chrome, [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--no-pdf-header-footer',
    `--print-to-pdf=${pdfPath}`, pathToFileURL(htmlPath).href,
  ], { stdio: 'ignore' });
  console.log(`✓ ${t.pdf}`);
}
console.log(`\nCV PDFs written to ${outDir}`);
