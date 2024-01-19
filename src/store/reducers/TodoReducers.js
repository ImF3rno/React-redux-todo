import { ADD_TODO, MARK_DONE, REMOVE_TODO, FILTER_TODO, ALL_TODO } from "../actions/types";

const init={
    todos:[
    {
            title:"Task 1",
            description:"Task 1 description",
            isComplete:false,
            id:123
    },
    {
        title:"Task 2",
        description:"Task 2 description",
        isComplete:true,
        id:1234
    }
],
    filter:ALL_TODO
}

const removeTodo=(todos,id)=>{
    return todos=todos.filter(todo=>todo.id!==id)
}

const Todos=(state=init,action)=>{
    console.log(state.todos);
    switch(action.type){
        case ADD_TODO:{
            let todos=[...state.todos];
            todos=[action.payload,...todos];
            return{
                ...state,
                todos
            }
        }
        case MARK_DONE:{
            let todos=[...state.todos];
            todos=todos.map(todo=>{
                if(todo.id===action.payload){
                    todo.isComplete=!todo.isComplete
                }
                return todo
            })
            return {
                ...state,
                todos
            }
        }
        case FILTER_TODO:{
            return{
                ...state,
                filter:action.payload
            }
        }
        case REMOVE_TODO:{
            const todos=removeTodo(state.todos,action.payload)
            return{
                ...state,
                todos
            }
        }
        default:
            return state
    }
}

export default Todos