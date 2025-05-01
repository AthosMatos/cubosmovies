import { motion } from "motion/react";
import styled from "styled-components";

const transitions = {
  fade: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { duration: 0.3, ease: "anticipate" },
  },
  slide: {
    initial: { x: -window.innerWidth },
    animate: { x: 0 },
    exit: { x: window.innerWidth },
    transition: { duration: 0.5, ease: "anticipate" },
  },
};

export const PageTransitionSlide = styled(motion.div).attrs({
  ...transitions.slide,

  className: "transform-gpu",
})``;

export const PageTransitionFade = styled(motion.div).attrs({
  ...transitions.fade,
  className: "transform-gpu",
})``;
