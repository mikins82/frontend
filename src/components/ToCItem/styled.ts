import styled, { css } from "styled-components";

const ToCItemContainer = styled.div<{ level: number; selected: boolean }>`
  display: flex;
  max-height: 1.25rem;
  padding: 0.3125rem 0;
  margin-left: 0.3125rem;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  background-color: ${({ selected }) =>
    selected ? "var(--primarymain)" : "var(--surfacewhite, #fff)"};

  color: ${({ selected }) =>
    selected ? "var(--surfacewhite, #fff)" : "var(--textprimary, #fff)"};

  ${(level) =>
    level &&
    css`
      &:hover {
        background-color: var(--primarymain);
        color: var(--surfacewhite);
      }
    `}

  cursor: pointer;
  padding-left: ${({ level }) => {
    if (level === 2) {
      return "1.06rem";
    }
    if (level === 3) {
      return "3.12rem";
    }
  }};
`;

const IconWrapper = styled.div`
  display: flex;
  padding: 0.125rem 0.25rem 0.125rem 0;
  align-items: flex-start;
`;

const TextWrapper = styled.div`
  display: flex;
  padding-left: 0.25rem;
  align-items: flex-start;
  gap: 0.375rem;
  flex: 1 0 0;
`;

const Text = styled.div`
  overflow: hidden;
  color: inherit;
  font-feature-settings:
    "clig" off,
    "liga" off;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export { Text, TextWrapper, IconWrapper, ToCItemContainer };
