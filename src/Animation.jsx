export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -300,
    transition: {
      duration: 0.75,
    },
  },
};
export const TextAnimations = {
  hidden: {
    opacity: 0,
    y: 300,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

export const buttonAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const ImageAnimation = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      duration: 0.75,
      staggerChildren: 0.25,
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.8,
    },
  },
};

export const lineAnimate = {
  hidden: {
    opacity: 0,
    width: "0%",
  },
  show: {
    opacity: 1,
    width: "100%",
    transition: { duration: 0.75, ease: "easeOut", staggerChildren: 1 },
  },
};

export const Slider = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const SliderAnimation = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};
