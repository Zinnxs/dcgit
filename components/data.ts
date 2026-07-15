export type Formation = {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  details: string;
  technologies: string[];
};

export const formations: Formation[] = [
  {
    id: "full-stack-master",
    title: "Full Stack Master",
    description:
      "Domine React, Node.js, TypeScript, bancos de dados e cloud. 900h de conteúdo + projetos reais.",
    duration: "6 meses",
    level: "Do zero ao avançado",
    details:
      "Trilha completa com sprints guiadas, arquitetura de APIs, deploy e construção de portfólio para entrevistas técnicas.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    id: "mba-tecnologia",
    title: "MBA em Tecnologia e Liderança",
    description:
      "Para devs que querem liderar times e arquitetar sistemas em escala.",
    duration: "9 meses",
    level: "Avançado",
    details:
      "Gestão técnica, produto, comunicação, observabilidade e arquitetura para sistemas de alto impacto.",
    technologies: ["System Design", "Leadership", "Product", "Observability"],
  },
  {
    id: "mentoria-vip",
    title: "Mentoria VIP",
    description:
      "Acompanhamento semanal individual com um mentor sênior.",
    duration: "3 meses",
    level: "Personalizado",
    details:
      "Plano individual de evolução com code reviews, mock interviews e estratégia de posicionamento profissional.",
    technologies: ["Career", "Code Review", "Soft Skills", "Interview"],
  },
  {
    id: "bootcamp-intensivo",
    title: "Bootcamp Intensivo",
    description:
      "12 semanas, 100% prático, do zero ao primeiro emprego.",
    duration: "12 semanas",
    level: "Iniciante",
    details:
      "Rotina de projeto diário com apoio de mentores e entregas reais para construir confiança rapidamente.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
];

export type Testimonial = {
  id: string;
  beforePhoto: string;
  afterPhoto: string;
  name: string;
  company: string;
  quote: string;
  beforeRole: string;
  afterRole: string;
  beforeSalary: string;
  afterSalary: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "marina",
    name: "Marina Costa",
    company: "Uber",
    quote:
      "O DevClub mudou minha vida. Aprendi do zero e em 8 meses estava contratada. Hoje meu salário é 5x maior.",
    beforeRole: "Atendente de telemarketing",
    afterRole: "Software Engineer",
    beforeSalary: "R$1.500",
    afterSalary: "R$8.000",
    beforePhoto: "https://randomuser.me/api/portraits/women/44.jpg",
    afterPhoto: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "lucas",
    name: "Lucas Almeida",
    company: "PicPay",
    quote:
      "A metodologia e o suporte dos mentores fizeram toda diferença.",
    beforeRole: "Sem experiência",
    afterRole: "Front-End Pleno",
    beforeSalary: "R$0",
    afterSalary: "R$7.500",
    beforePhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    afterPhoto: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    id: "carla",
    name: "Carla Mendes",
    company: "Startup US",
    quote:
      "Nunca imaginei que fosse possível. O DevClub acreditou em mim.",
    beforeRole: "Mãe solo em transição",
    afterRole: "Software Engineer Remoto",
    beforeSalary: "R$2.000",
    afterSalary: "US$4k/mês",
    beforePhoto: "https://randomuser.me/api/portraits/women/21.jpg",
    afterPhoto: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: "joao",
    name: "João Pedro",
    company: "Stone",
    quote:
      "Os projetos práticos me deram portfólio e confiança para a entrevista.",
    beforeRole: "Motoboy",
    afterRole: "Back-End Developer",
    beforeSalary: "R$2.200",
    afterSalary: "R$8.500",
    beforePhoto: "https://randomuser.me/api/portraits/men/14.jpg",
    afterPhoto: "https://randomuser.me/api/portraits/men/73.jpg",
  },
  {
    id: "ana",
    name: "Ana Beatriz",
    company: "Amazon Web Services",
    quote:
      "O MBA do DevClub abriu portas que eu nem sabia que existiam.",
    beforeRole: "Advogada",
    afterRole: "DevOps Engineer",
    beforeSalary: "R$4.000",
    afterSalary: "R$12.000",
    beforePhoto: "https://randomuser.me/api/portraits/women/60.jpg",
    afterPhoto: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    id: "rafael",
    name: "Rafael Souza",
    company: "Accenture",
    quote:
      "A comunidade do DevClub é incrível, sempre tem alguém disposto a ajudar.",
    beforeRole: "Jovem aprendiz",
    afterRole: "Full Stack Developer",
    beforeSalary: "R$1.200",
    afterSalary: "R$7.000",
    beforePhoto: "https://randomuser.me/api/portraits/men/20.jpg",
    afterPhoto: "https://randomuser.me/api/portraits/men/94.jpg",
  },
];

export const partners = [
  "Nubank",
  "iFood",
  "Mercado Livre",
  "Stone",
  "PicPay",
  "Uber",
  "Accenture",
  "IBM",
  "Deloitte",
  "Santander",
];

export const mentors = [
  {
    id: "rodolfo",
    name: "Rodolfo Mori",
    role: "Fundador & Instrutor Chefe",
    quote: "Ensinar a pescar, não dar o peixe.",
    bio: "Mais de 12 anos criando produtos digitais e formando devs para o mercado.",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "andrey",
    name: "Andrey",
    role: "Especialista Back-End & Arquitetura",
    quote: "Código limpo, mente limpa.",
    bio: "Especialista em APIs escaláveis, microsserviços e cultura de engenharia.",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "george",
    name: "George",
    role: "Front-End & UX Engineer",
    quote: "Design não é como parece, é como funciona.",
    bio: "Constrói interfaces de alto impacto com foco em experiência e performance.",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "gabriel",
    name: "Gabriel",
    role: "DevOps & Cloud",
    quote: "Infra é código, e código é poesia.",
    bio: "Automatiza pipelines de CI/CD e arquitetura cloud para produtos resilientes.",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "fernanda",
    name: "Fernanda Lima",
    role: "IA & Dados",
    quote: "Dados são o novo petróleo, e eu vou te ensinar a refinar.",
    bio: "Atua com IA aplicada, engenharia de dados e analytics orientado a produto.",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: "rafael-torres",
    name: "Rafael Torres",
    role: "Mobile & Flutter",
    quote: "Um app bem feito cabe no bolso e no coração.",
    bio: "Desenvolvedor mobile com foco em apps performáticos e design system cross-platform.",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
  },
] as const;

export const technologyNames = [
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "Docker",
  "AWS",
  "Next.js",
  "PostgreSQL",
  "Git",
  "Figma",
  "GraphQL",
  "Kubernetes",
];

export const metrics = [
  { value: 12000, prefix: "+", suffix: " alunos formados" },
  { value: 98, suffix: "% empregabilidade" },
  { value: 500, prefix: "+", suffix: " empresas parceiras" },
  { value: 92, prefix: "NPS ", suffix: "" },
];
