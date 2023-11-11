import React, { useContext } from 'react'
import classes from "./Login.module.css"
import { Button, Col, Form, Row } from 'antd'
import background from "../../assets/assurance.png"
import InputComponent from '../../components/InputComponent/InputComponent'
import GlobalContext from '../../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
const {form}=useContext(GlobalContext)
const navigate=useNavigate()
const navigateRegister=()=>{
  navigate("/")
}
  return (
    <div>
    <Row style={{display:"flex",justifyContent:"center",marginTop:"5rem"}}>
    <h1>Login</h1>
  </Row>
    <Form layout="vertical" className={classes.container}>
     

      <Row style={{ width: "30%" }}>
        <img src={background} style={{ height: "100%", width: "100%" }} />
      </Row>
      <Row gutter={24} style={{marginTop:"3rem",marginLeft:"5rem"}}>
        <InputComponent
          name="souscripteur_email"
          required={true}
          messageRemplissage="Veuillez remplir ce champ."
          pattern={new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)}
          label="Adresse e-mail "
          size="large"
          className={classes.label}
          type="email"
          messageVerification="Veuillez vérifier ce champ."
          inputType="input"
          collg={24}
          colMd={24}
          colxs={24}
        />
       
        <InputComponent
          from={form}
          name="password"
          required={true}
          size="large"
          type="password"
          label="Mot de passe"
          collg={24}
          colMd={24}
          colxs={24}
        />
<Col style={{display:"flex",justifyContent:"center",width:"100%"}}>
        <Button className={classes.btn}>
            Login
        </Button></Col>
       
      </Row>
      
    </Form>
    <span style={{display:"flex",justifyContent:"center",marginTop:"5rem"}}>
        vous n'avez pas un compte? <span style={{textDecoration:"underline",marginLeft:"0.5rem",cursor:"pointer"}} onClick={navigateRegister}>Register</span>
      </span></div>
  )
}

export default Login