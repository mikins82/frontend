import styled from "styled-components";
import { FC } from "react";
import { Chapter } from "models";
import { ChapterTitle } from "components/ChapterTitle";
import { ChapterContent } from "components/ChapterContent";
import { nanoid } from "nanoid";

const ContentWrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.625rem;
  flex: 1 0 0;
  border: 1px solid var(--surface-300, #e0e0e0);
  position: fixed;
  left: 17.5rem;
  height: 100vh;
  overflow-y: auto;
`;

const ChapterItem = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  chapters: Chapter[];
  selectedId: string;
  onSelect: (value: string) => void;
}

const Content: FC<Props> = ({ chapters, selectedId, onSelect }) => {
  return (
    <ContentWrapper>
      {chapters.map((chapter) => (
        <ChapterItem key={nanoid()}>
          <ChapterTitle title={chapter.name} />
          <ChapterContent
            isSelected={chapter.id === selectedId}
            content={chapter.content}
            onSelect={() => onSelect(chapter.id)}
          />
        </ChapterItem>
      ))}
    </ContentWrapper>
  );
};

export default Content;
