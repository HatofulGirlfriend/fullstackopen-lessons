import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  const Display = (props) => {
    return <div>{props.counter}</div>;
  };

  const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>;
  };

  console.log("rendering...", counter);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreseByOne} text="minus" />
    </div>
  );
};

export default App;
