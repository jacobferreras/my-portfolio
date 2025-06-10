"use client";
import React from "react";
import Particles from "@/components/ui/Particles/Particles";
import HomeSectionLarge from "@/components/ui/HomeSectionLarge";
import AboutSectionLarge from "@/components/ui/AboutSectionLarge";
import ProjectSectionLarge from "@/components/ui/ProjectSectionLarge";
import SkillsSectionLarge from "@/components/ui/SkillsSectionLarge";
import ContactSectionLarge from "@/components/ui/ContactSectionLarge";
import "bootstrap-icons/font/bootstrap-icons.css";

const page = () => {
  return (
    <div className="bg-base-100 justify-center items-center min-h-screen relative gap-y-12">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={2000}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Home */}
      <div className="justify-center items-center max-w-7xl mx-auto">
        <HomeSectionLarge />
      </div>

      {/* About */}
      <div className="justify-center items-center max-w-7xl mx-auto">
        <AboutSectionLarge />
      </div>

      {/* Projects */}
      <div className="justify-center items-center max-w-7xl mx-auto">
        <ProjectSectionLarge />
      </div>

      {/* Skills */}
      <div className="justify-center items-center max-w-7xl mx-auto">
        <SkillsSectionLarge />
      </div>

      {/* Contact */}
      <div className="justify-center items-center max-w-7xl mx-auto">
        <ContactSectionLarge />
      </div>
    </div>
  );
};

export default page;
