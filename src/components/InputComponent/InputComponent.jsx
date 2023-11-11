import React from "react";
import {
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Space,
} from "antd";
import PhoneInput from "antd-phone-input";
import dayjs from "dayjs";
import classes from "./InputComponent.module.css";
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import tn from 'world_countries_lists/data/countries/en/world.json';

// import 'antd/dist/antd.css';
// import 'antd-country-phone-input/dist/index.css';
const { Search } = Input;

const InputComponent = (props) => {
  const {
    required,
    messageRemplissage,
    pattern,
    label,
    name,
    type,
    messageVerification,
    size,
    className,
    controls,
    prefix,
    placeholder,
    addonAfter,
    addonBefore,
    inputType,
    namePrefix,
    options,
    onBlur,
    form,
    defaultValue,
    radioValues,
    disabledDate,
    minVal,
    maxVal,
    maxDate,
    minDate,
    collg,
    colmd,
    colsm,
    colxs,
    restField,
    checkboxValues,
    onSelect,
    onchange,
    val,
  } = props;

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const handlePrefixChange = () => {
    form.validateFields([name]);
  };
  const onSearchFunction = (e, name) => {
    onBlur(e, name, form);
  };

  return (
    <Col className="starCol" lg={collg} md={colmd} sm={colsm} xs={colxs}>
      {inputType == "input" ? (
        <div>
          <Form.Item
            {...restField}
            name={name}
            rules={[
              {
                required: required,
                message: messageRemplissage,
              },
              {
                pattern: pattern,
                message: messageVerification,
              },
              {
                validator: (_, value) => {
                  if (!value) {
                    return Promise.resolve();
                  } else if (
                    minVal &&
                    maxVal &&
                    (value < minVal || value > maxVal)
                  ) {
                    return Promise.reject(
                      new Error("Veuillez vérifier ce champ")
                    );
                  } else if (minDate && value < minDate) {
                    if (
                      name === "date_naissance" ||
                      name === "date_naissance_conjoint"
                    ) {
                      return Promise.reject(
                        new Error(
                          "Veuillez noter que l'âge de souscription pour cette assurance doit être compris entre 18 et 65 ans à compter de la date d'effet de la police."
                        )
                      );
                    } else {
                      return Promise.reject(
                        new Error(
                          "Veuillez noter que l'âge de l'enfant assuré doit être compris entre 12 et 18 ans pour souscrire à cette offre."
                        )
                      );
                    }
                  } else if (maxDate && value > maxDate) {
                    if (
                      name === "date_naissance" ||
                      name === "date_naissance_conjoint"
                    ) {
                      return Promise.reject(
                        new Error(
                          "Veuillez noter que l'âge de souscription pour cette assurance doit être compris entre 18 et 65 ans à compter de la date d'effet de la police."
                        )
                      );
                    } else {
                      return Promise.reject(
                        new Error(
                          "Veuillez noter que l'âge de l'enfant assuré doit être compris entre 12 et 18 ans pour souscrire à cette offre."
                        )
                      );
                    }
                  }
                  return Promise.resolve();
                },
              },
            ]}
            className="star"
            label={<label className={className}>{label}</label>}
          >
            <Input
              disabled={name === "pays" || name === "dateEffet"}
              max={maxDate}
              min={minDate}
              // onChange={(e) => onChangeFunction(e, "input")}
              onBlur={(e) => {
                if (onBlur) onSearchFunction(e.target.value, name);
              }}
              addonBefore={addonBefore}
              addonAfter={addonAfter}
              placeholder={placeholder}
              // defaultValue={defaultValue}
              value={defaultValue}
              prefix={prefix}
              controls={controls}
              type={type}
              onChange={onchange}
             
            
            />
          </Form.Item>
        </div>
      ) : inputType === "phone" ? (
        <Form.Item
          name="inputphone"
          rules={[
            {
              required: required,
              message: "",
            },
          ]}
          label={<label className={className}>{label}</label>}
        >
    <PhoneInput/>

          {/* <Space.Compact compact="true" style={{ display: "flex" }}>
            <Form.Item
              name={namePrefix}
              style={{ flex: 1 }}
              initialValue={defaultValue}
              rules={[
                {
                  required: required,
                  message: messageRemplissage,
                },
                {
                  pattern: new RegExp(/^\+\d+$/),
                  message: "Veuillez vérifier ce champ.",
                },
              ]}
            >
              <Input style={{ borderRight: "white" }}  onChange={handlePrefixChange}/>
            </Form.Item>
            <Form.Item
              name={name}
              rules={[
                {
                  required: required,
                  message: messageRemplissage,
                },
                ({ getFieldValue }) => ({
                  pattern: new RegExp(
                    getFieldValue(namePrefix) === "+33" ? pattern : /^[0-9]*$/
                  ),
                  message: messageVerification,
                }),
              ]}
              style={{ flex: 4 }}
            >
              <Input addonAfter={addonAfter} />
            </Form.Item>
          </Space.Compact> */}
        </Form.Item>
      ) : inputType === "select" ? (
        <Form.Item
          name={name}
          rules={[
            {
              required: required,
              message: messageRemplissage,
            },
          ]}
          label={<label className={className}>{label}</label>}
        >
          <Select
            // onChange={(e) => onChangeFunction(e, "select")}
            onSelect={onSelect}
            options={options && options.length !== 0 ? options : ""}
            placeholder={placeholder}
          />
        </Form.Item>
      ) : inputType === "search" ? (
        <Form.Item
          rules={rules}
          name={name}
          label={<label className={className}>{label}</label>}
        >
          <Search
            type={type}
            placeholder="exp: 1245893677"
            size="large"
            onSearch={(e) => onSearchFunction(e, name)}
          />
        </Form.Item>
      ) : inputType === "date" ? (
        <Form.Item
          {...restField}
          name={name}
          rules={[
            {
              required: required,
              message: messageRemplissage,
            },
          ]}
          label={<label className={className}>{label}</label>}
        >
          <DatePicker
            // onChange={onChangeDate}
            inputReadOnly={true}
            size="large"
            disabledDate={disabledDate}
            format={dateFormatList}
          />
        </Form.Item>
      ) : inputType === "checkbox" ? (
        <Form.Item
          name={name}
          rules={[
            {
              required: required,
              message: messageRemplissage,
            },
          ]}
          label={<label className={classes.labelStyle}>{label}</label>}
        >
          <Checkbox.Group>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100vh",
              }}
            >
              {checkboxValues?.map((checkboxValue, index) => (
                <Col key={index}>
                  <Checkbox
                    value={checkboxValue}
                    className={classes.checkboxText}
                  >
                    {checkboxValue}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>
      ) : type==="password"?(
        <Form.Item
        name={name}
        rules={[
          {
            required: required,
            message: messageRemplissage,
          },
          {
            pattern: pattern,
            message: messageVerification,
          }]}
          label={<label className={classes.labelStyle}>{label}</label>}
        >
          <Input type="password" />
        </Form.Item>
      ):
      (
        <Form.Item
          name={name}
          label={<label>{label}</label>}
          rules={[
            {
              required: required,
              message: messageRemplissage,
            },
          ]}
        >
          <Radio.Group className={classes.rowFlex}>
            <Row
              gutter={[16, 16]}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {radioValues?.map((value, index) => (
                <Col key={index}>
                  {value.card ? (
                    <CardsComponent
                      image={value.cardImage}
                      name={value.name}
                      form={form}
                    />
                  ) : null}
                  <Radio
                    value={value.name}
                    key={index}
                    onChange={() => handleCardClick(value.name)}
                    className={classes.labelStyle}
                  >
                    {value.name}
                  </Radio>
                </Col>
              ))}
            </Row>
          </Radio.Group>
        </Form.Item>
      )}
    </Col>
  );
};

export default InputComponent;
