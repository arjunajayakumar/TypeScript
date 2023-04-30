import { useState } from "react";

import Counter from "./Components/Counter";
import Heading from "./Components/Heading";
import Section from "./Components/Section";
import List from "./Components/List";

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <Heading title={"Hello"} />
      <Section>This is my section</Section>
      <Counter setCount={setCount}>Count is {count} </Counter>
      <List
        items={["Coffee", "Tacos", "Code"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
