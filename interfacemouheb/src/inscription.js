import React, { useState } from "react"
import {Form ,Button, Container} from "react-bootstrap"

function Inscription(){
    const [firstname,setfirstname]=useState("")
    const [lastname,setlastname]=useState("")
    const [age,setage]=useState("")
    const [birthday,setbirth]=useState("")
    const [sex,setsex]=useState("")
    function handlemail(event){
        const name=event.target.name
        switch(name){
            case "firstname":setfirstname(event.target.value)
            break
            case "lastname":setlastname(event.target.value)
            break
            case "age":setage(event.target.value)
            break
            case "birthday":setbirth(event.target.value)
            break
            case "sex":setsex(event.target.value)
            break
        }

    }


    return (
        <div>
            <Container>
            <Form>
                    <Form.Group controlId="name">
                                    <Form.Label>firstname</Form.Label>
                                    <Form.Control name="firstname" type="text" placeholder="Enter email" value={firstname} onChange={handlemail} />
                                   
                    </Form.Group>
                    <Form.Group controlId="name">
                                    <Form.Label>lastname</Form.Label>
                                    <Form.Control name="lastname" type="text" placeholder="Enter email" value={lastname} onChange={handlemail} />
                                   
                    </Form.Group>
                    <Form.Group controlId="name">
                                    <Form.Label>age</Form.Label>
                                    <Form.Control name="age" type="text" placeholder="Enter email" value={age} onChange={handlemail} />
                                    
                    </Form.Group>
                    <Form.Group controlId="name">
                                    <Form.Label>birthday</Form.Label>
                                    <Form.Control name="birthday" type="date" placeholder="Enter email" value={birthday} onChange={handlemail} />
                                    
                    </Form.Group>
                    <Form.Group controlId="name">
                                    <Form.Label>sex</Form.Label>
                                    <Form.Check type="radio" label="man" name="sex" value="1" onChange={handlemail} />
                                    <Form.Check type="radio" label="women" name="sex" value="0" onChange={handlemail}/>
                                    
                    </Form.Group>
             </Form>
             </Container>
        </div>

    )
}

export default Inscription