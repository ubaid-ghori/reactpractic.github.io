// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

// ... (previous code)

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  function addItem() {
    if (!text) return; // Don't add empty items
    const copyList = [...list];
    if (editIndex !== null) {
      // If editIndex is not null, update the existing item
      copyList[editIndex] = text;
      setEditIndex(null); // Reset editIndex after updating
    } else {
      // If editIndex is null, add a new item
      copyList.push(text);
    }
    setList(copyList);
    setText(''); // Clear the input after adding/updating an item
  }

  function deleteItem(index) {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  }

  function editItem(index) {
    setEditIndex(index);
    setText(list[index]); // Set the input value to the item being edited
  }

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder='enter a text' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addItem}>Add Todos</button>
        <ul>
          {list.map(function (item, index) {
            return (
              <li key={index}>
                {item}
                <button onClick={() => deleteItem(index)}>Delete</button>
                <button onClick={() => editItem(index)}>Edit</button>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;

