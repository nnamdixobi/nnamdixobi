export const profile = {
  name: "Nnamdi Kelvin Ikenna-Obi",
  handle: "nnamdixobi",
  role: "Software Engineer · AI & Cyber Security",
  location: "Auburn, Alabama",
  email: "nzi0007@auburn.edu",
  phone: "(334) 275-5814",
  phoneHref: "+13342755814",
  github: "https://github.com/nnamdixobi",
  linkedin: "https://www.linkedin.com/in/nnamdixobi/",
  resume: "/resume.pdf",
  title: "Software Engineer",
  specialties: [
    "Cybersecurity",
    "Artificial Intelligence",
    "Cloud Computing",
    "Research",
  ],
  valueProposition:
    "Graduate researcher and software engineer exploring the intersection of AI, cybersecurity, cloud computing, and immersive technologies to develop innovative and practical solutions.",
  bio: "Computer Science and Software Engineering graduate student at Auburn University with a concentration in Artificial Intelligence and Cyber Security.",
  interests: [
    "Software Development",
    "Artificial Intelligence",
    "Cyber Security",
    "Data Science",
    "Cloud Computing",
    "Computer Networking",
  ],
} as const;

export const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "HTML & CSS",
  "SQL",
  "PHP",
  "Java",
  "C / C++",
  "C#",
  "AWS Cloud",
  "Unity",
  "Material UI",
  "Firebase",
  "Git",
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
  technologies?: string[];
  location?: string;
  type?: "work" | "education";
};

export const experiences: Experience[] = [
  {
    company: "Auburn University Libraries — Innovation & Research Commons",
    role: "Graduate Assistant",
    period: "Feb 2025 — Present",
    location: "Auburn, AL",
    technologies: ["Unity", "C#", "VR", "XR Interaction Toolkit"],
    points: [
      "Contribute to research-driven VR projects using Unity and C#, including immersive applications for healthcare, education, and human-centered experiences.",
      "Support immersive classroom learning by managing VR headsets and educational applications for instructors and students.",
      "Troubleshoot VR hardware, software, and related equipment for classes, demonstrations, and events.",
      "Coordinate classes, meetings, demonstrations, and events hosted in the VR space.",
    ],
  },
  {
    company: "Auburn University",
    role: "M.S. Computer Science & Software Engineering",
    period: "Expected May 2027",
    location: "Auburn, AL",
    type: "education",
    technologies: ["AI Engineering", "Cyber Security Engineering"],
    points: [
      "Graduate concentration in Artificial Intelligence and Cyber Security.",
      "Pursuing graduate certificates in AI Engineering and Cyber Security Engineering.",
    ],
  },
  {
    company: "iCode Pearland",
    role: "Technical Lead",
    period: "Aug 2024 — Dec 2024",
    location: "Pearland, TX",
    technologies: ["C#", "HTML", "CSS", "JavaScript", "PHP", "SQL", "Scratch"],
    points: [
      "Led programming and STEM instruction for students, fostering a hands-on learning environment.",
      "Developed and refined curriculum and projects tailored to various age groups and skill levels.",
      "Taught C#, HTML, CSS, JavaScript, PHP, SQL, Scratch, and block coding.",
      "Mentored students in problem-solving and creative coding techniques.",
      "Collaborated with the teaching team to improve lesson plans and student engagement.",
    ],
  },
  {
    company: "FICOM Technologies",
    role: "Front-End Developer",
    period: "Feb 2024 — Present",
    location: "Remote",
    technologies: ["React", "Material UI", "JavaScript", "REST APIs"],
    points: [
      "Developed UI components for the FICOM application using React and Material UI.",
      "Implemented responsive, intuitive interfaces focused on user experience.",
      "Collaborated with the backend team to ensure seamless data flow and integration.",
    ],
  },
  {
    company: "One Community Global",
    role: "Software Engineer",
    period: "Jan 2024 — Aug 2024",
    location: "Remote",
    technologies: ["React", "JavaScript", "Git", "GitHub"],
    points: [
      "Developed key features for the Highest Good Network application using React.",
      "Integrated features and improved application performance and code quality.",
      "Collaborated across the team to solve technical challenges.",
      "Reviewed GitHub pull requests to ensure high-quality code integration.",
    ],
  },
  {
    company: "Auburn University Program Understanding Lab",
    role: "Research Software Engineer Intern",
    period: "May 2023 — Aug 2023",
    location: "Auburn, AL",
    technologies: ["Python", "Binary Analysis", "Unit Testing", "Oxide"],
    points: [
      "Contributed to Oxide, a binary analysis framework for executable code, by developing Python plugins and modules.",
      "Improved framework reliability and usability through Python unit testing and technical documentation.",
    ],
  },
  {
    company: "Auburn University",
    role: "B.S. Computer Science",
    period: "December 2023",
    location: "Auburn, AL",
    type: "education",
    technologies: ["Computer Science"],
    points: ["Completed a Bachelor of Science in Computer Science."],
  },
  {
    company: "Auburn University Biggio Center",
    role: "Learning Consultant",
    period: "June 2022 — Dec 2023",
    location: "Auburn, AL",
    technologies: ["ServiceNow", "Classroom Tech", "Support"],
    points: [
      "Supported faculty and students with classroom teaching technologies.",
      "Resolved IT issues promptly and efficiently.",
      "Managed and updated support tickets in ServiceNow.",
      "Maintained high user satisfaction across the Biggio Center.",
    ],
  },
];

export type SkillCategory = {
  name: string;
  icon:
    | "code"
    | "layers"
    | "cloud"
    | "shield"
    | "brain"
    | "database"
    | "wrench";
  items: string[];
};

export const skillGroups: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "code",
    items: ["Python", "JavaScript", "SQL", "Java", "C/C++", "C#", "R", "Bash"],
  },
  {
    name: "Frameworks",
    icon: "layers",
    items: ["React", "Node.js", "REST APIs", "Vite", "Tailwind CSS", "Material UI"],
  },
  {
    name: "Cloud / DevOps",
    icon: "cloud",
    items: ["AWS", "Docker", "Kubernetes", "Git/GitHub", "Linux"],
  },
  {
    name: "AI / ML",
    icon: "shield",
    items: ["PyTorch", "NumPy", "Pandas"],
  },
  {
    name: "Security / Forensics",
    icon: "brain",
    items: ["Wireshark", "Sleuth Kit", "RegRipper", "ExifTool", "Binwalk", "Steghide/Stegseek"],
  },
  {
    name: "Databases",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "SQLite", "Firebase"],
  },
  {
    name: "Other",
    icon: "wrench",
    items: ["Unity", "XR Interaction Toolkit", "ServiceNow"],
  },
];

import pykeImg from "@/assets/project-pyke.jpg";
import nasaImg from "@/assets/project-nasa.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  achievements?: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "pyke-solutions",
    title: "pykesolutions.org",
    category: "Client · Marketing site",
    year: "2024",
    image: pykeImg,
    overview:
      "Marketing website for a full-service accounting firm, designed to convert visitors into consultation leads.",
    problem:
      "The firm had no digital presence and was losing potential clients who couldn't verify their services online or contact them easily.",
    solution:
      "Designed and shipped a clean, conversion-focused marketing site with clear service pages, responsive layouts, and a streamlined contact flow tuned to their brand.",
    technologies: ["Web Design","React", "TypeScript","TanStack Start", "Tailwind CSS", "Responsive UI", "SEO"],
    achievements: [
      "Established the firm's first professional web presence",
      "Mobile-first, responsive across all viewports",
      "Conversion-oriented information architecture",
      "Server-rendered pages with per-page metadata and sitemap for search visibility.",
    ],
    demo: "https://pykesolutions.org/",
  },
  {
    slug: "nasa-apod",
    title: "NASA APOD Explorer",
    category: "API integration · Web",
    year: "2023",
    image: nasaImg,
    overview:
      "An enhanced version of NASA's Astronomy Picture of the Day, wired to the open NASA API for real-time astronomical content.",
    problem:
      "Static astronomy pages quickly go stale. Users wanted a browsable, always-fresh experience that surfaced NASA's daily imagery and metadata.",
    solution:
      "Integrated NASA's public APOD API with vanilla JavaScript, added date-based navigation, and rendered rich media with graceful fallbacks for videos vs. images.",
    technologies: ["JavaScript", "NASA API", "HTML", "CSS", "Fetch"],
    achievements: [
      "Live integration with NASA's public APOD API",
      "Handles both image and video media types gracefully",
      "Deployed on Netlify with instant global delivery",
    ],
    github: "https://github.com/nnamdixobi/Web-Dev-Club/tree/apod",
    demo: "https://nnamdixobis-apod.netlify.app/",
  },
];

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
] as const;

export type FocusItem = {
  title: string;
  description: string;
  tag: string;
  icon:
    | "cloud"
    | "shield"
    | "brain"
    | "flask"
    | "server"
    | "code";
};

export const currentFocus: FocusItem[] = [
  {
    title: "AWS Certifications",
    description:
      "Preparing for AWS Cloud Practitioner and Solutions Architect Associate — deepening my cloud fundamentals.",
    tag: "In progress",
    icon: "cloud",
  },
  {
    title: "Cybersecurity",
    description:
      "Studying secure systems, threat modeling, and binary analysis through Auburn's cyber concentration.",
    tag: "Concentration",
    icon: "shield",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Exploring applied ML, LLM tooling, and intelligent interfaces that blend research with real product work.",
    tag: "Concentration",
    icon: "brain",
  },
  {
    title: "VR & Applied Research",
    description:
      "Building Unity/C# experiences at the Innovation & Research Commons and contributing to Oxide binary analysis research.",
    tag: "Ongoing",
    icon: "flask",
  },
  {
    title: "Cloud Computing",
    description:
      "Designing scalable, resilient architectures — serverless functions, managed data, and edge delivery.",
    tag: "Exploring",
    icon: "server",
  },
  {
    title: "Software Engineering",
    description:
      "Shipping thoughtful full-stack products with React, TypeScript, and Node — clean systems, considered UX.",
    tag: "Practice",
    icon: "code",
  },
];