import React, { useState } from "react";
import "./TodoAdv.css";

function TodoAdv() {
  let [text, setText] = useState("");
  let [todo, setTodo] = useState([]);
  let [edit, setEdit] = useState("");
  function textHandler(e) {
    setText(e.target.value);
  }
  function submitHandler() {
    if (text.length === 0) {
      alert("not possible");
    } 
    else {
      let obj = {
        id: new Date().getMilliseconds(),
        msg: text,
        step:1,
      };
        //edit
      if (edit) {
        setTodo((pre) => {
          return pre.map((data) => {
            if (data.id === edit.id) {
              data.msg = text;
            }
            return data;
          });
        });
        setEdit(0);
      }
      //add
      else {
        setTodo((prev) => {
          return [...prev, obj];
        });
      }

      setText("");
    document.getElementById("btn").innerText="Add a new task"
    document.getElementById("btn").classList.remove("bg-warning")
      
    }
  }
  //deletion

  function deleteHandler(id) {
    console.log(id);
    setTodo((pre) => {
      return pre.filter((data) => {
        return data.id !== id;
      });
    });
  }
  
  //edit logic
  function editHandler(id) {
    let x = todo.find((data) => {
      return data.id === id;
    });
    setEdit(x);
    setText(x.msg);
    document.getElementById("btn").innerText="Edit current task"
    document.getElementById("btn").classList.add("bg-warning")
    
  }

  //next step
  function nextHandler(i){
    console.log("inside next id=",i)
    console.log("inside next todo=",todo);
       
    let x=todo.map((ele)=>{
        if(ele.id===i && ele.step<3) 
        {
          ele.step=ele.step+1
        }  
        return ele;
        })
      setTodo(x)
   
    
  }
  //prev step
  function preHandler(i){
    console.log("inside next id=",i)
    console.log("inside next todo=",todo);
    let x=todo.map((ele)=>{
      if(ele.id===i && ele.step>1) 
      {
        ele.step=ele.step-1
      }  
      return ele;
      })
  setTodo(x)
  }


  
  return (
    <>
      <div className="container-fluid bg-secondary">
        <h1 className="bg-warning " align="center">Advanced Todo List</h1>
        <div className="row bg-prmary p-2 m-2">
          <input type="text"placeholder="Enter your text"onChange={textHandler}value={text}/>
          <button className="bg-info" id="btn" onClick={submitHandler} >Add a new task</button>
        </div>
        <div className="row d-flex">
          <div className="col flex-column  step1">
            <h1 align="center">STEP-1</h1>
            {todo.length === 0 ? (
              <h1>no data</h1>
            ) : (
              todo.filter((data)=>{return data.step===1}).map((data) => {
                return (
                  <div className="d-flex  flex-column m-2 p-2 bg-danger" key={data.id}>
                  <h4 align="center">MSG : {data.msg}  </h4> 
                   <button className="btn btn-primary p-1 m-1"onClick={() => {deleteHandler(data.id);}}>del</button>
                   <button className="btn btn-info p-1 m-1"onClick={() => {editHandler(data.id);}}>edit</button>
                  <div className="d-flex justify-content-between ">
                  <button className="btn btn-primary p-1 m-1" onClick={()=>{preHandler(data.id)}}>prev</button>
                  <button className="btn btn-primary p-1 m-1"onClick={()=>{nextHandler(data.id)}}>next</button> 
                  </div>
                </div>
                );
              })
            )}
          </div>
          <div className="col flex-column step2">
            <h1 align="center">STEP-2</h1>
           { todo.filter((data)=>{return data.step===2}).map((data) => {
                return (
                  <div className="d-flex  flex-column m-2 p-2 bg-warning" key={data.id}>
                  <h4 align="center">MSG : {data.msg}  </h4> 
                   <button className="btn btn-primary p-1 m-1"onClick={() => {deleteHandler(data.id);}}>del</button>
                   <button className="btn btn-info p-1 m-1"onClick={() => {editHandler(data.id);}}>edit</button>
                  <div className="d-flex justify-content-between ">
                  <button className="btn btn-primary p-1 m-1" onClick={()=>{preHandler(data.id)}}>prev</button>
                  <button className="btn btn-primary p-1 m-1"onClick={()=>{nextHandler(data.id)}}>next</button> 
                  </div>
                </div>
                )})}
          </div>
          <div className="col flex-column   step3">
            <h1 align="center">STEP-3</h1>
            { todo.filter((data)=>{return data.step===3}).map((data) => {
                return (
                      <div className="d-flex  flex-column m-2 p-2 bg-success" key={data.id}>
                        <h4 align="center">MSG : {data.msg}  </h4> 
                         <button className="btn btn-primary p-1 m-1"onClick={() => {deleteHandler(data.id);}}>del</button>
                         <button className="btn btn-info p-1 m-1"onClick={() => {editHandler(data.id);}}>edit</button>
                        <div className="d-flex justify-content-between ">
                        <button className="btn btn-primary p-1 m-1" onClick={()=>{preHandler(data.id)}}>prev</button>
                        <button className="btn btn-primary p-1 m-1"onClick={()=>{nextHandler(data.id)}}>next</button> 
                        </div>
                      </div>
                )})}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoAdv;
