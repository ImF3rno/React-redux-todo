import { Button,ButtonGroup } from "react-bootstrap"
import { filterTodo } from "../../store/actions/TodoActions"
import { connect } from "react-redux"
import { ACTIVE_TODO, FINISHED_TODO } from "../../utilities/filterTodosStatus"
import { ALL_TODO } from "../../store/actions/types"

const Nav=(props)=>{
    const {filterTodo}=props

    return(
        <ButtonGroup style={{marginLeft:'156px'}}>
            <Button variant="primary" onClick={()=>{filterTodo(ALL_TODO)}}>Visos uzduotys</Button>
            <Button variant="danger" onClick={()=>{filterTodo(ACTIVE_TODO)}}>Aktyvios</Button>
            <Button variant="success" onClick={()=>{filterTodo(FINISHED_TODO)}}>Uzbaigtos</Button>
        </ButtonGroup>
    )
}

export default connect(null,{filterTodo})(Nav)