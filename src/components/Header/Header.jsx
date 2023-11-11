import React from "react";
import classes from "./Header.module.css";
import { Col, Row, Steps, ConfigProvider } from "antd";
import GlobalContext from "../../contexts/GlobalContext";
const Header = (props) => {
  const { brandProperties } = React.useContext(GlobalContext);
  // const [current, setCurrent] = React.useState(
  //   JSON.parse(sessionStorage.getItem('current')) || 2
  // );
  const { steps, current } = props;
  const items = steps?.map((item) => ({ key: item.title, title: item.title }));


    return (
      <ConfigProvider
        theme={{
          token: {
            // colorPrimary: 'rgb(2, 79, 168)',
            // colorInfo: 'rgb(2, 79, 168)',
          },
          components: {
            Steps: {
              colorPrimary:"red",
              colorText: "red",
              fontFamily: "Montserrat",
              controlItemBgActive: "rgb(223, 223, 223)",
              colorBorderSecondary: "rgb(223, 223, 223)",
              colorTextLabel: "rgb(255, 255, 255)",
              colorSplit: "rgb(223, 223, 223)",
              colorFillContent: "rgb(223, 223, 223)",
              iconFontSize: 14,
              iconSize: 34,
              fontSizeLG: 14,
            },
          },
        }}
      >
        <Row
          className={classes.headerContainer}
          gutter={[16]}
          style={{ width: "100%", margin: 0 }}
        >
          <Col lg={4} md={24} sm={24} xs={24} className={classes.headerLogo}>
            {/* <img
              src={brandProperties.logo}
              alt="logo AsSolutions"
              className={classes.logoStyle}
            /> */}
          </Col>
          <Col lg={19} className={classes.headerSteps}>
            <Steps
              current={current - 1}
              onKeyDown={(e) => (e.keyCode == 13 ? e.preventDefault() : "")}
              items={items}
            />
          </Col>
        </Row>
      </ConfigProvider>
    );
  }

export default Header;
