import React from 'react'
import BonusAttack from './bonusAttack'


const ListBonusAttack = ({bonus}) => {

let filteredBonus =  bonus.filter( bonu => bonu.amount !== 0)

return(
    <React.Fragment>
    { filteredBonus.length === 0 ?
        <p>No Bonus </p>
       :
       filteredBonus.map(bonu => {
           return (
                <BonusAttack  key={bonu.category} bonusAttack={bonu} />
           )
       })
       }
       </React.Fragment>
       )
}


export default ListBonusAttack