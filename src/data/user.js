/**
 * Single source of truth for everything on the page.
 * Edit this file to update the portfolio content.
 */

export const USER = {
  firstName: "Mohammad",
  lastName: "Omar",
  displayName: "Mohammad Omar",
  username: "Omar-webcloud",
  bio: "WordPress developer. Custom themes, pixel-perfect Elementor builds.",
  jobTitle: "WordPress Developer",
  flipSentences: [
    "Custom WordPress themes, built to scale.",
    "Elementor experiences, pixel by pixel.",
    "Fast, accessible, easy to manage.",
    "Based in Chattogram, working worldwide.",
  ],
  address: "Chattogram, Bangladesh",
  timeZone: "Asia/Dhaka",
  email: "omarfarukcihs@gmail.com",
  website: "https://omar-portfolio.vercel.app/",
  resume: "/Resume.pdf",
  jobs: [
    {
      title: "WordPress Developer",
      company: "Webermelon",
      website: "https://webermelon.com/",
      experienceId: "webermelon",
    },
  ],
  about: [
    "I'm Mohammad Omar — a WordPress developer with an obsession for custom themes and clean, intuitive Elementor builds.",
    "I turn designs into fast, responsive and easy-to-manage WordPress sites that elevate a brand and drive business growth.",
    "Builder of REDO WP Theme, Bloggin' Pro, Syntaxa, PlastiTrack and WebChronicles — from WordPress to Next.js.",
  ],
}

export const SOCIAL_LINKS = [
  { name: "github", title: "GitHub", handle: "Omar-webcloud", href: "https://github.com/Omar-webcloud" },
  {
    name: "linkedin",
    title: "LinkedIn",
    handle: "in/md-omar-faruk-chowdhury",
    href: "https://www.linkedin.com/in/md-omar-faruk-chowdhury",
  },
  { name: "mail", title: "Email", handle: "omarfarukcihs@gmail.com", href: "mailto:omarfarukcihs@gmail.com" },
  { name: "resume", title: "Resume", handle: "PDF", href: "/Resume.pdf" },
]

export const STACK = [
  {
    category: "WordPress",
    items: ["WordPress", "Elementor Pro", "WooCommerce", "ACF", "PHP", "Theme Development"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Tools",
    items: ["Git / GitHub", "Figma", "cPanel", "SEO", "DevTools", "Performance"],
  },
]

export const EXPERIENCES = [
  {
    id: "webermelon",
    companyName: "Webermelon",
    companyWebsite: "https://webermelon.com/",
    companyLogo: "/wm-logo.png",
    companyDesc: "WordPress & Software Development Agency",
    location: "Chattogram, Bangladesh",
    locationType: "Remote",
    isCurrentEmployer: true,
    positions: [
      {
        id: "wp-developer",
        title: "WordPress Developer",
        employmentType: "Full-time",
        employmentPeriod: { start: "05.2026" },
        isExpanded: true,
        description: [
          "Building custom WordPress themes and Elementor Pro templates for client projects.",
          "Tuning performance, Core Web Vitals and on-page SEO before every launch.",
          "Working with design and content teams to ship responsive, accessible pages.",
        ],
        skills: ["WordPress", "Elementor Pro", "PHP", "WooCommerce", "Custom Themes"],
      },
      {
        id: "wp-intern",
        title: "WordPress Developer Intern",
        employmentType: "Internship",
        employmentPeriod: { start: "02.2026", end: "04.2026" },
        description: [
          "Customised client themes and Elementor layouts from Figma handoffs.",
          "Fixed cross-browser and responsive issues across the agency's live sites.",
        ],
        skills: ["WordPress", "Theme Customization", "Elementor"],
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
    excerpt:
      'You just decided to build something. You open your browser to research which stack to use and within ten minutes you are drowning in opinions. "Use React." "No, Next.js is better." "Just use WordPress." Every developer has been there — this guide skips the fluff and answers what to use, when, and why.',
    readTime: "6 min read",
    category: "Web Development",
    link: "https://bloggin-app-six.vercel.app/post/pfG4DDttAXhIVkY8MfAz",
  },
  {
    title: "Image Optimization Techniques Every Frontend Developer Should Know",
    excerpt:
      "Images make a website look good, but they are also one of the biggest reasons a site becomes slow. When images are not handled properly, pages take longer to load and users leave early. Here is how to fix that.",
    readTime: "5 min read",
    category: "Performance",
    link: "https://bloggin-app-six.vercel.app/post/pYTSIN48N3C1LB93DPHq",
  },
  {
    title: "Flexbox vs Grid and How I Choose Between Them",
    excerpt:
      "When I started learning modern CSS, Flexbox and Grid felt like magic. Suddenly layouts stopped being a fight and started to make sense. Over time I realized they are not competitors — here is how I pick one.",
    readTime: "4 min read",
    category: "CSS Layout",
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
