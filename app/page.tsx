"use client";

import React, { useEffect, useState } from "react";
import ProfilePicture from "./components/ProfilePicture";
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import ProjectsShowcaseComponent from "./components/ProjectsShowcase";
import SkillsSection from "./components/SkillsSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen text-white font-inter">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Section */}
      <main id="home" className="flex min-h-screen bg-grey items-center justify-center px-4 md:px-6">
        <div className="relative flex flex-col items-center sm:items-start sm:flex-row gap-6">
            {/* Profile Picture with offset background */}
            <div className="relative -top-6 -left-12 sm:-top-12 sm:-left-24">
            {/* Yellow background circle */}
            <div className="absolute w-[calc(100%+16px)] h-[calc(100%+16px)] -left-20 -top-20 bg-shaded-shaded-yellow rounded-full z-20 border-1 border-black opacity-100 shadow-md"></div>
            <div className="absolute w-[calc(100%+16px)] h-[calc(100%+16px)] -left-12 -top-12 bg-shaded-yellow rounded-full z-20 border-1 border-black opacity-100 shadow-md"></div>
            <div className="absolute w-[calc(100%+16px)] h-[calc(100%+16px)] -left-6 -top-6 bg-yellow rounded-full z-20 border-1 border-black opacity-100 shadow-md"></div>
            {/* Profile Picture */}
            <div className="relative z-20">
              <ProfilePicture />
            </div>
          </div>

          {/* Text Content */}
          <div className="relative text-center md:text-left mt-8 md:mt-0 md:top-8 md:left-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {/* Greeting Text */}
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
            <p className="mt-4 text-xl md:text-2xl font-black">
              {/* Sub Text */}
              {[
                "Computer Science @ UVIC '26",
                "Honors in software systems",
                "Focus in back-end development",
              ].map((line, lineIndex) => (
                <motion.span
                  key={lineIndex}
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1 + lineIndex * 0.2,
                    ease: "easeOut"
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-20 md:bottom-32 left-1/2 md:left-1/2 transform -translate-x-1/2 md:translate-x-0 font-black text-lg text-yellow"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <MoveDown size={48}/>
        </motion.div>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-1 flex-col items-center justify-center bg-ct-orange text-black py-16 md:py-32 px-4 md:px-6"
      >
        <div className="flex flex-col items-center md:items-start md:flex-row gap-8 max-w-4xl w-full">
          {/* About Content */}
          <div className="bg-grey p-4 md:p-6 rounded-lg shadow-lg w-full">
            <h1 className="text-3xl items-center md:text-4xl text-white font-bold">[About me]</h1>
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
      </section>
          
        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <section 
          id="projects"
          className="flex flex-col items-center justify-center bg-ct-grey text-white py-16 md:py-32 px-4 md:px-6"
        >
          <div className="flex flex-col items-center md:items-start md:flex-row gap-8 max-w-4xl w-full">
            {/* Projects Content */}
            <div className="bg-ct-orange p-4 md:p-6 rounded-lg shadow-lg w-full">
              <h1 className="text-3xl items-center text-ct-grey md:text-4xl text-white font-bold text-center">[Projects]</h1>
              <ProjectsShowcaseComponent />
            </div>
          </div>
        </section>
            
          {/* Contact Section */}
          <section
        id="contact"
        className="flex flex-col items-center justify-center bg-gray-100 text-black py-16 md:py-32 px-4 md:px-6"
      >
        <div className="max-w-5xl w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            [Contact]
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-ct-grey p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-white text-right mb-4">Email</h2>
              <p className="text-white text-right">
                <a href="mailto:luke0edwardss@gmail.com" className="hover:text-ct-orange">[luke0edwardss@gmail.com]</a>
              </p>
            </div>
            <div className="bg-ct-grey p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-white mb-4">Resume</h2>
              <p className="text-white">
                <a href="/assets/data/resume.pdf" download className="hover:text-ct-orange">[Click to download my resume]</a>
              </p>
            </div>
          </div>
          
          </div>
        </section>
      </div>
  );
};

export default Home;