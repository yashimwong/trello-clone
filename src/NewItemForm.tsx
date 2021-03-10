import { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";

interface NewItemProps {
  onAdd(text: string): void;
}

const NewItemForm = (props: NewItemProps) => {
  const [text, setText] = useState("");
  const { onAdd } = props;

  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={(e) => setText(e.target.value)} />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
