import { useState } from "react"
import { Button, Modal, Form, FormGroup } from "react-bootstrap"
import { connect } from "react-redux"
import { addTodo } from "../../store/actions/TodoActions"

const AddTodo=(props)=>{
    const [modal,setModal]=useState(false);
    const [task,setTask]=useState({
        title:"",
        description:""
    })

    const handleChange=(e)=>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    }    

    const handleSubmit=(e)=>{
        e.preventDefault();
        let id=parseInt(Date.now())
        const todo={
            ...task,
            isComplete:false,
            id:id
        }
        props.addTodo(todo)
        setModal(false)
    }

    return(
        <div>
            <Button style={{marginTop:"-65px"}} variant="danger" onClick={()=>{setModal(true)}}>Nauja uzduotis</Button>
            <Modal show={modal} onHide={()=>{setModal(false)}}>
                <Modal.Header>Sukurti nauja uzduoti</Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <FormGroup>
                            <Form.Label>Pavadinimas</Form.Label>
                            <Form.Control type="text" required value={task.title} name="title" onChange={handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Aprasymas</Form.Label>
                            <Form.Control type="textarea" style={{height:"100px"}} required value={task.description} name="description" onChange={handleChange}/>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>{setModal(false)}}>Uzdaryti</Button>
                        <Button variant="primary" type="submit">Saugoti</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default connect(null,{addTodo})(AddTodo)