import React ,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export const AddTodo = (props) => {
    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("");
const submit=(e)=>
{
e.preventDefault();
if(!title || !desc){
    alert("Title or Description cannot be blank")
}
props.addTodo(title, desc);
}

    return (
        <div className='container my-3'>
            <h4 className='text-center'>Add A Todo</h4>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title}  onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter Title"  id='title'/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Desc</Form.Label>
                    <Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter Desc" id='desc' />
                </Form.Group>

                <Button type="submit" className='btn-sm btn-success'>
                    Add Todo
                </Button>
            </Form>
        </div>
    )
}
