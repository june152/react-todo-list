import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState("")
  const [items, setItems] = useState([])
  function preventSub(e) {
    e.preventDefault()
    if (item === "") return;
    setItems((cur) => [item, ...cur])
    setItem("")
  }
  return (
    <div>
      <h1>To Do List ({items.length})</h1>
      <form onSubmit={preventSub}>
        <input value={item} type="text" onChange={(e) => {setItem(e.target.value)}}></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
