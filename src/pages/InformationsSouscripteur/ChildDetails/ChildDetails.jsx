
import classes from "./ChildDetails.module.css";
import { Col, Collapse, Row } from "antd";
import InputComponent from "../../../components/InputComponent/InputComponent";

import { IconRemoveChild } from "../../../components/Icons/Icons";
const { Panel } = Collapse;

function ChildDetails(props) {
  const { remove, name, restField, getYears } = props;

  return (
    <Col lg={12}>
      <Collapse
        bordered={false}
        type="ghost"
        expandIconPosition="end"
        className={classes.container}
        defaultActiveKey={["1"]}
      >
        <Panel
          header={
            <div className={classes.headerStyle}>
              <span>
                Enfant
                <span style={{ marginLeft: "0.5rem" }}>{name + 1}</span>
              </span>
              <div
                onClick={() => {
                  remove(name);
                }}
              >
                {" "}
                <IconRemoveChild />
              </div>
            </div>
          }
          key="1"
          className={classes.panelStyle}
        >
          <Row>
            <InputComponent
              name={[name, `nom_enfant`]}
              required={true}
              messageRemplissage="Veuillez remplir le champ nom enfant."
              pattern={
                new RegExp("^(?!\\s)(?!.*\\s\\s)[\\p{L}_\\s'-]*(?<!\\s)$", "u")
              }
              messageVerification="Veuillez vérifier ce champ."
              label={`Nom enfant ${name + 1}`}
              size="large"
              inputType="input"
              className={classes.label}
              collg={24}
              colMd={24}
              colxs={24}
              restField={restField}
            />
            <InputComponent
              name={[name, `prenom_enfant`]}
              required={true}
              messageRemplissage="Veuillez remplir le champ prénom enfant."
              pattern={
                new RegExp("^(?!\\s)(?!.*\\s\\s)[\\p{L}_\\s'-]*(?<!\\s)$", "u")
              }
              messageVerification="Veuillez vérifier ce champ."
              label={`Prénom enfant ${name + 1}`}
              size="large"
              inputType="input"
              className={classes.label}
              collg={24}
              colMd={24}
              colxs={24}
              restField={restField}
            />
            <InputComponent
              name={[name, `lieu_naissance_enfant`]}
              required={true}
              messageRemplissage="Veuillez remplir le champ date de naissance."
              label={`Lieu de naissance enfant ${name + 1}`}
              size="large"
              className={classes.label}
              inputType="input"
              collg={24}
              colMd={24}
              colxs={24}
              restField={restField}
            />
            <InputComponent
              name={[name, `date_naissance_enfant`]}
              required={true}
              messageRemplissage="Veuillez remplir le champ date de naissance."
              label={`Date de naissance enfant ${name + 1}`}
              size="large"
              className={classes.label}
              inputType="input"
              type="date"
              collg={24}
              colMd={24}
              colxs={24}
              restField={restField}
              minDate={`${getYears(18)}-01-01`}
              maxDate={`${getYears(12)}-12-31`}
     
            />
          </Row>
        </Panel>
      </Collapse>
    </Col>

   
  );
}

export default ChildDetails;
