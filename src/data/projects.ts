import { ProjectItem } from "@/types";

export const PROJECTS: ProjectItem[] = [
  // Full-Stack Systems
  {
    id: "parking-building-management",
    title: "Parking Building Management System",
    category: "Full-Stack Systems",
    description: "End-to-end smart parking management platform featuring automated slot allocation, vehicle tracking, billing integration, and real-time dashboard analytics.",
    tags: ["Full-Stack", "Frontend UI", "Backend API", "RESTful APIs", "System Design"],
    frontendUrl: "https://github.com/Parking-Building-Management-System/Parking-Building-FE-UI",
    backendUrl: "https://github.com/Parking-Building-Management-System/Parking-Building-BE",
    featured: true,
  },
  {
    id: "personal-portfolio",
    title: "Personal Developer Portfolio",
    category: "Full-Stack Systems",
    description: "Minimalist, strategic multi-page portfolio built with Next.js App Router and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "App Router"],
    demoUrl: "/",
    featured: true,
  },

  // LAB211 Core Java & OOP Projects
  {
    id: "homestay-booking-management",
    title: "HomeStay Booking Management",
    category: "Java OOP & LAB211 Lab",
    description: "Core Java console management system for homestay room bookings, customer data handling, and transactional validation applying strict OOP principles.",
    tags: ["Core Java", "OOP", "Data Validation", "LAB211", "Console App"],
    githubUrl: "https://github.com/Harry-dev1805/HomeStayBookingManagement",
  },
  {
    id: "traditional-feast-menu",
    title: "Traditional Feast Menu Manager",
    category: "Java OOP & LAB211 Lab",
    description: "Menu planning and order management application built in Java, emphasizing memory management, collections framework, and clean object modeling.",
    tags: ["Core Java", "Collections Framework", "File I/O", "LAB211"],
    githubUrl: "https://github.com/Harry-dev1805/TraditionalFeastMenu",
  },
  {
    id: "software-developer-management",
    title: "Software Developer Management",
    category: "Java OOP & LAB211 Lab",
    description: "HR & Developer roster management system implementing clean CRUD operations, searching/sorting algorithms, and data persistence.",
    tags: ["Core Java", "Algorithms", "OOP Architecture", "LAB211"],
    githubUrl: "https://github.com/Harry-dev1805/SoftwareDeveloperManagement",
  },
];