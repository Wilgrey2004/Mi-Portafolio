import React from "react";

export const transitionVariablesPages = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export const fadeIn = (position: string) => {
  return {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    hidden: {
      pacity: 0,
      y: position === "bottom" ? -80 : 0,
      x: position === "right" ? 80 : 0,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
