import { useEffect, useState } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState<string>("home");
    
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY;
  
      // Loop through each section to find the active one
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
  
          // If the scroll position is within the section
          if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
      return (
        <nav className="fixed top-0 left-0 right-0 p-4 md:p-6 z-50 bg-ct-gray bg-opacity-90 w-full md:w-auto">
          <div className="flex justify-end space-x-4">
            <a
              href="#home"
              className={`font-bold text-lg md:text-2xl hover:scale-105 transition-transform ${activeSection === "home" ? "text-yellow" : activeSection === "skills" ? "text-ct-grey" : "text-white"}`}
            >
              [^]
            </a>
            <a
              href="#about"
              className={`font-bold text-lg md:text-2xl hover:scale-105 transition-transform ${activeSection === "about" ? "text-ct-grey" : activeSection === "skills" ? "text-ct-grey" : "text-white"}`}
            >
              ABOUT
            </a>
            <a
              href="#skills"
              className={`font-bold text-lg md:text-2xl hover:scale-105 transition-transform ${activeSection === "skills" ? "text-yellow" : "text-white"}`}
            >
              SKILLS
            </a>
            <a
              href="#projects"
              className={`font-bold text-lg md:text-2xl hover:scale-105 transition-transform ${activeSection === "projects" ? "text-yellow" : activeSection === "skills" ? "text-ct-grey" : "text-white"}`}
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className={`font-bold text-lg md:text-2xl hover:scale-105 transition-transform ${activeSection === "contact" ? "text-yellow" : activeSection === "skills" ? "text-ct-grey" : "text-white"}`}
            >
              CONTACT
            </a>
          </div>
        </nav>
      );
    };

export default Navbar;