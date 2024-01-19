import TodoItem from "./TodoItem"
import { connect } from "react-redux"
import { markDone, deleteTodo } from "../../store/actions/TodoActions"
import filterTodos from "../../utilities/filterTodos"
import { ListGroup } from "react-bootstrap"

const TodoList=(props)=>{
    let {todos,markDone,status,deleteTodo}=props
    if(todos.length===0) return <p>Nera ivestu uzduociu</p>
    let filterTodoList=filterTodos(todos,status)
    console.log(props)
    return(
        <ListGroup>
            {filterTodoList.map(todo=>
                <TodoItem
                todo={todo}
                key={todo.id}
                mark={markDone}
                remove={deleteTodo}/>
            )}
        </ListGroup>
    )
}

const mapDispatchToProps=state=>({
    todos:state.todos.todos,
    status:state.todos.filter
})

export default connect(mapDispatchToProps,{markDone, deleteTodo})(TodoList)