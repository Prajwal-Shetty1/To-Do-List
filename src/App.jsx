import { useState } from "react";

const App = () => {
     const [title,setTitle] = useState('');

     
      const [todos, setTodos] = useState(() => {
  const localTodos = localStorage.getItem('todos');
  return localTodos ? JSON.parse(localTodos) : [];
});
     const addToDo = () => {
          console.log(title);

     const newTodo = {title , completed : false};
     const updatedTodo = [...todos , newTodo];
     setTodos(updatedTodo);
     setTitle('');
     localStorage.setItem('todos',JSON.stringify(updatedTodo))
     }
     const markDone = (todoItem) => {
            console.log(todoItem);
            const updatedTodos = todos.map((todoElement)=>{
              if (todoElement.title === todoItem.title){
                return {title: todoElement.title , completed:true}
                
              }
              return todoElement;
            })
            setTodos(updatedTodos);
            localStorage.setItem('todos',JSON.stringify(updatedTodos));
     }
  return(
    <div className="main-heading">
    <h1 className="title">React Todos</h1>
    <div className="todos">
     <div className="input-todo">
     <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter ToDo title" />
     <button onClick={ addToDo}>Add Now</button>
     <button onClick={() => { localStorage.clear()
      setTodos([]);
     }}>Clear Todos</button>
     </div>
       {todos.map((todo, index) => (                 
  <div key={index} className="todo-item">
    <h2 style={{textDecoration:todo.completed ? 'Line-through':''}}>{todo.title}</h2>
    <button onClick={()=>markDone(todo)} className="todo-btn">{todo.completed ? 'completed' : 'MarkDone'}</button>
  </div>
))}
     
    </div>
    </div>
  )
}
export default App;
