import React from "react";

import { useHistory } from 'react-router-dom'
import { FormattedMessage } from "react-intl";
import { Row, Col, PageHeader, Card, Result, Button } from 'antd'
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
                <Result
                    status="error"
                    title={<FormattedMessage id="unit.404" values={{ "idUnit": idUnit }} />}
                    subTitle=""
                    style={{ height: '100vh' }}
                    extra={[
                        <Button key="buy" onClick={() => history.push("/")} ><FormattedMessage id="goHome" /></Button>,
                    ]}
                />

            </Card>)
    }

    return (
        <Card>
            <PageHeader
                onBack={() => history.push("/units")}
                title={unit.name}
                subTitle={"internalName:" + unit.internalName}
            />
            <Row justify="center" align="top" gutter={16} style={{ height: '100vh' }}>
                <Col span={22}>
                    <Unit unit={unit} /></Col>
            </Row>
        </Card>
    )
}

export default UnitWrapper