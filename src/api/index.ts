import { Chapter } from "models";
import { HOST_API } from "config-global.ts";

export const fetchChapters = async (): Promise<Chapter[]> => {
  try {
    const response = await fetch(HOST_API);
    const data = await response.json();
    return data.content.document;
  } catch (error) {
    throw error;
  }
};

export const parseRes = (chapters: Chapter[]): Chapter[] => {
  return chapters.map((chapter) => {
    return {
      ...chapter,
      isOpen: chapter.level === 1,
      isVisible: chapter.level === 1 || chapter.level === 2,
    };
  });
};
