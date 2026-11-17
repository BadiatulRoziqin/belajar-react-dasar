function App() {
  const sayHello = (name) => {
    alert(`Halo, ${name}`);
  };

  return (
    <div>
      <button onClick={() => sayHello("ozi")}>Sapa Ozi</button>
      <button onClick={() => sayHello("code")}>Sapa Code</button>
    </div>
  );
}

export default App;