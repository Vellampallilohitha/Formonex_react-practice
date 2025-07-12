function App() {
  const fruits = [
    { name: "Apple", rate: 100 },
    { name: "Banana", rate: 50 },
    { name: "Orange", rate: 80 },
    { name: "Watermelon", rate: 60 }
  ];

  // Sort fruits alphabetically by name
  const sortedFruits = [...fruits].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h1>FRUIT LIST</h1>
      <ol>
        {sortedFruits.map((fruit) => (
          <li key={fruit.name}>{fruit.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;