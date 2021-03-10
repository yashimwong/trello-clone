import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { AppContainer } from "./styles";
import "./reset.css";

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do 1">
        <Card text="Hello there! This is a text props" />
      </Column>
      <Column text="To Do 2">
        <Card text="Hello there! This is a text props" />
      </Column>
      <Column text="To Do 3">
        <Card text="Hello there! This is a text props" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
