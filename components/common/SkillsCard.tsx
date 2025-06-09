import React from "react";
import { motion } from "motion/react";

interface SkillsCardProps {
  title: string;
  logo: string;
  badge1: string;
  badge2: string;
  badge3: string;
  badge4?: string;
  badge5?: string;
}

const SkillsCard = (props: SkillsCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="card card-border bg-base-200 w-auto xl:w-100 lg:h-40"
    >
      <div className="card-body">
        <div className="flex flex-row gap-4 items-center mb-4">
          {props.logo && <i className={`${props.logo} text-2xl`}></i>}
          <h2 className="card-title">{props.title}</h2>
        </div>
        <div className="card-actions justify-start">
          <div className="badge badge-neutral ">{props.badge1}</div>
          <div className="badge badge-neutral ">{props.badge2}</div>
          <div className="badge badge-neutral ">{props.badge3}</div>
          {props.badge4 && (
            <div className="badge badge-neutral ">{props.badge4}</div>
          )}
          {props.badge5 && (
            <div className="badge badge-neutral ">{props.badge5}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsCard;
