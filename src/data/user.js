/**
 * Single source of truth for portfolio profile and information.
 */

export const USER = {
  fullName: "Mohammad Omar",
  displayName: "MOHAMMAD OMAR",
  title: "Web Developer",
  roles: [
    "Frontend Developer",
    "Web Developer",
    "WordPress Developer",
    "Full-Stack Developer",
  ],
  location: "Chattogram, BD",
  timezone: "GMT +6",
  timeZone: "Asia/Dhaka",
  availability: {
    status: "Available for projects",
    open_to: ["full-time roles", "freelance projects"],
    message:
      "I'm open to full-time roles and freelance projects. If you're building something ambitious, let's talk.",
  },
  bio: "Building high-performance, intuitive digital experiences that elevate your brand and drive business growth.",
  about: {
    headline:
      "Building high-performance, intuitive digital experiences that elevate your brand and drive business growth.",
    profile_image: "/images/omar.png",
    tagline: "Web Developer",
    location_label: "Chattogram, BD",
    timezone_label: "GMT +6",
  },
  flipSentences: [
    "Frontend & Full-Stack Web Developer.",
    "Custom Next.js & React digital experiences.",
    "Modern UI/UX with pixel-perfect craft.",
    "Based in Chattogram, working worldwide.",
  ],
  address: "Chattogram, BD",
  email: "omarfarukcihs@gmail.com",
  website: "https://omar-portfolio.vercel.app/",
  resume: "/Resume.pdf",
  jobs: [
    {
      title: "Frontend Developer",
      company: "Webermelon",
      website: "https://webermelon.com/",
      experienceId: "webermelon",
    },
  ],
  aboutBullets: [
    "Building high-performance, intuitive digital experiences that elevate your brand and drive business growth.",
    "Frontend developer specializing in Next.js, React, TypeScript, Tailwind CSS, and WordPress.",
    "Building production-grade software and honing professional skills through real client delivery at a fast-paced web agency.",
  ],
  portfolioSummary: {
    focus: [
      "Frontend development",
      "UI/UX-driven product experiences",
      "Agency work for client-facing web apps",
      "Full-stack and modern web product builds",
    ],
    professional_journey:
      "Building production-grade software and honing professional skills through real client delivery at a fast-paced web agency.",
    writing_focus:
      "Sharing thoughts on frontend development, design systems, and the evolving web landscape where code meets creativity.",
  },
}

export const SOCIAL_LINKS = [
  {
    name: "mail",
    title: "Email",
    handle: "omarfarukcihs@gmail.com",
    href: "mailto:omarfarukcihs@gmail.com",
    color: "#f59e0b",
  },
  {
    name: "linkedin",
    title: "LinkedIn",
    handle: "in/md-omar-faruk-chowdhury",
    href: "https://www.linkedin.com/in/md-omar-faruk-chowdhury",
    color: "#0a66c2",
  },
  {
    name: "github",
    title: "GitHub",
    handle: "Omar-webcloud",
    href: "https://github.com/Omar-webcloud",
    color: "#8b5cf6",
  },
  {
    name: "resume",
    title: "Resume",
    label: "View & Download CV",
    handle: "View & Download CV",
    href: "/Resume.pdf",
    color: "#10b981",
  },
]

export const STACK = [
  {
    category: "Frontend & Web",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Framer Motion",
    ],
  },
  {
    category: "Full-Stack & CMS",
    items: [
      "Node.js",
      "Express",
      "WordPress",
      "Elementor Pro",
      "PostgreSQL",
      "Prisma",
      "Drizzle ORM",
      "Firebase",
    ],
  },
  {
    category: "Tools & Workflow",
    items: ["Git / GitHub", "Vite", "Figma", "REST APIs", "Vercel", "SEO / Performance"],
  },
]

export const EXPERIENCES = [
  {
    id: "webermelon",
    companyName: "Webermelon",
    companyWebsite: "https://webermelon.com/",
    companyLogo: "/wm-logo.png",
    companyDesc: "Web & Software Development Agency",
    location: "Chattogram, BD",
    locationType: "Hybrid",
    isCurrentEmployer: true,
    positions: [
      {
        id: "frontend-developer",
        num: "02",
        year: "'26",
        title: "Frontend Developer",
        employmentType: "Full-time",
        employmentPeriod: { start: "05.2026" },
        isExpanded: true,
        description: [
          "Developing and maintaining client-facing web applications, collaborating on full project lifecycles from scoping through delivery.",
          "Contributing to internal tooling, design systems, and shared reusable component libraries.",
          "Building responsive, high-performance interfaces using Next.js, React, and Tailwind CSS.",
        ],
        skills: ["Next.js", "React", "Tailwind CSS", "WordPress"],
        status: "Active",
      },
      {
        id: "intern-web-developer",
        num: "01",
        year: "'26",
        title: "Intern Web Developer",
        employmentType: "Internship",
        employmentPeriod: { start: "02.2026", end: "04.2026" },
        description: [
          "Built responsive UI components and contributed to live client deliverables.",
          "Gained hands-on experience with professional development workflows, code reviews, and agile sprints.",
        ],
        skills: ["React", "JavaScript", "CSS", "Git"],
        status: "Completed",
      },
    ],
  },
]

export const EDUCATION = [
  {
    id: "university-of-chittagong",
    title: "Bachelor of Arts",
    subtitle: "English Literature and Language",
    organization: "University of Chittagong",
    icon: "graduation",
  },
]

export const CERTIFICATIONS = [
  {
    title: "Web Development",
    issuer: "SoloLearn",
    link: "https://api2.sololearn.com/v2/certificates/CC-HMCA6F6M/image/png",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/fcc-43a93b12-1d40-4a5b-a38b-9b4846c24ed9/responsive-web-design",
  },
]

export const ARTICLES = [
  {
    title:
      "How to Choose the Right Tech Stack for Your Web Project (A Practical Guide for Developers)",
    category: "Web Development",
    readTime: "6 min read",
    excerpt:
      'You just decided to build something. You open your browser to research which stack to use and within ten minutes you are drowning in opinions. "Use React." "No, Next.js is better." "Just use WordPress." "PHP is dead." Every developer has been there. This guide skips the fluff and answers the questions that actually matter: what to use, when, and why.',
    link: "https://bloggin-app-six.vercel.app/post/pfG4DDttAXhIVkY8MfAz",
  },
  {
    title: "Image Optimization Techniques Every Frontend Developer Should Know",
    category: "Performance",
    readTime: "5 min read",
    excerpt:
      "Images make a website look good, but they are also one of the biggest reasons a site becomes slow. When images are not handled properly, pages take longer to load and users leave early. That is why...",
    link: "https://bloggin-app-six.vercel.app/post/pYTSIN48N3C1LB93DPHq",
  },
  {
    title: "Flexbox vs Grid and How I Choose Between Them",
    category: "CSS Layout",
    readTime: "4 min read",
    excerpt:
      "When I started learning modern CSS, Flexbox and Grid felt like magic. Suddenly layouts stopped being a fight and started to make sense. Over time though I realized they are not competitors...",
    link: "https://bloggin-app-six.vercel.app/post/SK7AwRIC5o3zZugpHRA2",
  },
]

export const MAIN_NAV = [
  { title: "About", href: "#about" },
  { title: "Stack", href: "#stack" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Writing", href: "#writing" },
  { title: "Contact", href: "#contact" },
]
