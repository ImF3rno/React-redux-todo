import Nav from "../nav/Nav";
import TodoList from "../todo/TodoList";
import AddTodo from "../todo/AddTodo";

const App=()=>{
  return(
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7 m-auto">
          <Nav/>
          <AddTodo/>
          <TodoList/>
        </div>
      </div>
    </div>
  )
}

export default App;
