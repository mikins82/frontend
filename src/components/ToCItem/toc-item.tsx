import { FC, useEffect, useState } from "react";
import { Icon } from "components/Icon";
import {
  IconWrapper,
  TextWrapper,
  ToCItemContainer,
  Text,
} from "components/ToCItem/styled.ts";
import { Chapter } from "models";
import { ArrowIcon } from "assets/icons/ArrowIcon";

interface Props {
  chapter: Chapter;
  selectedId: string;
  onSelect: (id: string) => void;
}

const ToCItem: FC<Props> = ({ chapter, selectedId, onSelect }) => {
  const { id, level, name, isOpen } = chapter;
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selectedId === id);
  }, [selectedId]);

  const handleClick = (selectedId: string) => {
    setIsSelected((prev) => !prev);
    onSelect(selectedId);
  };

  return (
    <>
      <ToCItemContainer
        level={level}
        selected={isSelected}
        onClick={() => handleClick(id)}
      >
        <IconWrapper>
          {level !== 3 && (
            <Icon
              className="icon-instance"
              icon={<ArrowIcon className={isOpen ? "arrowDown" : ""} />}
              size="inherit"
            />
          )}
        </IconWrapper>
        <TextWrapper>
          <Text className="default">{name}</Text>
        </TextWrapper>
      </ToCItemContainer>
    </>
  );
};
export default ToCItem;
