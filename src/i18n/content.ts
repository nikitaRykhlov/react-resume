// All résumé copy (EN + RU) and shared social links.
// Ported verbatim from the handoff design source (Nikita Rykhlov.dc.html).

export type IconId =
  | 'github' | 'linkedin' | 'telegram' | 'whatsapp' | 'facebook' | 'x'
  | 'devto' | 'medium' | 'mail' | 'copy' | 'check' | 'external'
  | 'sun' | 'moon' | 'arrow' | 'down' | 'clock' | 'download';

export interface Social {
  href: string;
  label: string;
  icon: IconId;
}

export interface Highlight {
  value: string;
  text: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  unit: string;
  team: string;
  highlights: Highlight[];
  details: string[];
  skills: string[];
}

export interface SkillCategory {
  name: string;
  desc: string;
  chips: string[];
}

export interface Award {
  metric: string;
  title: string;
  org: string;
  text: string;
}

export interface Cert {
  title: string;
  issuer: string;
  date: string;
  href: string;
}

export interface WritingLink {
  label: string;
  href: string;
  icon: IconId;
}

export interface Content {
  ui: {
    about: string; experience: string; skills: string; awards: string;
    education: string; certifications: string; writing: string; contact: string;
    responsibilities: string; team: string; email: string; phone: string; timezone: string;
    downloadCv: string;
  };
  nav: { about: string; experience: string; skills: string; awards: string; contact: string };
  hero: {
    status: string; role: string; first: string; last: string; tagline: string;
    years: string; yearsLabel: string; ctaPrimary: string; ctaSecondary: string;
    location: string; mainSkills: string[];
  };
  about: { title: string; paras: string[] };
  metrics: { value: string; label: string }[];
  experience: { items: ExperienceItem[] };
  skills: { title: string; items: SkillCategory[] };
  awards: { items: Award[] };
  education: { degree: string; school: string; period: string; skills: string[]; certs: Cert[] };
  writing: { title: string; text: string; links: WritingLink[] };
  contact: { title: string; subtitle: string; email: string; phone: string };
  footer: { left: string; backToTop: string };
}

export type Lang = 'en' | 'ru';

export const socials: Social[] = [
  { href: 'https://www.linkedin.com/in/nikita-rykhlov/', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://github.com/nikitaRykhlov', label: 'GitHub', icon: 'github' },
  { href: 'https://t.me/nikitaRykhlov', label: 'Telegram', icon: 'telegram' },
  { href: 'https://wa.me/995599390961', label: 'WhatsApp', icon: 'whatsapp' },
  { href: 'https://www.facebook.com/nikitaRykhlovDev/', label: 'Facebook', icon: 'facebook' },
  { href: 'https://x.com/NikitaRykhlov', label: 'X', icon: 'x' },
];

const tabbySkills = ['Golang', 'ElasticSearch', 'Microservices', 'PostgreSQL', 'GCP', 'GCS', 'Pub/Sub', 'Redis', 'Kubernetes', 'Software Architecture', 'gRPC', 'DDD', 'High Availability', 'Distributed Systems', 'TDD'];
const kuperSkills = ['Microservices', 'PostgreSQL', 'Kubernetes', 'S3', 'Redis', 'Kafka', 'Scalability', 'Software Architecture', 'gRPC', 'DDD', 'Golang', 'High Availability', 'Distributed Systems', 'TDD', 'GitLab'];
const elmaSkills = ['Golang', 'Kubernetes', 'Angular', 'Distributed Systems', 'High Availability', 'Scalability', 'Microservices', 'S3', 'Redis', 'TDD', 'GitLab'];
const rbsSkills = ['Golang', 'gRPC', 'Jenkins', 'MySQL', 'UML', 'BPMN', 'WebSockets', 'React.js', 'Docker', 'PHP', 'Full Stack'];
const eduSkills = ['Information Security', 'Network Security', 'Golang', 'Algorithms', 'Data Structures'];

const en: Content = {
  ui: { about: 'About', experience: 'Experience', skills: 'Skills', awards: 'Honors & Awards', education: 'Education', certifications: 'Certifications', writing: 'Writing', contact: 'Contact', responsibilities: 'Responsibilities', team: 'Team', email: 'Email', phone: 'Phone', timezone: 'Time zone', downloadCv: 'Download CV' },
  nav: { about: 'About', experience: 'Experience', skills: 'Skills', awards: 'Awards', contact: 'Contact' },
  hero: {
    status: 'Available for new projects', role: 'Tech Lead · Back End Developer', first: 'Nikita', last: 'Rykhlov',
    tagline: 'I design and maintain high-load distributed systems where performance, reliability and fault tolerance come first.',
    years: '5+', yearsLabel: 'years in software', ctaPrimary: 'Get in touch', ctaSecondary: 'See experience',
    location: 'Tbilisi · UTC+04:00', mainSkills: ['Software Architecture', 'Golang', 'Distributed Systems', 'ElasticSearch', 'PostgreSQL'],
  },
  about: {
    title: 'I build systems meant to last.',
    paras: [
      'Over five years of building robust, scalable solutions across different industries. My focus is high-load distributed systems where performance, reliability and fault tolerance are essential under intense workloads.',
      'I care about architectures that are scalable and flexible, but also easy to support and evolve over time. Years in large technology companies with rigorous standards gave me a strategic mindset and the habit of crafting long-lasting, efficient solutions.',
      'Alongside back-end work I have hands-on front-end experience, so I approach projects full-stack. When I take ownership of a task, I deliver on time, with high quality — whatever the scope.',
    ],
  },
  metrics: [
    { value: '5+', label: 'years of experience' },
    { value: '4', label: 'product companies' },
    { value: '99.95%', label: 'uptime maintained' },
    { value: '88.1%', label: 'ad coverage built' },
  ],
  experience: {
    items: [
      {
        company: 'Tabby', role: 'Tech Lead · Feature Lead · Senior Back End Developer', location: 'Abu Dhabi, UAE · Remote', period: 'Jul 2025 — Present', unit: 'Search & Recommendations', team: '7',
        highlights: [
          { value: '88.1%', text: 'ad coverage across product screens (from 24.3%) via a universal source blender for ranked feeds' },
          { value: '~87%', text: 'faster update delivery to users — from 13–16 hours down to 2 — by decoupling the pipeline and adding an orchestrator' },
          { value: '~38%', text: 'lower search latency by migrating the ElasticSearch cluster to geo-sharding for a new-country launch' },
          { value: '99.95%', text: 'ElasticSearch cluster availability maintained throughout the migration' },
        ],
        details: [
          'Acted as Feature/Tech Lead across initiatives — owned architecture, delivery and hands-on development end to end.',
          'Designed and built the search and recommendation engines, including merchant suggest and result limiting.',
          'Led the ElasticSearch geo-sharding migration for a new market, with HA/failover validation and recovery docs.',
          'Built a per-A/B-group config system and dynamic loading of ML embeddings and CTR models from GCS without releases.',
        ], skills: tabbySkills,
      },
      {
        company: 'Kuper', role: 'Senior Back End Developer', location: 'Abu Dhabi, UAE · Remote', period: 'Dec 2023 — Jun 2025', unit: 'B2B · Growth & Engagement', team: '5',
        highlights: [
          { value: '34.5%', text: 'faster deployments by extracting B2B logic into microservices (Golang, PostgreSQL, Kafka)' },
          { value: '427%', text: 'B2B sales growth in six months via a scalable wholesale orders platform' },
          { value: '21.8%', text: 'higher client retention through a tiered loyalty program' },
          { value: '99.9%', text: 'uptime via Kubernetes orchestration and proactive monitoring' },
        ],
        details: [
          'Extracted B2B logic from the monolith into microservices using Domain-Driven Design.',
          'Built a wholesale orders platform with Redis caching and S3 storage.',
          'Designed a loyalty program with gRPC inter-service communication.',
          'Ran technical interviews, onboarded 5 engineers and held SLAs on call.',
        ], skills: kuperSkills,
      },
      {
        company: 'ELMA365', role: 'Senior Full Stack Developer', location: 'Abu Dhabi, UAE · Remote', period: 'Nov 2022 — Dec 2023', unit: 'Document Management', team: '6',
        highlights: [
          { value: '25.5%', text: 'faster document generation, improving operational efficiency' },
          { value: '97%', text: 'test coverage, reducing runtime errors and improving stability' },
        ],
        details: [
          'Designed a document templating platform with Golang, Angular and microservices.',
          'Orchestrated containers with Kubernetes for fault tolerance and scalability.',
          'Integrated Redis caching and S3 storage to boost performance.',
          'Applied TDD across unit, integration and e2e tests; mentored juniors.',
        ], skills: elmaSkills,
      },
      {
        company: 'Rainbowsoft', role: 'Middle Full Stack Developer', location: 'Tbilisi, Georgia · Remote', period: 'Oct 2020 — Nov 2022', unit: 'Research & Development', team: '8',
        highlights: [
          { value: 'SDK', text: 'built an SDK for microcomponent management, integrated into robotics projects' },
          { value: 'RC', text: 'created a remote-control system with Golang, WebSockets and React.js' },
          { value: 'Docker', text: 'simplified deployment and reduced maintenance complexity' },
        ],
        details: [
          'Implemented an SDK for microcomponents with Golang and gRPC.',
          'Built server and client sides of the RC system with WebSockets and React.',
          'Contributed to the SPECTR traffic-rules system (PHP, MySQL).',
          'Modeled architecture with UML and BPMN; set up CI/CD with Jenkins.',
        ], skills: rbsSkills,
      },
    ],
  },
  skills: {
    title: 'A full-stack toolkit, with a back-end core.',
    items: [
      { name: 'Languages', desc: 'English and Russian — comfortable with professional communication, technical writing and documentation.', chips: ['English', 'Russian'] },
      { name: 'Back End', desc: 'Reliable, high-performance backend systems: API design, databases, and service-to-service communication, with a focus on scalability and security.', chips: ['Golang', 'PostgreSQL', 'ElasticSearch', 'Redis', 'Kafka', 'S3', 'MySQL', 'WebSockets'] },
      { name: 'Front End', desc: 'User interfaces with clean structure, responsive design and a smooth experience; complex frontend logic integrated with backends.', chips: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS'] },
      { name: 'Development', desc: 'Architecting complex systems with maintainability, scalability and clean-code practices at the core.', chips: ['Software Architecture', 'DDD', 'FSD', 'Microservices', 'Scalability', 'High Availability', 'Distributed Systems', 'TDD'] },
      { name: 'DevOps & Cloud', desc: 'Building and maintaining CI/CD pipelines, containerizing apps and running infrastructure on the cloud with a focus on automation and reliability.', chips: ['Kubernetes', 'Docker', 'Helm', 'GCP', 'GitLab CI/CD', 'Jenkins'] },
      { name: 'AI-Assisted Development', desc: 'Speeding up prototyping, spec-driven workflows and delivery with modern AI development tooling.', chips: ['Claude Code', 'Cursor', 'GitHub Spec Kit', 'OpenCode', 'MCP', 'Claude Skills'] },
      { name: 'Other', desc: 'Project management, system modelling and design collaboration — task tracking, architecture visualisation and API testing.', chips: ['Jira', 'UML', 'BPMN', 'C4 Model', 'Figma', 'Postman'] },
    ],
  },
  awards: {
    items: [
      { metric: '427%', title: 'Sales Growth Excellence', org: 'Kuper', text: 'Grew B2B sales volume by 427% in six months by launching a scalable wholesale orders platform powered by Redis and S3.' },
      { metric: '97%', title: 'Code Quality Champion', org: 'ELMA365', text: 'Reached 97% test coverage through rigorous TDD, minimizing runtime errors and improving system stability.' },
      { metric: '25.5%', title: 'Operational Efficiency', org: 'ELMA365', text: 'Cut document generation time by 25.5% by optimizing backend workflows with Golang and microservices.' },
    ],
  },
  education: {
    degree: 'Computer & Information Systems Security / Information Assurance',
    school: 'Saratov State Technical University', period: '2016 — 2020', skills: eduSkills,
    certs: [
      { title: 'SQL & PostgreSQL: The Complete Developer’s Guide', issuer: 'Udemy', date: 'Mar 2024', href: 'https://ude.my/UC-891c03c5-be4a-4d5e-931b-3a34e0c26bd5/' },
      { title: 'Redis: The Complete Developer’s Guide', issuer: 'Udemy', date: 'Jan 2024', href: 'https://ude.my/UC-54fb98de-5a87-494b-a812-814f59e286a5/' },
      { title: 'Go — The Complete Guide', issuer: 'Udemy', date: 'May 2023', href: 'https://ude.my/UC-cd6c145e-d53b-4fcc-a8b6-0339bd6cccf8/' },
    ],
  },
  writing: {
    title: 'I share what I learn.',
    text: 'I keep a technical blog where I document insights, explore new technologies and contribute to the developer community.',
    links: [
      { label: 'dev.to', href: 'https://dev.to/nikita_rykhlov', icon: 'devto' },
      { label: 'Medium', href: 'https://medium.com/@nikita_rykhlov', icon: 'medium' },
      { label: 'Facebook', href: 'https://www.facebook.com/groups/nikitarykhlov', icon: 'facebook' },
      { label: 'Telegram', href: 'https://t.me/nikitaRykhlovBlog', icon: 'telegram' },
    ],
  },
  contact: {
    title: 'Let’s build something that flows.',
    subtitle: 'Open to senior back-end and architecture roles. The fastest way to reach me is email or WhatsApp.',
    email: 'nikita_rykhlov@outlook.com', phone: '+995 599 390 961',
  },
  footer: { left: '© 2026 Nikita Rykhlov · Designed & built with care', backToTop: 'Back to top' },
};

const ru: Content = {
  ui: { about: 'О себе', experience: 'Опыт', skills: 'Навыки', awards: 'Награды', education: 'Образование', certifications: 'Сертификаты', writing: 'Блог', contact: 'Контакты', responsibilities: 'Обязанности', team: 'Команда', email: 'Почта', phone: 'Телефон', timezone: 'Часовой пояс', downloadCv: 'Скачать CV' },
  nav: { about: 'О себе', experience: 'Опыт', skills: 'Навыки', awards: 'Награды', contact: 'Контакты' },
  hero: {
    status: 'Открыт к новым проектам', role: 'Tech Lead · Back End разработчик', first: 'Никита', last: 'Рыхлов',
    tagline: 'Проектирую и поддерживаю высоконагруженные распределённые системы, где на первом месте производительность, надёжность и отказоустойчивость.',
    years: '5+', yearsLabel: 'лет в разработке', ctaPrimary: 'Связаться', ctaSecondary: 'Смотреть опыт',
    location: 'Тбилиси · UTC+04:00', mainSkills: ['Software Architecture', 'Golang', 'Distributed Systems', 'ElasticSearch', 'PostgreSQL'],
  },
  about: {
    title: 'Создаю системы, которые живут долго.',
    paras: [
      'Больше пяти лет строю надёжные масштабируемые решения в разных индустриях. Мой фокус — высоконагруженные распределённые системы, где под нагрузкой критичны производительность, надёжность и отказоустойчивость.',
      'Мне важны архитектуры, которые легко масштабировать и развивать, но при этом удобно поддерживать. Годы в крупных технологических компаниях со строгими стандартами дали стратегическое мышление и привычку делать долговечные эффективные решения.',
      'Помимо backend у меня есть практика на frontend, поэтому подхожу к проектам full-stack. Когда беру задачу — довожу её в срок и с высоким качеством, независимо от масштаба.',
    ],
  },
  metrics: [
    { value: '5+', label: 'лет опыта' },
    { value: '4', label: 'продуктовые компании' },
    { value: '99.95%', label: 'аптайм систем' },
    { value: '88.1%', label: 'покрытие рекламой' },
  ],
  experience: {
    items: [
      {
        company: 'Tabby', role: 'Tech Lead · Feature Lead · Senior Back End разработчик', location: 'Абу-Даби, ОАЭ · Удалённо', period: 'Июл 2025 — наст. время', unit: 'Поиск и рекомендации', team: '7',
        highlights: [
          { value: '88.1%', text: 'покрытие рекламой по экранам продукта (с 24.3%) за счёт универсального блендера источников для ранжированной выдачи' },
          { value: '~87%', text: 'быстрее доставка обновлений до пользователя — с 13–16 часов до 2 — за счёт decoupling пайплайна и оркестратора' },
          { value: '~38%', text: 'ниже latency поиска благодаря миграции кластера ElasticSearch на geo-sharding для запуска в новой стране' },
          { value: '99.95%', text: 'доступность кластера ElasticSearch в ходе всей миграции' },
        ],
        details: [
          'Был Feature/Tech Lead в нескольких инициативах — отвечал за архитектуру, доставку и непосредственную разработку.',
          'Спроектировал и построил движки поиска и рекомендаций, включая саджест мерчантов и лимитирование результатов.',
          'Руководил миграцией ElasticSearch на geo-sharding для нового рынка с проверкой HA/отказоустойчивости.',
          'Сделал конфиги per-A/B-группу и динамическую загрузку ML-эмбеддингов и CTR-моделей из GCS без релизов.',
        ], skills: tabbySkills,
      },
      {
        company: 'Kuper', role: 'Senior Back End разработчик', location: 'Абу-Даби, ОАЭ · Удалённо', period: 'Дек 2023 — Июн 2025', unit: 'B2B · Рост и вовлечение', team: '5',
        highlights: [
          { value: '34.5%', text: 'быстрее деплой за счёт выделения B2B-логики в микросервисы (Golang, PostgreSQL, Kafka)' },
          { value: '427%', text: 'рост B2B-продаж за полгода благодаря масштабируемой платформе оптовых заказов' },
          { value: '21.8%', text: 'выше удержание клиентов благодаря программе лояльности с уровнями' },
          { value: '99.9%', text: 'аптайм за счёт оркестрации Kubernetes и проактивного мониторинга' },
        ],
        details: [
          'Выделил B2B-логику из монолита в микросервисы по принципам DDD.',
          'Построил платформу оптовых заказов с кешем Redis и хранилищем S3.',
          'Спроектировал программу лояльности с gRPC-взаимодействием сервисов.',
          'Проводил технические интервью, нанял 5 инженеров и держал SLA на дежурствах.',
        ], skills: kuperSkills,
      },
      {
        company: 'ELMA365', role: 'Senior Full Stack разработчик', location: 'Абу-Даби, ОАЭ · Удалённо', period: 'Ноя 2022 — Дек 2023', unit: 'Документооборот', team: '6',
        highlights: [
          { value: '25.5%', text: 'быстрее генерация документов — выше операционная эффективность' },
          { value: '97%', text: 'покрытие тестами — меньше ошибок и выше стабильность' },
        ],
        details: [
          'Спроектировал платформу шаблонов документов на Golang, Angular и микросервисах.',
          'Оркестрировал контейнеры в Kubernetes для отказоустойчивости и масштабируемости.',
          'Внедрил кеш Redis и хранилище S3 для роста производительности.',
          'Применял TDD на всех уровнях тестов; менторил junior-разработчиков.',
        ], skills: elmaSkills,
      },
      {
        company: 'Rainbowsoft', role: 'Middle Full Stack разработчик', location: 'Тбилиси, Грузия · Удалённо', period: 'Окт 2020 — Ноя 2022', unit: 'Research & Development', team: '8',
        highlights: [
          { value: 'SDK', text: 'разработал SDK для управления микрокомпонентами для робототехнических проектов' },
          { value: 'RC', text: 'создал систему удалённого управления на Golang, WebSockets и React.js' },
          { value: 'Docker', text: 'упростил развёртывание и снизил сложность поддержки' },
        ],
        details: [
          'Реализовал SDK для микрокомпонентов на Golang и gRPC.',
          'Построил серверную и клиентскую части RC-системы на WebSockets и React.',
          'Участвовал в системе ПДД SPECTR (PHP, MySQL).',
          'Моделировал архитектуру в UML и BPMN; настроил CI/CD на Jenkins.',
        ], skills: rbsSkills,
      },
    ],
  },
  skills: {
    title: 'Full-stack-набор с backend-ядром.',
    items: [
      { name: 'Языки', desc: 'Английский и русский — свободно для профессионального общения, технической переписки и документации.', chips: ['Английский', 'Русский'] },
      { name: 'Back End', desc: 'Надёжные высокопроизводительные backend-системы: проектирование API, работа с базами и взаимодействие сервисов с упором на масштабируемость и безопасность.', chips: ['Golang', 'PostgreSQL', 'ElasticSearch', 'Redis', 'Kafka', 'S3', 'MySQL', 'WebSockets'] },
      { name: 'Front End', desc: 'Интерфейсы с чистой структурой, адаптивной вёрсткой и плавным UX; сложная frontend-логика в связке с backend.', chips: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS'] },
      { name: 'Разработка', desc: 'Проектирование сложных систем с упором на поддерживаемость, масштабируемость и чистый код.', chips: ['Software Architecture', 'DDD', 'FSD', 'Microservices', 'Scalability', 'High Availability', 'Distributed Systems', 'TDD'] },
      { name: 'DevOps и облако', desc: 'CI/CD-пайплайны, контейнеризация и инфраструктура в облаке с упором на автоматизацию и надёжность.', chips: ['Kubernetes', 'Docker', 'Helm', 'GCP', 'GitLab CI/CD', 'Jenkins'] },
      { name: 'AI-разработка', desc: 'Ускоряю прототипирование, spec-driven процессы и доставку с помощью современных AI-инструментов разработки.', chips: ['Claude Code', 'Cursor', 'GitHub Spec Kit', 'OpenCode', 'MCP', 'Claude Skills'] },
      { name: 'Прочее', desc: 'Управление проектами, моделирование систем и работа с дизайном — трекинг задач, визуализация архитектуры и тестирование API.', chips: ['Jira', 'UML', 'BPMN', 'C4 Model', 'Figma', 'Postman'] },
    ],
  },
  awards: {
    items: [
      { metric: '427%', title: 'За рост продаж', org: 'Kuper', text: 'Рост объёма B2B-продаж на 427% за полгода благодаря масштабируемой платформе оптовых заказов на Redis и S3.' },
      { metric: '97%', title: 'За качество кода', org: 'ELMA365', text: 'Достиг 97% покрытия тестами благодаря строгому TDD — меньше ошибок и выше стабильность системы.' },
      { metric: '25.5%', title: 'За эффективность', org: 'ELMA365', text: 'Сократил время генерации документов на 25.5% за счёт оптимизации backend на Golang и микросервисах.' },
    ],
  },
  education: {
    degree: 'Безопасность компьютерных и информационных систем',
    school: 'Саратовский государственный технический университет', period: '2016 — 2020', skills: eduSkills,
    certs: [
      { title: 'SQL & PostgreSQL: The Complete Developer’s Guide', issuer: 'Udemy', date: 'Март 2024', href: 'https://ude.my/UC-891c03c5-be4a-4d5e-931b-3a34e0c26bd5/' },
      { title: 'Redis: The Complete Developer’s Guide', issuer: 'Udemy', date: 'Янв 2024', href: 'https://ude.my/UC-54fb98de-5a87-494b-a812-814f59e286a5/' },
      { title: 'Go — The Complete Guide', issuer: 'Udemy', date: 'Май 2023', href: 'https://ude.my/UC-cd6c145e-d53b-4fcc-a8b6-0339bd6cccf8/' },
    ],
  },
  writing: {
    title: 'Делюсь тем, что узнаю.',
    text: 'Веду технический блог: фиксирую инсайты, исследую новые технологии и помогаю сообществу разработчиков.',
    links: [
      { label: 'dev.to', href: 'https://dev.to/nikita_rykhlov', icon: 'devto' },
      { label: 'Medium', href: 'https://medium.com/@nikita_rykhlov', icon: 'medium' },
      { label: 'Facebook', href: 'https://www.facebook.com/groups/nikitarykhlov', icon: 'facebook' },
      { label: 'Telegram', href: 'https://t.me/nikitaRykhlovBlog', icon: 'telegram' },
    ],
  },
  contact: {
    title: 'Сделаем что-то, что работает само.',
    subtitle: 'Открыт к ролям senior back-end и архитектора. Быстрее всего — почта или WhatsApp.',
    email: 'nikita_rykhlov@outlook.com', phone: '+995 599 390 961',
  },
  footer: { left: '© 2026 Никита Рыхлов · Сделано с заботой', backToTop: 'Наверх' },
};

export const content: Record<Lang, Content> = { en, ru };

// Raw values used by the copy buttons (no spaces / formatting).
export const COPY_EMAIL = 'nikita_rykhlov@outlook.com';
export const COPY_PHONE = '+995599390961';

// Pre-generated CV PDFs (see scripts/build-cv.mjs), one per language.
export const cvFiles: Record<Lang, string> = {
  en: '/cv/Nikita-Rykhlov-CV-EN.pdf',
  ru: '/cv/Nikita-Rykhlov-CV-RU.pdf',
};
