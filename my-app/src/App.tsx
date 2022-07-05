import React from 'react';
import './App.css';
import NameNationalItem from './components/NameNationalItem';


type ITodo = { 
  // Our todo should have the title and completed fields and the id field to 
  id: number;
  title: string;
  completed: boolean;
}

type ITodos = {
  todos: ITodo[], // Our Todos is an array of Todo
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
      <ul>
    
  
    </ul>
      </main>
    </div>
  );
}

export default App;
