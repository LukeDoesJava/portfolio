"use client";

import Link from "next/link";

const ProjectNav = () => {
    
    return (
        <nav className="fixed top-0 left-0 right-0 h-8 bg-grey z-40">
            <div className="flex space-x-4 translate-x-2">
                    <Link
                        href="/"
                        className="font-bold text-lg md:text-2xl hover:scale-105 transition-transform text-yellow cursor-pointer"
                    >
                        [←]
                    </Link>
                    <Link
                        href="#"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-bold text-lg md:text-2xl hover:scale-105 transition-transform text-yellow cursor-pointer"
                    >
                        [^]
                    </Link>
            </div>
        </nav>
    );
};

export default ProjectNav;
