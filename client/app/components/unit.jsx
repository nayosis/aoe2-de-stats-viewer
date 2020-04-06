import React from 'react'


import { Card, Row, Col, Statistic, Typography } from 'antd'
import Attack from './attack'
import Defense from './defense'
import CompareAll from './compareAll'

const { Title } = Typography;


const Unit = ({ unit }) => {

    return (
        <React.Fragment>

            <Title level={4}>Statistiques générales</Title>
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
                        <Card style={{  }}>
                            <Statistic
                                title="Hit Point"
                                value={unit.stats.life}
                                precision={0}
                                valueStyle={{ color: "#15DDAE" }}
                            //prefix={getIconType(defense)}
                            />
                        </Card>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={3}>
                        <Card style={{  }}>
                            <Statistic
                                title="speed"
                                value={unit.stats.speed}
                                precision={0}
                                valueStyle={{ color: "#15DDAE" }}
                            //prefix={getIconType(defense)}
                            />
                        </Card>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={3}>
                        <Card style={{  }}>
                            <Statistic
                                title="line of Sigth"
                                value={unit.stats.lineSigth}
                                precision={0}
                                valueStyle={{ color: "#15DDAE" }}
                            //prefix={getIconType(defense)}
                            />
                        </Card>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={3}>
                        <Card style={{  }}>
                            <Statistic
                                title="range"
                                value={unit.stats.minRange + "-" + unit.stats.maxRange}
                                precision={0}
                                valueStyle={{ color: "#15DDAE" }}
                            //prefix={getIconType(defense)}
                            />
                        </Card>
                    </Col>
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
