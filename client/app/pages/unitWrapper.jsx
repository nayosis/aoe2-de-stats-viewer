import React from "react";

import { useHistory } from 'react-router-dom'

import { Empty, Row, Col, PageHeader , Card } from 'antd'
import {
    useParams
} from "react-router-dom";
import { getUnitById } from "../services/unitService.js"
import Unit from "../components/unit.jsx";

const UnitWrapper = () => {
    let history = useHistory()

    let { idUnit } = useParams();
    const unit = getUnitById(idUnit)

    if (!unit) {
        return (
            <Card>
                <Empty
                    style={{ height: '100vh' }}
                    description={
                        <span>
                            no unit with id {idUnit}
                        </span>
                    }
                />
            </Card>)
    }

    return (
        <Card>
            <PageHeader
                onBack={() => history.push("/units")}
                title={unit.name}
                subTitle="information "
            />
            <Row justify="center" align="top" gutter={16} style={{ height: '100vh' }}>
                <Col span={22}>
                    <Unit unit={unit} /></Col>
            </Row>
        </Card>
    )
}

export default UnitWrapper