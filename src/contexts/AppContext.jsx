import GlobalContext from "./GlobalContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, message, notification } from "antd";
import classes from "../pages/Home/Home.module.css";
const AppContext = (props) => {



  const [form] = Form.useForm();

  const [current, setCurrent] = useState(
    Number(sessionStorage.getItem("current")) || 1
  );
  const [globalData, setGlobalData] = useState(
    sessionStorage.getItem("globalData")
      ? JSON.parse(sessionStorage.getItem("globalData"))
      : ""
  );

  const [assurerProches, setAssurerProches] = useState(
    JSON.parse(sessionStorage.getItem("globalData")) &&
      JSON.parse(sessionStorage.getItem("globalData"))["assurer"]
      ? JSON.parse(sessionStorage.getItem("globalData"))["assurer"]
      : "Moi seulement"
  );






  const handleAddChild = () => {
    if (form.getFieldValue("tab_enfants").length < 5) {
      const newChildItem = {
        nom_enfant: "",
        prenom_enfant: "",
        lieu_naissance_enfant: "",
        date_naissance_enfant: null,
      };

      form.setFieldValue("tab_enfants", [
        ...form.getFieldValue("tab_enfants"),
        newChildItem,
      ]);
    } else {
      notification.warning({
        className: classes.warning,
        message: "Warning",
        description: (
          <div>
            Nous vous informons que le nombre maximum d'enfants à assurer est de
            5. <br />
            Si vous avez plus de 5 enfants à assurer, veuillez nous contacter
            directement pour trouver une solution adaptée à vos besoins.
          </div>
        ),
      });
    }
  };
  return (
    <GlobalContext.Provider
      value={{
       
       
        globalData,
        setGlobalData,
        
        assurerProches,
        setAssurerProches,
        handleAddChild,
     
       
        current,
        setCurrent,
        form,
        
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
