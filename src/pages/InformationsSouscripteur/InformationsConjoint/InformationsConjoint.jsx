import { Col, Collapse, Form, Input, Row, Space } from "antd";
import React, { useContext } from "react";
import InputComponent from "../../../components/InputComponent/InputComponent";
import classes from "./InformationsConjoint.module.css";
import { PhoneOutlined } from "@ant-design/icons";
import GlobalContext from "../../../contexts/GlobalContext";
import { IconRemoveChild } from "../../../components/Icons/Icons";

const { Panel } = Collapse;

const InformationsConjoint = (props) => {
  const { getYears, form } = props;
  const { setAssurerProches, setGlobalData, globalData } =
    useContext(GlobalContext);

  return (
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
            <span>Conjoint(e)</span>
            <div
              onClick={() => {
                setAssurerProches("Moi seulement");
                setGlobalData({
                  ...globalData,
                  assurer: "Moi seulement",
                  nom_conjoint: "",
                  civilteConjoint: "",
                  prenom_conjoint: "",
                  email_conjoint: "",
                  telephone_conjoint: "",
                  date_naissance_conjoint: "",
                  lieu_naissance_conjoint: "",
                  prefixTelConjoint: "+33",
                });
                form.setFieldsValue({
                  ...form.getFieldsValue(),
                  nom_conjoint: "",
                  civilteConjoint: "",
                  prenom_conjoint: "",
                  email_conjoint: "",
                  telephone_conjoint: "",
                  date_naissance_conjoint: "",
                  lieu_naissance_conjoint: "",
                  prefixTelConjoint: "+33",
                });
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
        <Row gutter={24}>
          <InputComponent
            name="civilteConjoint"
            label="Civilité conjoint"
            messageRemplissage="Veuillez remplir ce champ."
            required="true"
            inputType="select"
            options={[
              {
                value: "Mme.",
                label: "Mme.",
              },
              {
                value: "M.",
                label: "M.",
              },
            ]}
            collg={12}
            colMd={12}
            colxs={24}
            className={classes.label}
          />
          <InputComponent
            name="nom_conjoint"
            required={true}
            messageRemplissage="Veuillez remplir ce champ."
            pattern={
              new RegExp("^(?!\\s)(?!.*\\s\\s)[\\p{L}_\\s'-]*(?<!\\s)$", "u")
            }
            messageVerification="Veuillez vérifier ce champ."
            label="Nom conjoint"
            size="large"
            inputType="input"
            className={classes.label}
            collg={12}
            colMd={12}
            colxs={24}
          />
          <InputComponent
            name="prenom_conjoint"
            required={true}
            messageRemplissage="Veuillez remplir ce champ."
            pattern={
              new RegExp("^(?!\\s)(?!.*\\s\\s)[\\p{L}_\\s'-]*(?<!\\s)$", "u")
            }
            messageVerification="Veuillez vérifier ce champ."
            label="Prénom conjoint"
            size="large"
            className={classes.label}
            inputType="input"
            collg={12}
            colMd={12}
            colxs={24}
          />
          <InputComponent
            name="lieu_naissance_conjoint"
            required={true}
            messageRemplissage="Veuillez remplir ce champ."
            label="Lieu de naissance conjoint"
            size="large"
            className={classes.label}
            inputType="input"
            collg={12}
            colMd={12}
            colxs={24}
          />
          <InputComponent
            name="date_naissance_conjoint"
            required={true}
            messageRemplissage="Veuillez remplir ce champ."
            label="Date de naissance conjoint"
            size="large"
            className={classes.label}
            inputType="input"
            type="date"
            minDate={`${getYears(65)}-01-01`}
            maxDate={`${getYears(18)}-12-31`}
            collg={12}
            colMd={12}
            colxs={24}
          />
          <InputComponent
            name="email_conjoint"
            required={true}
            pattern={new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)}
            messageRemplissage="Veuillez remplir ce champ."
            messageVerification="Veuillez vérifier ce champ."
            label="Adresse e-mail conjoint"
            size="large"
            className={classes.label}
            inputType="input"
            collg={12}
            colMd={12}
            colxs={24}
          />
          {/* <Col xs={24} md={24} lg={12} xl={12}> */}

          <InputComponent
            form={form}
            name="telephone_conjoint"
            namePrefix="prefixTelConjoint"
            required={true}
            pattern={new RegExp(/^0?[67]\d{8}$/)}
            messageRemplissage="Veuillez remplir ce champ."
            messageVerification="Veuillez vérifier ce champ."
            label="Numéro de téléphone conjoint"
            size="large"
            className={classes.label}
            addonAfter={<PhoneOutlined style={{ color: "black" }} />}
            inputType="phone"
            collg={12}
            colMd={12}
            colxs={24}
            defaultValue={"+33"}
          />
        </Row>
      </Panel>
    </Collapse>
  );
};

export default InformationsConjoint;
