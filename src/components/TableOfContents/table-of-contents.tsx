import { FC } from "react";
import { Chapter } from "models";
import styled from "styled-components";
import { ToCItem } from "components/ToCItem";
import { nanoid } from "nanoid";

interface Props {
  chapters: Chapter[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const ToCContainer = styled.div`
  border: 1px solid var(--surface-300, #e0e0e0);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 14.2rem;
  height: 100vh;
  position: fixed;
  overflow-y: auto;
`;

const TableOfContents: FC<Props> = ({ chapters, selectedId, onSelect }) => {
  return (
    <ToCContainer>
      {chapters.map((chapter) => {
        if (!chapter.isVisible) return;
        return (
          <ToCItem
            key={nanoid()}
            chapter={chapter}
            selectedId={selectedId}
            onSelect={onSelect}
          />
        );
      })}
    </ToCContainer>
  );
};

export default TableOfContents;
