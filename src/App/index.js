//import './App.css';
import React  from "react";
import AppUI from "./appUI";
import { TodoProvider } from "../TodoContext";
/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];  */



function App() {

  return (
    
      <TodoProvider>
        <AppUI />
      </TodoProvider>
  
  
  )
  
}

export default App;