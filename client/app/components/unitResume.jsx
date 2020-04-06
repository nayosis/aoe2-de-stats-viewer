import React from 'react'
import { Card, Divider, Button, Avatar, Row, Col } from 'antd';
import Attack from './attack';
import Defense from './defense';
import Category from './category';
import ListBonusAttack from './listBonusAttack';
import {
    Link
} from "react-router-dom";

const { Meta } = Card;

const UnitResume = ({ unit }) => {

    return (
        <Card style={{ height: "100%" }} >
            <Meta
                avatar={<Avatar src={"https://api.adorable.io/avatars/100/" + unit.name} />}
                title={unit.name}
                description={"internalName:"+unit.internalName}
            />

            <Divider>STAT</Divider>
            <Row gutter={[8, 16]}>
                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                    <Attack attack={unit.stats.attack} />
                </Col>
                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                    {unit.stats.defense.filter(def => def.type === "melee")
                        .map(def => {
                            return (<Defense key={"melee" + unit.id} defense={def} />)
                        })}
                </Col>
                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                    {unit.stats.defense.filter(def => def.type === "pierce")
                        .map(def => {
                            return (<Defense key={"pierce" + unit.id} defense={def} />)
                        })}
                </Col>
            </Row>

            <Divider>Categories</Divider>
            {unit.categories.map(category => {
                return (
                    <Category key={category} id={category} />
                );
            })}

            <Divider>Bonus</Divider>
            <ListBonusAttack bonus={unit.bonus} />


            <Link to={"/units/" + unit.id}> <Button type="link" block>
                more
    </Button></Link>
        </Card>
    )



}

export default UnitResume