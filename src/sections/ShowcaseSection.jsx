import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">

          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="first-project-wrapper group relative overflow-hidden"
          >
            <div className="relative w-full h-[400px]">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                {projects[0].stack.map((tech) => (
                  <img
                    key={tech.name}
                    src={tech.imgPath}
                    alt={tech.name}
                    title={tech.name}
                    className="w-10 h-10"
                  />
                ))}

                <a
                  href={projects[0].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition z-20"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="GitHub repository"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-6 h-6 text-gray-800"
                    fill="currentColor"
                  >
                    <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                  </svg>
                </a>

                <a
                  href={projects[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">Open project</span>
                </a>
              </div>
            </div>

            <div className="text-content mt-4">
              <h2>
                InterPrep: A job interview preparation platform powered by Vapi AI Voice agents
              </h2>
              <p className="text-white-50 md:text-xl">
                A job interview platform built with Next.js, Firebase, TailwindCSS, and Vapi AI for a modern, voice-driven experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden mt-10">
            {projects.slice(1).map((project, index) => (
              <div
                key={project.title}
                className="project group relative overflow-hidden rounded-xl bg-white shadow-md hover:bg-gray-100 transition-all duration-300 mt-6"
                ref={(el) => (cardRefs.current[index + 1] = el)}
              >
                <div className="image-wrapper relative h-64 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                  <h2 className="absolute bottom-4 left-4 text-white text-2xl font-semibold drop-shadow">
                    {project.title}
                  </h2>

                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.stack.map((tech) => (
                      <img
                        key={tech.name}
                        src={tech.imgPath}
                        alt={tech.name}
                        title={tech.name}
                        className="w-8 h-8"
                      />
                    ))}

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition z-20"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="GitHub repository"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className="w-6 h-6 text-gray-800"
                        fill="currentColor"
                      >
                        <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                      </svg>
                    </a>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10"
                    >
                      <span className="sr-only">Open project</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
