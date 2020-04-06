import React from 'react'

import { Card, Statistic } from 'antd';

import { GiBroadsword , GiArrowhead, GiArrowsShield, GiCheckedShield} from "react-icons/gi";
import { FormattedMessage } from "react-intl";

const getIconType = ({type}) => {
    switch(type) {
        case "melee":
            return <GiBroadsword />
         
        case "pierce":
            return <GiArrowhead />
        
        default:
          return ""
      } 
}

const getColor = ({type}) => {
    switch(type) {
        case "melee":
            return "#ff0d00"
         
        case "pierce":
            return "#00bbff"
        
        default:
          return ""
      } 
}
const getTitle = ({type}) => {
    switch(type) {
        case "melee":
            return <FormattedMessage id="unit.stat.attack.damageMelee"/>
         
        case "pierce":
            return <FormattedMessage id="unit.stat.attack.damagePierce"/>
        
        default:
          return ""
      } 
}

const Attack = ({attack}) => {

    return (
    <Card style={{}}>
            <Statistic
                title={getTitle(attack)}
                value={attack.amount}
                precision={0}
                valueStyle={{ color: getColor(attack) }}
                prefix={getIconType(attack)}
            />
            </Card>

       
    )
}

export default Attack


/*
 <Tag icon={getIconType(attack)} color={getColor(attack)}>
         -> {attack.amount}
      </Tag>
      */