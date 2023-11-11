import { useContext, useEffect, useState } from "react";

import classes from "./Home.module.css";
import {
  message,
  Steps,
  Form,
  ConfigProvider,
  Row,
  Col,
  FloatButton,
} from "antd";
import Header from "../../components/Header/Header";
import { ClearOutlined } from "@ant-design/icons";
// import InformationsSouscripteur from "../InformationsSouscripteur/InformationsSouscripteur";
// import Couvertures from "../Couvertures/Couvertures";
// import InformationsComplementaires from "../InformationsComplementaires/InformationsComplementaires";
// import Paiement from "../Paiement/Paiement";
// import Tarification from "../Tarification/Tarification";
import GlobalContext from "../../contexts/GlobalContext";
import dayjs from "dayjs";


function Home() {
  const {

    setGlobalData,
    globalData,
   
    current,
    setCurrent,
    form,

  } = useContext(GlobalContext);


  const [garantieOptions, setGarantieOptions] = useState(
    JSON.parse(sessionStorage.getItem("garantieOptions")) || {
      conséquences_accidents_corporels: true,
      accidents_corporels_conséquences_graves: true,
      indemnité_journalière_cas_hospitalisation: true,
      versement_capital_forfaitaire: true,
      subi_accident_cinq_dernières_années: false,
      hospitalisation_programmée: false,
      mesure_curatelle_tutelle: false,
      papiers_sans_aide_ext: false,
      politiquement_exposée: false,
      conséquences_accidents_corporels_conjoint: true,
      accidents_corporels_conséquences_graves_conjoint: true,
      indemnité_journalière_cas_hospitalisation_conjoint: true,
      versement_capital_forfaitaire_conjoint: true,
      subi_accident_cinq_dernières_années_conjoint: false,
      hospitalisation_programmée_conjoint: false,
      conséquences_accidents_corporels_enfant: true,
      accidents_corporels_conséquences_graves_enfant: true,
      indemnité_journalière_cas_hospitalisation_enfant: true,
      versement_capital_forfaitaire_enfant: true,
      subi_accident_cinq_dernières_années_enfant: false,
      hospitalisation_programmée_enfant: false,
    }
  );
  const steps = [
    {
      title: "Informations principales",
      content: <InformationsSouscripteur form={form} />,
    },
    {
      title: "Informations complémentaires",
      content: (
        <InformationsComplementaires
          garantieOptions={garantieOptions}
          setGarantieOptions={setGarantieOptions}
        />
      ),
    },
    {
      title: "Garanties",
      content: <Couvertures form={form} />,
    },

    {
      title: "Tarification",
      content: <Tarification form={form} />,
    },

    {
      title: "Paiement",
      content: <Paiement form={form} />,
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const next = () => {
  saveSession()
  };

  
  const prev = () => {
    setCurrent(current - 1);
  };
  const saveSession = () => {
    let value = {
      ...globalData,
      ...form.getFieldsValue(),
    };
    sessionStorage.setItem("globalData", JSON.stringify(value));
    setGlobalData(value);
  };




  useEffect(() => {
    form.setFieldsValue(
      JSON.parse(sessionStorage.getItem("globalData"))
        ? {
            ...JSON.parse(sessionStorage.getItem("globalData")),
            methodePaiement: JSON.parse(sessionStorage.getItem("globalData"))
              ?.methodePaiement
              ? JSON.parse(sessionStorage.getItem("globalData"))
                  ?.methodePaiement
              : "Mandat SEPA",
            assurer: JSON.parse(sessionStorage.getItem("globalData"))?.assurer
              ? JSON.parse(sessionStorage.getItem("globalData"))?.assurer
              : "Moi seulement",
            dateEffet: JSON.parse(sessionStorage.getItem("globalData"))
              ?.dateEffet
              ? JSON.parse(sessionStorage.getItem("globalData"))?.dateEffet
              : dayjs().add(1, "month").startOf("month").format("YYYY-MM-DD"),
            type_fractionnement: JSON.parse(
              sessionStorage.getItem("globalData")
            )?.type_fractionnement
              ? JSON.parse(sessionStorage.getItem("globalData"))
                  ?.type_fractionnement
              : "Mensuel",
          }
        : {
            ...form.getFieldsValue(),
            methodePaiement: JSON.parse(sessionStorage.getItem("globalData"))
              ?.methodePaiement
              ? JSON.parse(sessionStorage.getItem("globalData"))
                  ?.methodePaiement
              : "Mandat SEPA",
            assurer: JSON.parse(sessionStorage.getItem("globalData"))?.assurer
              ? JSON.parse(sessionStorage.getItem("globalData"))?.assurer
              : "Moi seulement",
            dateEffet: dayjs()
              .add(1, "month")
              .startOf("month")
              .format("YYYY-MM-DD"),
            type_fractionnement: "Mensuel",

            tab_enfants: [],
          }
    );

    setGlobalData(JSON.parse(sessionStorage.getItem("globalData")));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("current", JSON.stringify(current));
  }, [current]);



    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#E7E7E7",
            lineWidth: 2,
            fontFamily: "Work Sans",
          },
          components: {
            // Radio: {
            //   colorPrimary: brandProperties?.principalColor,
            // },

            Input: {
              lineWidth: 2,
              colorBorder: "#E7E7E7",
              colorPrimaryHover: "E7E7E7",
              controlHeight: 45,
              fontSize: 16,
              colorText: "#000",
            },

            Steps: {
            //   colorPrimary: brandProperties?.principalColor,
            //   colorText: brandProperties?.principalColor,
              controlItemBgActive: "rgb(223, 223, 223)",
              colorBorderSecondary: "rgb(223, 223, 223)",
              colorTextLabel: "rgb(255, 255, 255)",
              colorSplit: "rgb(223, 223, 223)",
              colorFillContent: "rgb(223, 223, 223)",
              iconFontSize: 16,
              iconSize: 38,
            },
            Switch: {
              colorPrimary: "#024FA8",
              colorPrimaryHover: "#024FA8",
              colorTextQuaternary: "#A4A4A4",
              lineHeight: 2,
            },

            Select: {
              colorBorder: "#E7E7E7",
              lineWidth: 2,
              controlHeight: 45,
              fontSize: 16,
              colorPrimaryHover: "E7E7E7",
            },
            Checkbox: {
              colorPrimary: "#024FA8",
              colorPrimaryHover: "#024FA8",
              controlInteractiveSize: 22,
            },
            Modal: {
              colorBgMask: "rgba(2, 79, 168, 0.4)",
            },
          },
        }}
      >
        <div>
          {/* {isLoadingSouscription && <CustomLoader transparent="true" />} */}
          <Header steps={steps} current={current} setCurrent={setCurrent} />
          {/* <ModalSuccess open={isModalOpen} form={form} /> */}
          {/* <ModalFail open={modalfail} hideModal={hideModal} /> */}
          <Form
            noValidate
            form={form}
            layout="vertical"
            onFinishFailed={() => {
              message.error("Veuillez vérifier tous les champs !");
            }}
            onFinish={() => {
              next();
            }}
            onKeyDown={(e) => (e.keyCode == 13 ? e.preventDefault() : "")}
            className={classes.formContainer}
          >
            <Steps
              className={classes.stepper}
              current={current - 1}
              onKeyDown={(e) => (e.keyCode == 13 ? e.preventDefault() : "")}
              items={items}
            />
            <div className={classes.contentStyle}>
              {steps[current - 1]?.content}
            </div>
            <Row
              className={classes.btnsHolder}
              style={{ flexDirection: current === 1 ? "column" : "row" }}
            >
              <Col>
                {current !== 1 && (
                  <button
                    className={classes.btnPrev}
                    // style={{ color: brandProperties?.secondColor }}
                    type="button"
                    onClick={() => prev()}
                  >
                    Retour
                  </button>
                )}
              </Col>
              <Col>
                {current > 0 && current <= steps.length && (
                  <button
                    className={classes.btnNext}
                    // style={{
                    //   backgroundColor:
                    //     current === 4 && subscribeEnabled === true
                    //       ? "gray"
                    //       : brandProperties?.secondColor,
                    //   cursor:
                    //     current === 4 && subscribeEnabled === true
                    //       ? "not-allowed"
                    //       : "pointer",
                    //   padding:
                    //     current === 3 || current === 4
                    //       ? "1rem 1rem"
                    //       : "1rem 2rem",
                    // }}
                    // disabled={current === 4 ? subscribeEnabled : false}
                    type="submit"
                  >
                    Suivant
                    {/* {current === 1
                      ? "Suivant"
                      : current === 2
                      ? "Suivant"
                      : current === 5
                      ? "Confirmer la transaction"
                      : current === 3
                      ? "Souscrire"
                      : `Je m’assure pour ${garantie?.tarif?.toFixed(
                          2
                        )} €/mois`} */}
                  </button>
                )}
              </Col>
            </Row>{" "}
          </Form>
          <FloatButton
            type="primary"
            icon={<ClearOutlined />}
            tooltip={<div>Remise à zero</div>}
            onClick={() => {
              sessionStorage.clear();
              window.location.reload();
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* {current === 4 && (
              <ExportDevis
                sendEmail={sendEmail}
                exporterDevis={exporterDevis}
              />
            )} */}
          </div>
        </div>
      </ConfigProvider>
    );
 
}

export default Home;
