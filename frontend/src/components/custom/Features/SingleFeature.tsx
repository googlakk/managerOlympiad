"use client";

import { Feature } from "@/lib/types";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_left "
      >
        <div className="w-full">
          <div className="wow fadeInUp" data-wow-delay=".15s">
            <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
              {icon}
            </div>
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </h3>
            <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              {paragraph}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
