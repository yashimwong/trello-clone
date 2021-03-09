import { Column } from "./Column";
import { Card } from "./Card";
import { AppContainer } from "./styles";

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
    </AppContainer>
  );
};

export default App;
