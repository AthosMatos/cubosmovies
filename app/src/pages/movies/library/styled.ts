import styled from "styled-components";

export const MovieSwitchButton = styled.span.attrs({
  className:
    "text-sm w-max text-zinc-800 h-fit border dark:text-zinc-200 px-2 py-1 cursor-pointer rounded-sm font-medium transition-all select-none active:scale-95",
})<{ isSelected?: boolean }>`
  border-color: ${(props) =>
    props.isSelected ? "rgba(0, 0, 0, 0.3)" : "transparent"};
  background-color: ${(props) =>
    props.isSelected ? "rgba(0, 0, 0, 0.1)" : "transparent"};

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .dark & {
    background-color: ${(props) =>
      props.isSelected ? "rgba(255, 255, 255, 0.2)" : "transparent"};

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;
