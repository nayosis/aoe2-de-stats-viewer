import React from 'react'


import { Card, Row, Col, Statistic, Typography } from 'antd'
import { FormattedMessage } from "react-intl";
import Attack from './attack'
import Defense from './defense'
import CompareAll from './compareAll'
import Category from './category';
import ListBonusAttack from './listBonusAttack';

const { Title } = Typography;


const Unit = ({ unit }) => {

    return (
        <React.Fragment>

            <Title level={4}><FormattedMessage id="unit.stat.label" /> </Title>
            <Card >
                <Row gutter={[16, 24]}>
                    <Col xs={12} sm={8} md={6} lg={4} xl={3}>
                        <Attack attack={unit.stats.attack} />
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={3}>
                        <Defense defense={unit.stats.defense[0]} />
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={3}>
                        <Defense defense={unit.stats.defense[1]} />
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={3}>
                        <Card style={{}}>
                            <Statistic
                                title={<FormattedMessage id="unit.stat.hitpoint" />}
                                value={unit.stats.life}
                                precision={0}
                                valueStyle={{ color: "#15DDAE" }}
                            />
                        </Card>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={3}>
                        <Card style={{}}>
                            <Statistic
                                title={<FormattedMessage id="unit.stat.speed" />}
                                value={unit.stats.speed}
                                precision={2}
                                valueStyle={{ color: "#15AAAE" }}
                            />
                        </Card>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={3}>
                        <Card style={{}}>
                            <Statistic
                                title={<FormattedMessage id="unit.stat.lineSigth" />}
                                value={unit.stats.lineSigth}
                                precision={0}
                                valueStyle={{ color: "#AADDAE" }}
                            />
                        </Card>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={3}>
                        <Card style={{}}>
                            <Statistic
                                title={<FormattedMessage id="unit.stat.range" />}
                                value={unit.stats.minRange + "-" + unit.stats.maxRange}
                                precision={0}
                                valueStyle={{ color: "#15DD74" }}
                            />
                        </Card>
                    </Col>


                </Row>
                <Row gutter={[16, 24]}>
                    {unit.categories.map(category => {
                        return (
                            <Category key={category} id={category} />
                        );
                    })}

                </Row>
                <Row gutter={[16, 24]}>
                    <ListBonusAttack bonus={unit.bonus} />
                </Row>






                {/* <Descriptions >
                
                <Descriptions.Item label="hit Point">{unit.stats.life}</Descriptions.Item>
                <Descriptions.Item label="speed">{unit.stats.speed}</Descriptions.Item>
                <Descriptions.Item label="line of Sigth">{unit.stats.lineSigth}</Descriptions.Item>
                <Descriptions.Item label="range">{unit.stats.minRange} - {unit.stats.maxRange}</Descriptions.Item>
            </Descriptions> */}
            </Card>
            <Title level={4}> Rapport de force</Title>
            <Card >
                <CompareAll idUnit={unit.id} />

            </Card>
        </React.Fragment>
    )
}

export default Unit
