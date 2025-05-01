import styled from "styled-components";

export const MovieCardWrapper = styled.div.attrs({
  className:
    "flex flex-col gap-2 w-64 h-92 border border-gray-100 rounded-xl justify-end",
})<{ backgroundImage: string }>`
  background: linear-gradient(
      359deg,
      #ffffff 25%,
      rgba(61, 43, 57, 0.705) 68%,
      rgba(255, 255, 255, 0.2) 100%
    ),
    url(${(props) => props.backgroundImage});

  .dark & {
    background: linear-gradient(
        359deg,
        #000000 25%,
        rgba(39, 17, 34, 0.705) 68%,
        rgba(0, 0, 0, 0.2) 100%
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
