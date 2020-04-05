import React from 'react'
import { Alert , Card, Progress, Row, Col } from 'antd'
import { getAllUnits } from '../services/unitService'



const HomeWrapper = () => {

    return ( 
        <React.Fragment><Card>
        <h2>Bienvenue sur "Age Of Empire DEfitive Edition statistic viewer"</h2>
        <p> Ce projet est en cours de développement ! </p>

        <p> nous avons pour but de créer un outils permettant de mieux comprendre les mécaniques du jeu version: "Age of Empires II: Definitive Edition — Update 36202"</p>

        <Alert type="warning" message="Nous somme en cours de dev, il s'agit d'une Alpha" />

        <p>Si nous devions faire des statisitique sur un semblant d'avancement qui ne voudrait pas dire grand chose : </p>

        <Row gutter={16}>
      <Col span={8}>
        <Card title="% des unités" bordered={false}>
        <Progress  type="circle" percent={Math.ceil((getAllUnits().length / 462)*100)}  format={percent => `${percent} %`} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="% des Civilisations" bordered={false}>
        <Progress  type="circle" percent={Math.ceil((0)*100)}  format={percent => `${percent} %`} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="% des Technologies" bordered={false}>
        <Progress  type="circle" percent={Math.ceil((0)*100)}  format={percent => `${percent} %`} />
        </Card>
      </Col>
    </Row>
        
        
    </Card>)
    </React.Fragment>
    )
}



export default HomeWrapper