
function App() {
    const fruits = ["Apple", "Banana", "Orange", "Watermelon"];
    return(
        <div>
            <h1>FRUIT LIST</h1>
            <ol>{fruits.map((fruit,index) => (<li key = {index}>{fruit}</li>))}
            </ol>
        </div>
    );
}

export default App;