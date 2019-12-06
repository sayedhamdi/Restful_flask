import React, { useState } from "react"
import {Form ,Button} from "react-bootstrap"

function Inscription(){
    const [firstname,setfirstname]=useState("")
    const [lastname,setlastname]=useState("")
    function handlemail(){

    }


    return (
        <div>
            <Form>
                    <Form.Group controlId="name">
                                    <Form.Label>firstname</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" value={firstname} onChange={handlemail} />
                                   
                    </Form.Group>
                    <Form.Group controlId="name">
                                    <Form.Label>lastname</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" value={lastname} onChange={handlemail} />
                                   
                    </Form.Group>
                    <Form.Group controlId="name">
                                    <Form.Label>age</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" value={age} onChange={handlemail} />
                                    
                    </Form.Group>
                    <Form.Group controlId="name">
                                    <Form.Label>birthday</Form.Label>
                                    <Form.Control type="date" placeholder="Enter email" value={birthday} onChange={handlemail} />
                                    
                    </Form.Group>
                    <Form.Group controlId="name">
                                    <Form.Label>sex</Form.Label>
                                    <Form.Check type="radio" label="man" name="sex" value="1" />
                                    <Form.Check type="radio" label="women" name="sex" value="0"/>
                                    
                    </Form.Group>
             </Form>
        </div>

    )
}

export default Inscription