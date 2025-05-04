import styled from "styled-components";

const DetailsWrapper = styled.div.attrs({
  className:
    "dark:bg-zinc-800/50 border dark:border-zinc-700 border-zinc-400 bg-zinc-50/50 p-4 flex flex-col gap-2 rounded-xl w-fit h-fit",
})``;

const DetailsCardWrapper = styled.div.attrs({
  className:
    "dark:bg-zinc-800/50 border dark:border-zinc-700 border-zinc-400 bg-zinc-50/50 lg:p-4 p-2 flex flex-col gap-2 rounded-xl w-full h-fit backdrop-blur-xs",
})``;

export { DetailsCardWrapper, DetailsWrapper };
