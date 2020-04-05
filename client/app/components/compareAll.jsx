import React from 'react'

import { getAllUnits, getUnitById } from '../services/unitService'
import { Row, Col} from 'antd'

import Compare from './compare'

const CompareAll = ({ idUnit }) => {


    const allUnit = getAllUnits().filter(innerUnit => innerUnit.id !== idUnit)
    const unit = getUnitById(idUnit)

    return (
        <div>
            {allUnit.map(innerUnit => (
                <Row  key={unit.id+"vs"+innerUnit.id}  gutter={[16, 24]}>
                    <Col span={24}>
                    <Compare unitLeft={unit} unitRigth={innerUnit} />
                    </Col>
                </Row>
                
            ))}
        </div>
    )




}



export default CompareAll