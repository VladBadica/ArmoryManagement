import './App.css';
import {addGun, init} from './data/fauna-queries.js';

function addTodo(e) {
  const name = "glock";
  init();
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
