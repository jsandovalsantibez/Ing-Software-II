import React from "react"
import { navigate } from "gatsby"
import { handleLogin, inLoggedIn, isLoggedIn } from "../servicios/auth"
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"


export default function Login() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  function handleSubmit(event) {
    event.preventDefault()
    handleLogin({ username, password })
  }

 if (isLoggedIn()) {
   navigate(`/app/perfil`)
 }

  return (
    <>
      <h1>Iniciar Sesión</h1>
      <form           //ok
        method="post"
        onSubmit={event => {
          handleSubmit(event)
          navigate(`app/perfil`)
        }}
      >
        <Form.Group className="mb-3" >
        <Form.Label>Usuario </Form.Label>
        <Form.Control type="text" placeholder="Enter Rut" onChange={e => setUsername(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Contraseña </Form.Label>
        <Form.Control type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" > 
      Log in
      </Button>
    </form>
  </>
    
  )
}
