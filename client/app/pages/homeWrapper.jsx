import React from 'react'
import { Alert, Card, Progress, Row, Col } from 'antd'
import { getAllUnits } from '../services/unitService'
import {  FormattedMessage } from "react-intl";
import { Helmet } from 'react-helmet'

const HomeWrapper = () => {
 

  return (
    <React.Fragment>

        <Helmet>
        <title> Age Of Empire Defitive Edition statistic viewer </title>
        </Helmet>
        <Card>
          <h2><FormattedMessage id="home.title" /></h2>
          <p></p>

          <Alert type="warning" message={<FormattedMessage id="home.warning" /> } />

          
          <Row gutter={16}>
            <Col span={8}>
              <Card title={<FormattedMessage id="home.unitProgression.title" />} bordered={false}>
                <Progress type="circle" percent={Math.ceil((getAllUnits().length / 462) * 100)} format={percent => `${percent} %`} />
              </Card>
            </Col>
            <Col span={8}>
              <Card title={<FormattedMessage id="home.civProgression.title" />} bordered={false}>
                <Progress type="circle" percent={Math.ceil((0) * 100)} format={percent => `${percent} %`} />
              </Card>
            </Col>
            <Col span={8}>
              <Card title={<FormattedMessage id="home.techProgression.title" />} bordered={false}>
                <Progress type="circle" percent={Math.ceil((0) * 100)} format={percent => `${percent} %`} />
              </Card>
            </Col>
          </Row>


        </Card>)
    </React.Fragment>
  )
}



export default HomeWrapper