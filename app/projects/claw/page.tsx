import ProjectNav from "@/app/components/ProjectNav";

export default function PortfolioProject() {
  const galleryItems = [
    {
      src: "/images/projects/claw/clawCloseup.png",
      type: "image",
      alt: "claw close view",
      description: "Close-up view of the custom 3D printed claw mechanism",
      size: "large"
    },
    {
      src: "/images/projects/claw/claw-wiring.png",
      type: "image",
      alt: "claw internal wiring",
      description: "Internal wiring setup showing VexRobotics controllers and power distribution",
      size: "small"
    },
    {
      src: "/images/projects/claw/claw-internal-view.png",
      type: "image",
      alt: "claw open view",
      description: "Internal mechanical structure and motor placement",
      size: "small"
    },
    {
      src: "/images/projects/claw/claw-function.MOV",
      type: "video",
      alt: "claw function video",
      description: "Demonstration of the claw machine in action",
      size: "portrait"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-ct-grey text-white font-inter pb-16 pt-4">
      <ProjectNav />
      <div className="flex flex-col items-center flex-1 translate-y-8 w-full max-w-7xl px-4">
        <div className="flex flex-col items-center text-ct-orange">
          <h1 className="text-9xl font-bold">[Claw Machine]</h1>
          <p className="text-1xl text-center text-white font-semibold mt-4">
            A claw machine that picks up objects and drops them into a basket.
          </p>
        </div>

        <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
          {/* Project Description */}
          <div className="md:col-span-2 bg-ct-light-grey backdrop-blur p-6 rounded-2xl hover:bg-ct-contrast-grey transition-all duration-300">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-yellow mb-4">About Project</h2>
              <p className="text-gray-300">
                An arcade style claw machine where users can try to win prizes using joystick controls, featuring a custom made wooden cabinet, VexRobotics motor controllers, 
                and claw mechanism. The claw traverses the x and y axis via two motors and can be lowered and raised using a third motor that adjust the slack of the string for each component.
                The video below demonstrates the claw machine in action, unfortunately the video showing it function via joystick controls was lost.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="md:col-span-2 bg-ct-light-grey backdrop-blur hover:bg-ct-contrast-grey  p-6 rounded-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-yellow mb-4">Tech Stack</h2>
            <div className="grid grid-cols-2 gap-2">
              {["VexRobotics", "3D Printing", "Woodworking", "Circuitry/Wiring", "C Programming"].map((tech, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-2 text-center text-sm hover:bg-ct-orange hover:opacity-60 hover:text-black">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] 
              ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
              ${item.size === 'wide' ? 'md:row-span-4' : ''}
              ${item.size === 'small' ? 'md:col-span-1' : ''}
              ${item.size === 'tall' ? 'md:row-span-2' : ''}
              ${item.size === 'portrait' ? 'md:col-span-1 md:row-span-2' : ''}
              `}
            >
              {item.type === 'image' ? (
              <div className="relative aspect-square w-full h-full">
                <img 
                src={item.src} 
                alt={item.alt} 
                className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-4 right-4 text-sm text-white">
                  {item.description}
                </p>
                </div>
              </div>
              ) : (
              <div className="relative w-full h-full bg-gray-900">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  preload="metadata"
                  muted
                  playsInline
                >
                  <source src={item.src} type="video/quicktime" />
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="absolute bottom-14 left-4 right-4 text-sm text-white">
                  {item.description}
                  </p>
                </div>
                </div>
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}