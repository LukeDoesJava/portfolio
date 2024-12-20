"use client";

import React from "react";
import ProfilePicture from "./components/ProfilePicture";
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";
import Navbar from "./components/Navbar";
import ProjectsShowcaseComponent from "./components/ProjectsShowcase";
import SkillsSection from "./components/SkillsSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen text-white font-inter overflow-x-hidden">
      <Navbar />

      {/* Main Hero Section */}
      <main id="home" className="flex min-h-screen bg-grey items-center justify-center px-4 lg:px-6 py-20 relative">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12">
            {/* Profile Picture with offset background */}
            <div className="relative max-w-sm lg:max-w-md">
            <div className="absolute w-[calc(100%+16px)] h-[calc(100%+16px)] -left-20 -top-20 bg-shaded-shaded-yellow rounded-full z-20 border-1 border-black opacity-100 shadow-md"></div>
            <div className="absolute w-[calc(100%+16px)] h-[calc(100%+16px)] -left-12 -top-12 bg-shaded-yellow rounded-full z-20 border-1 border-black opacity-100 shadow-md"></div>
            <div className="absolute w-[calc(100%+16px)] h-[calc(100%+16px)] -left-6 -top-6 bg-yellow rounded-full z-20 border-1 border-black opacity-100 shadow-md"></div>
              {/* Profile Picture */}
              <div className="relative z-20">
                <ProfilePicture />
              </div>
            </div>

            {/* Text Content */}
            <div className="relative text-center lg:text-left max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                {["Hey", "there!"].map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-2">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: (wordIndex * 4 + charIndex) * 0.05,
                          ease: "easeOut"
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
                <br />
                {["I'm", "Luke"].map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-2">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: (wordIndex * 5 + charIndex) * 0.05,
                          ease: "easeOut"
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>
              <div className="mt-6 space-y-2 text-lg sm:text-xl lg:text-2xl font-black">
                {[
                  "Computer Science @ UVIC '26",
                  "Honors in software systems",
                  "Focus in back-end development",
                ].map((line, lineIndex) => (
                  <motion.div
                    key={lineIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1 + lineIndex * 0.2,
                      ease: "easeOut"
                    }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <MoveDown className="w-8 h-8 sm:w-12 sm:h-12" />
        </motion.div>
      </main>

      {/* About Section */}
      <section id="about" className="bg-ct-orange text-black py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="bg-grey p-6 rounded-lg shadow-lg flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-6">[About me]</h2>
              <div className="text-white text-base sm:text-lg space-y-4">
              <p className="mt-4 text-white text-base md:text-xl leading-relaxed">
                  My name is Luke Edwards, and I am currently studying Computer
                  Science with Honours in Software Systems at the University of
                  Victoria. Although I focus on back-end development, I am
                  currently seeking my first co-op position in software development.
                  <br />
                  <br />
                  Through both my academic and personal projects, I have gained lots of experience in all aspects of software development, including full-stack development, webdev, and mobile app development. 
                  My time working with the UVic Formula Motorsport team has also given me experience in embedded systems and real-time data processing.
                  Furthermore, this past summer I have helped co-develop an app with four of my peers, which has given me experience working in a team environment.
                  Even though I am still early in my career, I am confident that I can bring a lot of value to any team I join.
                  I am always eager to learn new things, and meet complex challenges with creative and effective solutions. 
                  <br />
                  <br />
                  When I am not working on my personal projects, my passion for video games and rock climbing keep me busy.
                  Video games have always been a big part of my life, and I love making personal mods for my favourite games.
                  <br />
                  <br />
                  I am currently seeking a co-op position for the summer and/or fall of 2025, and I am open to any opportunities that come my way.
                  If you would like to learn more about me, or have any questions, feel free to reach out to me through my socials or email.
                  <br />
                  <br />
                  I look forward to hearing from you!
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <img
                src="/images/about_me.png"
                alt="About Me"
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="bg-ct-grey text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-ct-orange p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-ct-black font-bold text-center mb-8">[Projects]</h2>
            <ProjectsShowcaseComponent />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 text-black py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">[Contact]</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-ct-grey p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-white text-right mb-4">Email</h3>
              <p className="text-white text-right">
                <a 
                  href="mailto:luke0edwardss@gmail.com" 
                  className="hover:text-ct-orange transition-colors duration-300"
                  rel="noopener noreferrer"
                >
                  [luke0edwardss@gmail.com]
                </a>
              </p>
            </div>
            <div className="bg-ct-grey p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Resume</h3>
              <p className="text-white">
                <a 
                  href="documents/Resume_luke_edwards.pdf" 
                  download 
                  className="hover:text-ct-orange transition-colors duration-300"
                >
                  [Click to download my resume]
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;