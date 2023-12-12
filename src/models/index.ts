export interface Chapter {
  name: string;
  id: string;
  level: number;
  parent_id: string;
  content: string;
  isVisible?: boolean;
  isOpen: boolean;
}

export interface Content {
  document: Chapter[];
}
