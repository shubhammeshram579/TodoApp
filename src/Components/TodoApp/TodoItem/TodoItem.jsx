import React from 'react'

const TodoItem = ({ todo ,onDelete,onEdit}) => {
  return (
    <div >
        <div style={{display:"flex",alignItems:"center" ,justifyContent:"start",gap:"20px",backgroundColor:"mediumpurple" ,height:"60px",width:"50vw" ,margin:"20px" ,borderRadius:"10px"}}>
          <h3 style={{textAlign:"start" ,width:"40vw",paddingLeft:"10px"}}>{todo.task}</h3>
          <button onClick={() => onEdit(todo)} style={{backgroundColor:"skyblue",padding:"1px 10px" ,borderRadius:"5px",border:"none" ,fontSize:"30px"}}><i style={{color:"#111"}} className="fa-regular fa-pen-to-square"></i></button>
          <button onClick={() => onDelete(todo.id)} style={{backgroundColor:"skyblue",padding:"1px 10px" ,borderRadius:"5px",fontSize:"30px",border:"none"}}><i className="fa-solid fa-trash text-danger"></i></button>
        </div>
    </div>
  )
}

export default TodoItem
// skyblue