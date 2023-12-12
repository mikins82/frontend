import styled from "styled-components";
import { FC } from "react";

const StyledTitle = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;

  & .text-wrapper {
    color: var(--textprimary);
    font-family: var(--h-3-font-family);
    font-size: var(--h-3-font-size);
    font-style: var(--h-3-font-style);
    font-weight: var(--h-3-font-weight);
    letter-spacing: var(--h-3-letter-spacing);
    line-height: var(--h-3-line-height);
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }
`;

interface Props {
  title: string;
}

const ChapterTitle: FC<Props> = ({ title }) => {
  return (
    <StyledTitle>
      <div className="text-wrapper">{title}</div>
    </StyledTitle>
  );
};

export default ChapterTitle;
