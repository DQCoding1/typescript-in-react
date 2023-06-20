import "./App.css";
import Container from "./components/Container";
import Heading from "./components/Heading";
import HeadingWithChildren from "./components/HeadingWithChildren";
import List from "./components/List";

function App() {
  return (
    <main>
      {/* handle props */}
      <Heading title="Typescript in React" />

      {/* handle children  */}
      <HeadingWithChildren>
        <p>Heading with children</p>
      </HeadingWithChildren>

      {/* handle default props */}
      <Container>
        <p>container</p>
      </Container>

      {/* handle generics  */}
      <List
        items={["bread", "chocolate", "juice"]}
        render={(item: string) => <h2>{item.toUpperCase()}</h2>}
      />
    </main>
  );
}

export default App;
