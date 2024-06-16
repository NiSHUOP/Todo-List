import './App.css'
import React, { useState } from "react";
import Footer from "./Footer";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
//Add list item
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };
//Handle delete Item 
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
//Handle delete all
  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const delAll = () => {
    setTodos([]);
  }


  return (
    <>
    <div className = "container">
      <div >
        {/* Heading */}
      <h1 className = "text-center fw-bolder mt-5 mb-4">ToDo List</h1>

        <div className='row justify-content-center'>
        <div className='col-lg-4 col-md-9 col-sm-9 col-9' >
                <main className="form-signin m-auto">
                  <form>
        {/* input section to add item */}
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="What need to be done ?" value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)} />
                      <button className="btn btn-dark" type="button" onClick={handleAddTodo} >Add List</button>
                    </div>
                    <div className = "text-center">
                      {/* items are created */}
                      <ul>
                        {todos.map((todo, index) => (
                          <li
                            key={index}
                            style={{
                              display: "flex",
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={todo.checked}
                                onChange={() => handleToggleTodo(index)}
                              />
                              <span
                                className="form-check-label ms-3"
                                style={{
                                  textDecoration: todo.checked ? "line-through" : "none",
                                }}
                              >
                                {todo.text}
                              </span>
                            </div>
                            {/* Delete all button */}
                            <div >
                              <i className="bi bi-x-lg ms-5" onClick={() => handleDeleteTodo(index)} role="button" ></i>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                     
                        <a type="button" className="btn btn-outline-primary " onClick = {delAll}><i className="bi bi-trash3"></i> Delete All</a>
                     
                  </form>
                </main>
          </div>
        </div> 
      </div>  
    </div>
{/* Adding Footer Section */}
    <Footer />
    </>
  );
};

export default App;