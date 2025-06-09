import React from "react";
import { motion } from "motion/react";
import SkillsCard from "../common/SkillsCard";

const SkillsSectionLarge = () => {
  return (
    <div>
      {/* Skills*/}
      <section
        id="skills"
        className="flex flex-col px-4 py-14 min-h-200 z-10 relative gap-12 mb-8 lg:items-center lg:justify-center"
      >
        <div>
          <motion.h1
            className="text-4xl text-base-content font-bold underline decoration-blue-600 decoration-4 flex mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Skills
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <SkillsCard
              title="Programming Languages"
              logo="bi bi-terminal"
              badge1="JavaScript"
              badge2="TypeScript"
              badge3="Java"
              badge4="C#"
              badge5="Dart"
            />
            <SkillsCard
              title="Frontend Development"
              logo="bi bi-display"
              badge1="React"
              badge2="Next JS"
              badge3="Tailwind CSS"
              badge4="Bootstrap"
            />
            <SkillsCard
              title="Backend Development"
              logo="bi bi-hdd-stack"
              badge1="Node JS"
              badge2="Express JS"
              badge3="REST API"
            />
            <SkillsCard
              title="Databases"
              logo="bi bi-database"
              badge1="MySQL"
              badge2="Firebase"
              badge3="PostgreSQL"
            />
            <SkillsCard
              title="Tools & Technologies"
              logo="bi bi-gear"
              badge1="Git"
              badge2="GitHub"
              badge3="Docker"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSectionLarge;
