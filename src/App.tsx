import { useEffect, useState } from "react";
import { Chapter } from "models";
import { parseRes, fetchChapters } from "api";
import { TableOfContents } from "components/TableOfContents";
import { Content } from "components/Content";
import styled from "styled-components";

const ContentPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1600px;
  height: 100vh;
  padding: 1.5rem;
  align-items: flex-start;
  gap: 1.5rem;
`;

const App = () => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");

  useEffect(() => {
    fetchChapters()
      .then((res) => {
        const chapterModel = parseRes(res);
        setChapters(chapterModel);
        setSelectedId(chapterModel[0].id);
      })
      .catch((error) => console.error(error));
  }, []);

  const toggleChildrenChaptersVisibility = (parentId: string) => {
    setChapters((prev) => {
      return prev.map((chapter) => {
        if (chapter.id === parentId) {
          return { ...chapter, isOpen: !chapter.isOpen };
        }
        if (chapter.parent_id === parentId) {
          return {
            ...chapter,
            isVisible: !chapter.isVisible,
          };
        } else {
          return chapter;
        }
      });
    });
  };

  const handleSelect = (id: string) => {
    setSelectedId(id);
    toggleChildrenChaptersVisibility(id);
  };

  const handleChapterSelect = (id: string) => {
    setSelectedId(id);
  };

  if (!chapters.length) return null;

  return (
    <ContentPage>
      <TableOfContents
        selectedId={selectedId}
        chapters={chapters}
        onSelect={handleSelect}
      />
      <Content
        selectedId={selectedId}
        chapters={chapters}
        onSelect={handleChapterSelect}
      />
    </ContentPage>
  );
};

export default App;
