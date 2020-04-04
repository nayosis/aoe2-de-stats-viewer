import React from 'react'
import { Tag } from 'antd';
import categoryData from "../data/category.json"


const getCategory = ( id ) => {
     const theCate = categoryData.find(cat=> cat.class === id)
     console.log (theCate)
     let title 
        if (theCate === undefined) {
            title =  "None"
        }
        else {
            title = theCate.label
        }
        return title
}


const Category = ({id,amount}) => {
    
    if (amount !== undefined ) {

        if ( amount === 0) {
            return (
                ""
            )
        }

        return (
            <Tag >{getCategory(id)}  +{amount}</Tag>
        )

    }
    

    return (
        <Tag >{getCategory(id)}</Tag>
    )

}


export default Category