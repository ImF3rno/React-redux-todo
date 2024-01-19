import { Card, ListGroupItem, Button } from "react-bootstrap"
import { UncontrolledCollapse } from "reactstrap"

const TodoItem=({todo,remove,mark})=>{
    return(
        <ListGroupItem>
            <div className="row">
                <div className="col-md-7">
                    <span color="primary" className="d-flex" id={`toggler${todo.id}`} style={{marginBottom:"1rem"}}>
                        {todo.isComplete ? <p><del>{todo.title}</del></p>:<p>{todo.title}</p>}
                    </span>
                    <UncontrolledCollapse toggler={`#toggler${todo.id}`}>
                        <Card>
                            <Card.Body>
                                {todo.description}
                            </Card.Body>
                        </Card>
                    </UncontrolledCollapse>
                </div>
                <div className="col-md-5">
                    <Button variant="danger" onClick={()=>{remove(todo.id)}} style={{marginRight:"10px"}}>Pasalinti</Button>
                    <Button variant="success" onClick={()=>{mark(todo.id)}} style={{marginRight:"10px"}}>Uzbaigti</Button>
                </div>
            </div>
        </ListGroupItem>
    )
}

export default TodoItem