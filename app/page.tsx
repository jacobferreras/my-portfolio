"use client";
import React from "react";
import Particles from "@/components/ui/Particles/Particles";
import HomeSectionLarge from "@/components/ui/HomeSectionLarge";
import HomeSectionSmall from "@/components/ui/HomeSectionSmall";
import AboutSectionLarge from "@/components/ui/AboutSectionLarge";
import AboutSectionSmall from "@/components/ui/AboutSectionSmall";
import ProjectSectionLarge from "@/components/ui/ProjectSectionLarge";
import ProjectSectionSmall from "@/components/ui/ProjectSectionSmall";

const page = () => {
  return (
    <div className="bg-base-100 justify-center items-center min-h-screen relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Home */}
      <div className="hidden lg:block">
        <HomeSectionLarge />
      </div>
      <div className="flex lg:hidden justify-center">
        <HomeSectionSmall />
      </div>

      {/* About */}
      <div className="hidden lg:block">
        <AboutSectionLarge />
      </div>
      <div className="flex lg:hidden">
        <AboutSectionSmall />
      </div>

      {/* Projects */}
      <div className="hidden lg:block">
        <ProjectSectionLarge />
      </div>
      <div className="flex lg:hidden">
        <ProjectSectionSmall />
      </div>
    </div>
  );
};

export default page;
