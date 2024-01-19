import { ACTIVE_TODO, FINISHED_TODO } from "./filterTodosStatus";

const filterTodos=(todos,status)=>{
    switch(status){
        case ACTIVE_TODO:
            return todos.filter(todo=>todo.isComplete===false)
        case FINISHED_TODO:
            return todos.filter(todo=>todo.isComplete===true)
        default: 
            return todos;
    }
}

export default filterTodos