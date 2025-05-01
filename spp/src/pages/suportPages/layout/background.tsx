import styled from "styled-components";
import backgroundImage from "../../../assets/BACKGROUND-krists-luhaers-543526-unsplash.png";

export const Background = styled.div.attrs({
  className:
    "flex flex-col h-screen w-screen max-h-screen max-w-screen overflow-hidden",
})`
  background: linear-gradient(
      359deg,
      #ffffff 25%,
      rgba(61, 43, 57, 0.705) 68%,
      rgba(255, 255, 255, 0.2) 100%
    ),
    url(${backgroundImage});

  .dark & {
    background: linear-gradient(
        359deg,
        #000000 25%,
        rgba(39, 17, 34, 0.705) 68%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url(${backgroundImage});

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
