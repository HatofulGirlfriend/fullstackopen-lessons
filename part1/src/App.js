const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const friends = [
    {name: "Miteux", age: 7},
    {name: "Patrice", age: 240},
  ]

  return (
    <>
   <p>{friends[0].name} {friends[0].age}</p>
   <p>{friends[1].name} {friends[1].age}</p>
    </>
  );
};

export default App;
