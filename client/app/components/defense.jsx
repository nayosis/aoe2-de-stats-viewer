import React from 'react'

import { Tag } from 'antd';

import { GiBroadsword , GiArrowhead, GiArrowsShield, GiCheckedShield} from "react-icons/gi";


const getIconType = ({type}) => {
    switch(type) {
        case "melee":
            return <GiCheckedShield />
         
        case "pierce":
            return <GiArrowsShield />
        
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

const Defense = ({defense}) => {

    return (
        <Tag icon={getIconType(defense)} color={getColor(defense)}>
         -> {defense.amount}
      </Tag>
    )
}

export default Defense