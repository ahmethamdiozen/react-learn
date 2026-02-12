function App(props) {
  return (
    <div className="App">
      {props.setup && <h1>Setup: {props.setup} </h1>}
      {props.name && <p>Name: {props.name} </p>}
      <hr />
    </div>
  );
}

export default App;