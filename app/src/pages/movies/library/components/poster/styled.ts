import { motion } from "motion/react";
import styled from "styled-components";

export const MoviePostWrapper = styled(motion.div).attrs({
  className: `w-42 lg:w-62 
    h-68 lg:h-100
    border dark:border-zinc-500 border-zinc-300 relative rounded-xl select-none`,
  layout: true,
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
})<{ backgroundImage: string }>`
  background: linear-gradient(
      359deg,
      #ffffff 15%,
      rgba(255, 255, 255, 0.2) 38%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${(props) => props.backgroundImage});

  .dark & {
    background: linear-gradient(
        359deg,
        #000000 15%,
        rgba(0, 0, 0, 0) 38%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${(props) => props.backgroundImage});

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;
`;
