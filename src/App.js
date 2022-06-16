import './App.css';
import {addGun} from './data/fauna-queries.js';

function addTodo(e) {
  const name = "glock";
  addGun("glock");
}

function App() {
  return (
    <> 
    <button onClick={addTodo}> Add </button>
    </>
  );
}

export default App;
