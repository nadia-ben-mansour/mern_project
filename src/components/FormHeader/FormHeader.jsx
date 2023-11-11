import React from 'react'
import classes from "./FormHeader.module.css"
import { Row } from 'antd'
const FormHeader = (props) => {
    const {name}=props
  return (
    <Row className={classes.rowTitle}>
    <p className={classes.formHeader}>
     {name}
    </p>
  </Row>
  )
}

export default FormHeader