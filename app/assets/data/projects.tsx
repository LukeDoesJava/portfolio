const projects = [
  {
    descriptor: "WEB APP",
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects.",
    image: "/images/portfolio.png", 
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    repoLink: "https://github.com/username/portfolio",
  },
  {
    descriptor: "WEB/MOBILE APP",
    title: "Krumbz",
    description: "A recipe sharing and generation platform based on ingredients found in your fridge.",
    image: "/images/krumbz.png", 
    techStack: ["Next.js", "Docker", "Python", "Typescript"],
  },
  {
    descriptor: "NETWORKING",
    title: "Wireshark clone",
    description: "A Wireshark clone that can be used to compile TCP network information from packets in bulk.",
    image: "/images/wireshark.png", 
    techStack: ["Python", "Sockets"],
    repoLink: "abc.come",
  },
  {
    descriptor: "OPERATING SYSTEMS",
    title: "Train scheduling system",
    description: "A thread scheduler with deadlock avoidance depicted in the form of a train station.",
    image: "/images/trains.jpg", 
    techStack: ["C", "OS"],
    repoLink: "",
  },
  {
    descriptor: "ROBOTICS",
    title: "Arcade Claw machine",
    description: "A claw machine that picks up objects and drops them into a basket.",
    image: "/images/portfolio.jpg", 
    techStack: ["VexRobotics", "C"],
    repoLink: "",
  },
  {
    descriptor: "PHYSICS SIMULATION",
    title: "Fizzix",
    description: "A sandbox environment allowing users to interact with fluid physics.",
    image: "/images/fizzix.jpg", 
    techStack: ["C++"],
    repoLink: "",
  },
  // Add more projects here
];

export default projects;
