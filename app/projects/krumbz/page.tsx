import ProjectNav from "@/app/components/ProjectNav";

export default function PortfolioProject() {
  const galleryItems = [
    {
      src: "/images/projects/krumbz/krumbz_personal.mov",
      type: "mov",
      alt: "Krumbz personal",
      description: "Viewing adding bookmarks, and viewing the account page features",
      size: "tall",
    },
    {
      src: "/images/projects/krumbz/krumbz_recipes.mov",
      type: "mov",
      alt: "Krumbz recipes",
      description: "Viewing the tailored recipe suggestions and seeing recipes generated based on fridge ingredients",
      size: "tall",
    },
    {
      src: "/images/projects/krumbz/krumbz_vision.mov",
      type: "mov",
      alt: "Krumbz vision",
      description: "Using the camera to input ingredients, adding them automatically to the fridge, and adding them manually ",
      size: "tall",
    },

  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-ct-grey text-white font-inter pb-16 pt-4">
      <ProjectNav />
      <div className="flex flex-col items-center flex-1 translate-y-8 w-full max-w-7xl px-4">
        <div className="flex flex-col items-center text-ct-orange">
          <h1 className="text-9xl font-bold">[Krumbz]</h1>
          <p className="text-1xl text-center text-white font-semibold mt-4">
            A recipe finding and generation platform based on the ingredients
            found in your fridge.
          </p>
        </div>

        <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
          {/* Project Description */}
          <div className="md:col-span-2 hover:bg-ct-contrast-grey backdrop-blur p-6 rounded-2xl bg-ct-light-grey transition-all duration-300">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-yellow mb-4">About Project</h2>
              <p className="text-gray-300">
                A mobile application for iOS and Android that allows users to
                input the ingredients they have in their fridge and generates
                recipes based on those ingredients. Users may take a picture of
                their groceries or receipt and the app will automatically input
                the ingredients. The app uses Google Gemini API to process
                visual data and translate it into text, featuring a custom-made
                recipe-finding algorithm that compiles millions of recipes on
                the internet and allows for unit conversion based on user
                preferences. From this data, our app generates a list of recipes
                that the user can make with the ingredients they have, and
                cookware they own. The app was built using React Native and Expo,
                developed with TypeScript and Python.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="md:col-span-2 bg-ct-light-grey backdrop-blur hover:bg-ct-contrast-grey p-6 rounded-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-yellow mb-4">Tech Stack</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                "React Native",
                "Expo",
                "TypeScript",
                "Python",
                "Google Gemini API",
                "Postman",
                "Docker",
                "xCode",
                "Figma",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-700/50 rounded-lg p-2 text-center text-sm hover:bg-ct-orange hover:opacity-60 hover:text-black"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Items */}
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] 
              ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
              ${item.size === "wide" ? "md:row-span-4" : ""}
              ${item.size === "small" ? "md:col-span-1" : ""}
              ${item.size === "tall" ? "md:row-span-2" : ""}
              ${item.size === "portrait" ? "md:col-span-1 md:row-span-2" : ""}
              `}
            >
              {item.type === "gif" ? (
                <div className="relative w-full h-full">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="absolute bottom-4 left-4 right-4 text-sm text-white">
                      {item.description}
                    </p>
                  </div>
                </div>
              ) : item.type === "image" ? (
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