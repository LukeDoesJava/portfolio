"use client";

import React from "react";
import ProfilePicture from "./components/ProfilePicture";
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen text-white font-inter">
      {/* Top Navigation */}
      <nav className="absolute top-0 right-0 p-6 space-y-4 text-right">
        <a href="#home" className="font-bold text-yellow text-4xl">
          HOME
        </a>
        <a href="#work" className="block font-bold text-4xl">
          PROJECTS
        </a>
        <a href="#contact" className="block font-bold text-4xl">
          CONTACT
        </a>
      </nav>
      {/* Main Section */}
      <main id="home" className="flex h-[90vh] bg-purple items-center justify-center px-6">
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
          <div className="relative top-12 left-12 sm:top-8 sm:left-8">
            <h1 className="text-6xl font-bold leading-tight">
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
            <p className="mt-4 text-2xl font-black">
              {/* Sub Text */}
              {[
                "I am a software engineer,",
                "specializing in",
                "back-end development"
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
        <div className="absolute bottom-36 left-10 font-black text-lg text-yellow transform -rotate-12">
          Scroll down <br />
          to see more about me!
        </div>
        <motion.div
      className="absolute bottom-32 left-56 font-black text-lg text-yellow"
      animate={{
        y: [0, -20, 0], // Moves up and down by 20px
      }}
      transition={{
        duration: 2, // Duration of the animation
        ease: "easeInOut",
        repeat: Infinity, // Infinite loop
      }}
    >
      <MoveDown size={48}/>
    </motion.div>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-1 flex-col items-center justify-center bg-background text-black py-32 px-6">
        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-8 max-w-4xl">
          {/* About Content */}
          <div className="bg-grey p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl text-white font-bold">Nice to meet you!</h1>
            <p className="mt-4 text-white text-xl">
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
    </div>
  );
};

export default Home;