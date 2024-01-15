// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setlist] = useState([]);
  const [text, setText] = useState();
  const [editmode, seteditmode] = useState(false);
  const [currentindex, setcurrentindex] = useState();

  function addItem() {
    const copylist = [...list];
    copylist.push(text);
    setlist(copylist);
    setText('');
  }

  function updateText(e) {
    const value = e.target.value;
    setText(value);
  }

  function deleteItem(index) {
    const copylist = [...list];
    copylist.splice(index, 1);
    setlist(copylist);
  }

  function editItem(index) {
    const value = list[index];
    setText(value);
    seteditmode(true);
    setcurrentindex(index);
  }

  function updateItem() {
    seteditmode(false);
    const copylist = [...list];
    copylist[currentindex] = text;
    setlist(copylist);
    setText('');
  }

  function deleteAll() {
    setlist([]);
  }

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <header className="App-header">
        <input
          placeholder="Enter a text"
          onChange={updateText}
          value={text}
          style={{ margin: '10px', padding: '5px' }}
        />
        {editmode ? (
          <button onClick={updateItem} style={{ margin: '6px' }}>
            Update Item
          </button>
        ) : (
          <button onClick={addItem} style={{ margin: '6px' }}>
            Add Todos
          </button>
        )}

        <button onClick={deleteAll} style={{ margin: '6px' }}>
          Delete All
        </button>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {list.map(function (item, index) {
            return (
              <li key={index} style={{ margin: '5px', padding: '5px', border: '1px solid #ddd' }}>
                {item}
                <button onClick={() => deleteItem(index)} style={{ marginLeft: '5px' }}>
                  Delete
                </button>
                <button onClick={() => editItem(index)} style={{ marginLeft: '5px' }}>
                  Edit
                </button>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
