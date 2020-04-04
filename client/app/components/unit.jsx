import React from 'react'


import {Card,  Descriptions, PageHeader, Typography } from 'antd'
import Attack from './attack'
import Defense from './defense'
import CompareAll from './compareAll'

const { Title } = Typography;


const Unit = ({ unit }) => {

    return (
        <React.Fragment>
         
             <Title level={4}>Statistiques générales</Title>
             <Card >
            <Descriptions >
                <Descriptions.Item label="Damage "><Attack attack={unit.stats.attack}/></Descriptions.Item>
                <Descriptions.Item label="Armur melee"><Defense defense={unit.stats.defense[0]}/></Descriptions.Item>
                <Descriptions.Item label="Armur pierce"><Defense defense={unit.stats.defense[1]}/></Descriptions.Item>
                <Descriptions.Item label="hit Point">{unit.stats.life}</Descriptions.Item>
                <Descriptions.Item label="speed">{unit.stats.speed}</Descriptions.Item>
                <Descriptions.Item label="line of Sigth">{unit.stats.lineSigth}</Descriptions.Item>
                <Descriptions.Item label="range">{unit.stats.minRange} - {unit.stats.maxRange}</Descriptions.Item>
            </Descriptions>
            </Card>
            <Title level={4}> Rapport de force</Title>
            <Card >
                <CompareAll idUnit={unit.id}/>

            </Card>
        </React.Fragment>
    )
}

export default Unit
