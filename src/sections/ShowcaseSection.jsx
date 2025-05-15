import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
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
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">

          {/* First featured project with hover effect */}
          <div
            ref={rydeRef}
            className="first-project-wrapper group relative overflow-hidden"
          >
            <div className="image-wrapper relative">
              <img
                src="/images/fullstack1.png"
                alt="InterPrep"
                className="w-full h-full object-cover"
              />
              
              {/* Hover overlay with icons */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                {/* 💬 Lägg till dina ikoner här */}
                {/* <img src="/images/logos/nextjs.svg" alt="Next.js" className="w-8 h-8" /> */}
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

          {/* Other projects */}
          <div className="project-list-wrapper overflow-hidden mt-10">

            {/* Moviefinder */}
            <div
              className="project group relative overflow-hidden rounded-xl bg-white shadow-md hover:bg-gray-100 transition-all duration-300"
              ref={libraryRef}
            >
              <div className="image-wrapper bg-[#FFEFDB] relative">
                <img
                  src="/images/project1.png"
                  alt="Moviefinder"
                  className="w-full h-full object-cover"
                />
                <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                  Moviefinder
                </h2>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* 💬 Ikoner här */}
                  {/* <img src="/images/logos/react.svg" alt="React" className="w-8 h-8" /> */}
                </div>
              </div>
            </div>

            {/* NextTrip */}
            <div
              className="project group relative overflow-hidden rounded-xl bg-white shadow-md hover:bg-gray-100 transition-all duration-300 mt-6"
              ref={ycDirectoryRef}
            >
              <div className="image-wrapper relative h-64 w-full">
                <img
                  src="/images/project5.png"
                  alt="NextTrip"
                  className="h-full w-full object-cover"
                />
                <h2 className="absolute bottom-4 left-4 text-white text-2xl font-semibold drop-shadow">
                  NextTrip
                </h2>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* 💬 Ikoner här */}
                  {/* <img src="/images/logos/tailwind.svg" alt="Tailwind" className="w-8 h-8" /> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
