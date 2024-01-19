import { ADD_TODO, MARK_DONE, REMOVE_TODO, FILTER_TODO } from "./types";

export const addTodo=(data)=>{
    return{
        type:ADD_TODO,
        payload:data
    }
}

export const markDone=(id)=>{
    return{
        type:MARK_DONE,
        payload:id
    }
}

export const filterTodo=(activeFilter)=>{
    return{
        type:FILTER_TODO,
        payload:activeFilter
    }
}

export const deleteTodo=(id)=>{
    return{
        type:REMOVE_TODO,
        payload:id
    }
}