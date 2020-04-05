import React from 'react'

import { getAllUnits, getUnitById } from '../services/unitService'
import Compare from './compare'

const CompareAll = ({ idUnit }) => {


    const allUnit = getAllUnits().filter(innerUnit => innerUnit.id !== idUnit)
    const unit = getUnitById(idUnit)

    return (
        <div>
            {allUnit.map(innerUnit => (
                <Compare key={unit.id+"vs"+innerUnit.id} unitLeft={unit} unitRigth={innerUnit} />
            ))}
        </div>
    )




}



export default CompareAll