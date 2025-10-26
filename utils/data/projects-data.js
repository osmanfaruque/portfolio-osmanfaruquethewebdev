export const projectsData = [
  {
    id: 1,
    name: "AutoVoyage : Unlock Your Ride",
    description:
      "AutoVoyage is a car rental platform I built to provide seamless car bookings, user authentication, and inventory management. The frontend is a responsive React application while the backend (Express + MongoDB) handles authentication, car inventory, and booking flows for a reliable end-to-end rental experience.",
    tools: [
      "React",
      "JavaScript",
      "Express",
      "MongoDB",
      "Node.js",
      "Firebase",
      "Vercel",
      "CORS",
      "JWT",
      "Lottie React",
      "Framer Motion",
      "Firebase Admin SDK",
      "Swiper",
      "tailwindCSS",
      "DaisyUI",
    ],
    role: "Full Stack Web Developer",
    code: "https://github.com/osmanfaruque/AutoVoyage",
    demo: "https://autovoyage-a11.web.app/",
    image: "/image/autovoyage.jpg",
    challenges_faced:
      "I had to prevent double bookings when multiple users tried to reserve the same car at once. Securing private routes with JWT and handling token refresh on browser reloads were tricky. Ensuring a consistent responsive UI across device sizes while keeping functionality intact was also a challenge.",
    future_plans:
      "Next, I plan to integrate a secure payment gateway to complete bookings online, build an admin dashboard for managing users and inventory, and add multi-language support. I also aim to implement more robust booking conflict resolution and availability checks.",
  },
  {
    id: 2,
    name: "Oshudh : Your Healthcare Marketplace",
    description:
      "Oshudh is a multi-vendor e-commerce platform I developed for medicines and healthcare products. Built with the MERN stack, it supports seller inventory management, customer purchases, and admin oversight to streamline healthcare product commerce.",
    tools: [
      "React",
      "JavaScript",
      "Express",
      "MongoDB",
      "Node.js",
      "Firebase",
      "Vercel",
      "JWT",
      "Lottie React",
      "Firebase Admin SDK",
      "Swiper",
      "tailwindCSS",
      "DaisyUI",
      "Stripe",
      "React Hook Form",
    ],
    role: "Full Stack Web Developer",
    code: "https://github.com/osmanfaruque/Oshudh",
    demo: "https://oshudh-a12.web.app/",
    image: "/image/oshudh.jpg",
    challenges_faced:
      "Ensuring secure and compliant handling of sensitive user and payment data was a primary concern, along with validating prescriptions and protecting seller/customer interactions.",
    future_plans:
      "Planned improvements include real-time product and order notifications, seller analytics dashboards, prescription upload and verification workflows, enhanced order-tracking, and subscription/recurring orders support.",
  },
  {
    id: 3,
    name: "Green Network - Gardening Community",
    description:
      "Green Network is a community platform I created for gardening enthusiasts to share tips, showcase plants, and connect. Key features include user profiles, plant care guides, and a marketplace for plants and gardening supplies.",
    tools: [
      "React",
      "Stripe",
      "Express",
      "Firebase",
      "MongoDB",
      "Swiper",
      "tailwindCSS",
      "DaisyUI",
      "Node.js",
    ],
    role: "Full Stack Web Developer",
    code: "https://github.com/osmanfaruque/GreenNetwork",
    demo: "https://assignment-10th-auth.web.app/",
    image: "/image/green_network.jpg",
    challenges_faced:
      "Building a secure, user-friendly system for sharing tips while keeping performance acceptable was challenging. Managing dynamic likes/comments efficiently and ranking trending posts based on interaction required custom logic and optimization.",
    future_plans:
      "I plan to add an expert Q&A section, seasonal plant suggestions using user location and weather data, and an offline-optimized mobile mode. I also want to introduce moderation tools and expert-curated content to improve trust and quality.",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: '',
// },
