import { FC } from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  width: 100rem;

  & .typography {
    color: #000000de;
    font-family: var(--body-1-font-family);
    font-size: var(--body-1-font-size);
    font-weight: var(--body-1-font-weight);
    letter-spacing: 0;
    line-height: normal;
    width: 100rem;
    cursor: pointer;
  }

  & .selected {
    background-color: var(--surface-300, #e0e0e0);
  }
`;

interface Props {
  content: string;
  isSelected: boolean;
  onSelect: () => void;
}
const ChapterContent: FC<Props> = ({
  content,
  isSelected = false,
  onSelect,
}) => {
  return (
    <StyledContent onClick={onSelect}>
      <p className={isSelected ? "typography selected" : "typography"}>
        {content}
      </p>
    </StyledContent>
  );
};
export default ChapterContent;
