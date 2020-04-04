import React from "react";

import {Empty, Row, Col, Space} from 'antd'
import {
    useParams
} from "react-router-dom";

import { getUnitById } from "../services/unitService.js"
import Unit from "../components/unit.jsx";

const UnitWrapper = () => {
    let { idUnit } = useParams();
    const unit = getUnitById(idUnit)
    
    if (!unit) {
        return (
            <Empty
            style={{ height: '100vh' }}
            description={
                <span>
                  no unit with id {idUnit}
                </span>
              }
           />)
    }

    return (
        <Row justify="center" align="top" gutter={16} style={{ height: '100vh' }}>
        <Col span={22}> 
        <Space><Unit unit={unit}/></Space></Col>
      </Row>
   )
}

export default UnitWrapper