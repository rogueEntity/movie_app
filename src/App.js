function Food({favourite}) {
  console.log(favourite);
  return (
    <h1>I like {favourite}</h1>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="samgiopsal" />
      <Food favourite="chukumi" />
    </div>
  );
}

export default App;
