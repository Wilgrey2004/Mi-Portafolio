"use client";
import { transitionVariablesPages } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPages = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 right-full bottom-0 w-screen z-30 bg-tamarillo-900"
          variants={transitionVariablesPages}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay: 0.2,
            duration: 1.2,
            ease: [0.25, 0.25, 0.25, 0.75],
          }}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionPages;
