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
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
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
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/fullstack1.png" alt="InterPrep" />
            </div>
            <div className="text-content">
              <h2>InterPrep: A job interview preparation platform powered by Vapi AI Voice agents
</h2>
              <p className="text-white-50 md:text-xl">
                A job interview platform built with Next.js, Firebase, TailwindCSS, and Vapi AI for a modern, voice-driven experience.

              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project1.png"
                  alt="Moviebase on a free api"
                />
              </div>
              <h2>Moviefinder</h2>
            </div>

            <div className="project relative" ref={ycDirectoryRef}>
              <div className="image-wrapper relative h-64 w-full">
                <img
                  src="/images/your-upcoming-image.jpg"
                  alt="Upcoming Project"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-semibold">
                    Upcoming projects...
                  </h2>
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
