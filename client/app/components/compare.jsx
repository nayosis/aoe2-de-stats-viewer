import React from 'react'

import { Row,Alert,  Col,  Typography, Card, Divider} from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography;
import { GiCrossedAxes } from "react-icons/gi";
GiCrossedAxes
const calculateDammage = (unit1, unit2) => {
    //unit2.categories
    var unit2Def = getDefenseAmount(unit2.stats.defense, unit1.stats.attack.type)
    var unit1BonusVs2ListAmount = unit1.bonus.filter(bonu => unit2.categories.includes(bonu.category)).map(bonu => bonu.amount)

    var totalbonus = unit1BonusVs2ListAmount.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let totalDammage = unit1.stats.attack.amount - unit2Def + totalbonus

    if (totalDammage < 1) {
        return 1
    }
    return totalDammage;
}


const getDefenseAmount = (defense, type) => {
    return defense.find(def => def.type === type).amount

}


const Compare = ({ unitLeft, unitRigth }) => {

    const leftAttack = calculateDammage(unitLeft, unitRigth)
    const rightAttack = calculateDammage(unitRigth, unitLeft)

    
    const leftHit = Math.ceil(unitRigth.stats.life / leftAttack)
    const rightHit = Math.ceil(unitLeft.stats.life / rightAttack )

    const rightRapport = (rightAttack * 100) / (rightAttack + leftAttack)
    const leftRapport = (leftAttack * 100) / (rightAttack + leftAttack)
    return (
        <Card>
            <Divider> <Title level={4}>{unitLeft.name} <GiCrossedAxes/> <Link to={"/units/" + unitRigth.id}>{unitRigth.name}</Link></Title></Divider>
        <Row   >
            <Col span={24} >
            <Alert
      message="1 vs 1"
      description={`${unitLeft.name} need ${leftHit} Hit(s) for Kill ${unitRigth.name}  ) - (${unitRigth.name} need ${rightHit} Hit(s) for Kill ${unitLeft.name}  `} 
      type="info"
    /> 
                
            </Col>
            <Col span={24}>
                <Row align="middle" style={{ border: '1px solid black' }}>
                    <Col flex={leftRapport} style={{ backgroundColor: '#8fc72e' }} >

                        <Row align="middle" justify="begin" style={{ minHeight: '50px' }} >
                            <Col> <Title level={4}> {leftAttack}  </Title> </Col>
                        </Row>
                    </Col>
                    <Col flex={rightRapport} style={{ backgroundColor: '#99ccff' }} >
                        <Row align="middle" justify="end" style={{ minHeight: '50px' }}  >
                            <Col> <Title level={4}>  {rightAttack}  </Title></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
          
        </Row>
        </Card>
    )

}






export default Compare