import React from 'react'

import { Card, Statistic } from 'antd';
import { FormattedMessage } from "react-intl";
//import  GiCheckedShield from "react-icons";
//import  GiArrowsShield from "react-icons";


const getIconType = ({type}) => {
    switch(type) {
        case "melee":
            return ""//<GiCheckedShield />
         
        case "pierce":
            return ""//<GiArrowsShield />
        
        default:
          return ""
      } 
}

const getColor = ({type}) => {
    switch(type) {
        case "melee":
            return "#f50"
         
        case "pierce":
            return "#2db7f5"
        
        default:
          return ""
      } 
}

const getTitle = ({type}) => {
    switch(type) {
        case "melee":
            return <FormattedMessage id="unit.stat.defense.melee"/>
         
        case "pierce":
            return <FormattedMessage id="unit.stat.defense.pierce"/>
        
        default:
          return ""
      } 
}

const Defense = ({defense}) => {

      return (
    <Card style={{}}>
            <Statistic
                title={getTitle(defense)}
                value={defense.amount}
                precision={0}
                valueStyle={{ color: getColor(defense) }}
                prefix={getIconType(defense)}
            />
            </Card>

       
    )
}

export default Defense