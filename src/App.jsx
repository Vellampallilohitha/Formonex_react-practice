import fruits from "./fruits.json";


function App() {
  return (
    <div>
      <h1>Fruit Groups</h1>

      {Object.entries(fruits).map(([groupName, fruitList]) => (
        <div key={groupName}>
          <h2>{groupName.toUpperCase()}</h2>
          <ul>
            {fruitList.map((fruit) => (
              <li key={fruit.id}>
                {fruit.name} - ₹{fruit.rate}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
console.log("fruits added");

export default App;