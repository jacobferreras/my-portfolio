import React from "react";
import { motion } from "framer-motion";

const Skeleton = () => {
  const skeletonArray = Array.from({ length: 3 });
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8 justify-center"
    >
      {skeletonArray.map((_, index) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="card bg-base-200 w-auto xl:w-100 mb-4 shadow-md shadow-blue-500/50 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          key={index}
        >
          <figure className="w-full h-[180px] bg-gray-300 animate-pulse rounded-t-xl" />
          <div className="card-body">
            <h2 className="card-title w-2/3 h-6 bg-gray-300 animate-pulse rounded mb-2"></h2>
            <p className="w-full h-4 bg-gray-200 animate-pulse rounded mb-4"></p>
            <div className="card-actions justify-start gap-2 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="badge badge-neutral w-16 h-6 bg-gray-200 animate-pulse"
                ></div>
              ))}
            </div>
            <div className="flex flex-row gap-2 card-actions justify-start">
              <div className="btn bg-base-300 rounded-xl w-24 h-8 animate-pulse"></div>
              <div className="btn bg-base-300 rounded-xl w-24 h-8 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skeleton;
