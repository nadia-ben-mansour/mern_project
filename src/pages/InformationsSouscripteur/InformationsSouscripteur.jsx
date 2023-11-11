import { useContext, useEffect, useState } from "react";
import InputComponent from "../../components/InputComponent/InputComponent";
import classes from "./InformationsSouscripteur.module.css";
import { PhoneOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Form } from "antd";
import ChildDetails from "./ChildDetails/ChildDetails";
import GlobalContext from "../../contexts/GlobalContext";
import axios from "axios";
import FormHeader from "../../components/FormHeader/FormHeader";
import { IconAdd } from "../../components/Icons/Icons";
import dayjs from "dayjs";
import InformationsConjoint from "./InformationsConjoint/InformationsConjoint";
const InformationsSouscripteur = (props) => {
  const { form } = props;
  const {
    handleAddChild,
    assurerProches,
    setAssurerProches,
    setGlobalData,
    globalData,
  } = useContext(GlobalContext);
  const [villes, setVilles] = useState([]);

  const getYears = (years) => {
    const effetDate = dayjs()
      .add(1, "month")
      .startOf("month")
      .format("YYYY-MM-DD");
    const yearEffet = dayjs(effetDate).year();
    return yearEffet - years;
  };
  const getVilles = (code_postal) => {
    if (code_postal.length > 4) {
      const URL = import.meta.env.VITE_API_URL_AS;
      let ville_names = [];

      axios
        .post(`${URL}/groupe_villes/get_villes_by_code_postal`, {
          postal_code: code_postal,
        })
        .then((res) => {
          if (res.data == "list index out of range") {
            setVilles([]);

            form.setFieldsValue({
              ...form.getFieldsValue(),
              _ville: "",
            });
          } else {
            res.data.villes.forEach((ville) => {
              let new_ville = {
                value: ville?.nom_comm,
                label: ville?.nom_comm,
              };
              if (!ville_names.find((val) => val.label == ville?.nom_comm)) {
                ville_names.push(new_ville);
              }
            });
            setVilles(ville_names);
            form.setFieldsValue({
              ...form.getFieldsValue(),
              _ville: ville_names[0]?.value,
            });
          }
        })
        .catch((err) => console.error(err));
    }
  };
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <FormHeader name="Informations du souscripteur" />
      <Row gutter={24}>
        <InputComponent
          name="civilite"
          messageRemplissage="Veuillez remplir ce champ."
          label="Civilité"
          inputType="select"
          required="true"
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
          name="nom"
          required={true}
          messageRemplissage="Veuillez remplir ce champ."
          pattern={
            new RegExp("^(?!\\s)(?!.*\\s\\s)[\\p{L}_\\s'-]*(?<!\\s)$", "u")
          }
          messageVerification="Veuillez vérifier ce champ."
          label="Nom"
          size="large"
          inputType="input"
          className={classes.label}
          collg={12}
          colMd={12}
          colxs={24}
        />
        <InputComponent
          name="prenom"
          required={true}
          messageRemplissage="Veuillez remplir ce champ."
          pattern={
            new RegExp("^(?!\\s)(?!.*\\s\\s)[\\p{L}_\\s'-]*(?<!\\s)$", "u")
          }
          messageVerification="Veuillez vérifier ce champ."
          label="Prénom"
          size="large"
          className={classes.label}
          inputType="input"
          collg={12}
          colMd={12}
          colxs={24}
        />

        <InputComponent
          name="_adresse"
          required={true}
          messageRemplissage="Veuillez remplir ce champ."
          label="Adresse"
          size="large"
          className={classes.label}
          inputType="input"
          collg={12}
          colMd={12}
          colxs={24}
        />

        <InputComponent
          name="_code_postal"
          required={true}
          messageRemplissage="Veuillez remplir ce champ."
          label="Code Postal"
          size="large"
          messageVerification="Veuillez vérifier ce champ."
          pattern={new RegExp(/^.{5,}$/)}
          className={classes.label}
          type="number"
          inputType="input"
          collg={12}
          colMd={12}
          colxs={24}
          onBlur={getVilles}
        />

        <InputComponent
          name="_ville"
          required={true}
          messageRemplissage="Veuillez remplir ce champ."
          label="Ville"
          size="large"
          className={classes.label}
          inputType="select"
          collg={12}
          colMd={12}
          colxs={24}
          options={villes}
        />

        <InputComponent
          name="pays"
          required={false}
          messageRemplissage="Veuillez remplir ce champ."
          label="Pays"
          size="large"
          className={classes.label}
          inputType="input"
          collg={24}
          colMd={24}
          colxs={24}
       
        />
        <InputComponent
          name="lieuNaissance"
          required={true}
          messageRemplissage="Veuillez remplir ce champ."
          label="Lieu de naissance"
          size="large"
          className={classes.label}
          inputType="input"
          collg={12}
          colMd={12}
          colxs={24}
        />
        <InputComponent
          name="date_naissance"
          required={true}
          messageRemplissage="Veuillez remplir ce champ."
          label="Date de naissance"
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

        {/* <InputComponent
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
        /> */}
        {/* <InputComponent
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
          addonAfter={<PhoneOutlined style={{ color: "black" }} />}
          inputType="phone"
          collg={12}
          colMd={12}
          colxs={24}
          defaultValue={"+33"}
        /> */}
      </Row>
      <FormHeader name="Qui souhaitez-vous assurer ?" />

      <Row gutter={6} justify="space-around">
        <Col xs={24} sm={12} lg={6} style={{ marginBottom: "1rem" }}>
          <button
            type="button"
            onClick={() => {
              setAssurerProches("Moi et mes proches");
              setGlobalData({
                ...globalData,
                assurer: "Moi et mes proches",
              });
            }}
            className={classes.buttonsAdd}
            style={{
              backgroundColor: "#F2FAFF",
              border: "2px solid #D2EEFF",
            }}
          >
            <IconAdd />
            Un(e) conjoint(e)
          </button>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <button
            onClick={handleAddChild}
            type="button"
            className={classes.buttonsAdd}
            style={{
              backgroundColor: "#C1E5FE",
              border: "2px solid #9DD7FF",
            }}
          >
            <IconAdd />
            Un enfant
          </button>
        </Col>
      </Row>

      {assurerProches === "Moi et mes proches" && (
        <InformationsConjoint getYears={getYears} form={form} />
      )}

      <Form.List name="tab_enfants">
        {(fields, { add, remove }) => (
          <>
            <Row gutter={24} justify="space-between">
              {fields?.map(({ key, name, ...restField }) => (
                <ChildDetails
                  remove={remove}
                  name={name}
                  restField={restField}
                  getYears={getYears}
                  key={key}
                />
              ))}{" "}
            </Row>
          </>
        )}
      </Form.List>

      <FormHeader name="Date d’effet souhaitée du contrat  ?" />
      <Row
        style={{ display: "flex", justifyContent: "center" }}
        className="starClass"
      >
        <InputComponent
          inputType="input"
          type="date"
          name="dateEffet"
          collg={11}
        />
      </Row>
    </div>
  );
};

export default InformationsSouscripteur;
