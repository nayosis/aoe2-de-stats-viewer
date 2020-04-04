import React from 'react'

import Category from './category'


const BonusAttack = ({bonusAttack}) => {

    return (
        <Category id={bonusAttack.category} amount={ bonusAttack.amount} /> 
    )
}


export default BonusAttack