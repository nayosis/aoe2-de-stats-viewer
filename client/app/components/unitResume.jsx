import React from 'react'
import { Card, Divider, Button } from 'antd';
import Attack from './attack';
import Defense from './defense';
import Category from './category';
import BonusAttack from './bonusAttack';
import {
    Link
} from "react-router-dom";

const { Meta } = Card;

const UnitResume = ({ unit }) => {

    return (
        <Card title={unit.name} >


            <Divider>STAT</Divider>
            <Attack attack={unit.stats.attack} />


            <span>
                {unit.stats.defense.filter(def => def.type === "melee")
                    .map(def => {
                        return (<Defense key={"melee" + unit.id} defense={def} />)
                    })}
                {unit.stats.defense.filter(def => def.type === "pierce")
                    .map(def => {
                        return (<Defense key={"pierce" + unit.id} defense={def} />)
                    })}
            </span>
            <Divider>Categories</Divider>
            {unit.categories.map(category => {
                return (
                    <Category id={category} />
                );
            })}

            <Divider>Bonus</Divider>
            {unit.bonus.map(bonu => {
                return (
                    <BonusAttack bonusAttack={bonu} />
                )
            })}
            <Link to={"/units/" + unit.id}> <Button type="link" block>
                more
    </Button></Link>
        </Card>
    )



}

export default UnitResume