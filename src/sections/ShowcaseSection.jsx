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
