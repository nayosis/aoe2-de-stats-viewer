import React from 'react'

import { Tag } from 'antd';

import { GiBroadsword , GiArrowhead, GiArrowsShield, GiCheckedShield} from "react-icons/gi";


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

const Attack = ({attack}) => {

    return (
        <Tag icon={getIconType(attack)} color={getColor(attack)}>
         -> {attack.amount}
      </Tag>
    )
}

export default Attack