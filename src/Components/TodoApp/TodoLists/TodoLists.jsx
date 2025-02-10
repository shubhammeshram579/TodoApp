import React ,{useState} from 'react'
import TodoItem from "../TodoItem/TodoItem.jsx"

const TodoLists = () => {
    const [todos ,setTodos] = useState([])
    const [inpute,setInpute] = useState("")
    const [editTodo, setEditTodo] = useState(null);


    // todoAdd functionality
    const Addtodo = () => {
        if (editTodo) {
          setTodos((prev) =>
            prev.map((todo) =>
              todo.id === editTodo.id ? { ...todo, task: inpute } : todo
            )
          );
          setEditTodo(null);
        } else {
          // Add a new todo
          const setTodo = { id: Math.random(), task: inpute };
          setTodos((prev) => [...prev, setTodo]);
        }
        setInpute("");
      };

    //   edit btn
      const onEdit = (todo) => {
        setInpute(todo.task);
        setEditTodo(todo); 
      };

    //   remove btn
      const onRemove = (id) => {
        setTodos(todos.filter((to) => (to.id !== id)))
    }


  return (
    <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"center", flexDirection:"column",paddingTop:"100px",backgroundColor:"#111"}}>
        <h3 style={{color:"#fff"}}>TODO APP</h3>
       
        <div style={{display:"flex" ,alignItems:"center" ,paddingBottom:"20px"}}>
        <input style={{height:"50px", width:"20vw" ,backgroundColor:"skyblue" ,borderRadius:"10px 0px 0px 10px"}} type="text" name='inpute' value={inpute}  onChange={(e) => setInpute(e.target.value)} placeholder='add todo list'/>
        <button style={{backgroundColor:"indianred" ,padding:"11px 20px"}} onClick={Addtodo}>{editTodo ? "Update" : "Add"}</button>
        </div>
        
        
        <div>
       
            {todos.map((utem,index) => (
                <TodoItem  key={utem.id} todo={utem} onDelete={onRemove} onEdit={onEdit} />
            ))}
        </div>
    </div>
  )
}

export default TodoLists
