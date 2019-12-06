import React, { useState } from "react" 
import {Form , Button} from "react-bootstrap";
import axios from "axios"



const Login= () =>{
    const [mail,setmail]=useState("")
    const [mdp,setmdp]=useState("")
    function handlemail(event){
        setmail(event.target.value)

    }
    function handlmdp(event){
        setmdp(event.target.value)

    }
    function envoi(){
        axios({
            method: 'post',
            url: '/login',
            data: {
              mail: mail,
              mdp: mdp
            }
          });

    }
    return(
        <div className="container">
            <br></br>
            <br></br>
        
            <br></br>
            <br></br>
        
            <Form>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={mail} onChange={handlemail} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={mdp} onChange={handlmdp} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={envoi}>
                        Submit
                    </Button>
            </Form>
        </div>
    )
}
export default Login;
