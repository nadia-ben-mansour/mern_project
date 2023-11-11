import { Button, Col, Form, Row } from "antd";
import React, { useContext } from "react";
import InputComponent from "../../components/InputComponent/InputComponent";
import classes from "./Register.module.css";
import GlobalContext from "../../contexts/GlobalContext";
import background from "../../assets/assurance.png";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { form } = useContext(GlobalContext);
  const navigate=useNavigate()
  const navigateLOgin=()=>{
    navigate("/login")
  }
  return (
    <div>
    <Row style={{display:"flex",justifyContent:"center",marginTop:"5rem"}}>
    <h1>Register</h1>
  </Row>
    <Form layout="vertical" className={classes.container} form={form}>
     

      <Row style={{ width: "30%" }}>
        <img src={background} style={{ height: "100%", width: "100%" }} />
      </Row>
      <Row gutter={24} style={{marginTop:"4rem"}}>
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
          collg={12}
          colMd={12}
          colxs={24}
        />
        <InputComponent
          form={form}
          name="téléphone"
          namePrefix="prefixTel"
          required={true}
          pattern={new RegExp(/^0?[67]\d{8}$/)}
          messageRemplissage="Veuillez remplir ce champ."
          messageVerification="Veuillez vérifier ce champ."
          label="Numéro de téléphone"
          size="large"
          className={classes.label}
          // addonAfter={<PhoneOutlined style={{ color: "black" }} />}
          inputType="phone"
          collg={12}
          colMd={12}
          colxs={24}
          defaultValue={"+33"}
        />
        <InputComponent
          from={form}
          name="password"
          required={true}
          size="large"
          type="password"
          label="Mot de passe"
          collg={12}
          colMd={12}
          colxs={24}
        />
        <InputComponent
          from={form}
          name="confirmPassword"
          required={true}
          size="large"
          type="password"
          label="Confirmer mot de passe"
          collg={12}
          colMd={12}
          colxs={24}
        />
        <Col style={{display:"flex",justifyContent:"center",width:"100%"}}>
        <Button className={classes.btn}>
            Register
        </Button></Col>
      </Row>
      
    </Form>
    <span style={{display:"flex",justifyContent:"center",marginTop:"5rem"}}>
        vous-avez déja un compte? <span style={{textDecoration:"underline",marginLeft:"0.5rem",cursor:"pointer"}} onClick={navigateLOgin}>Login</span>
      </span></div>
  );
};

export default Register;
