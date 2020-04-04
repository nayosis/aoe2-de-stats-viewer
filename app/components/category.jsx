import React from 'react'
import { Tag } from 'antd';
import categoryData from "../data/category.json"
import { Link } from 'react-router-dom';


const getCategory = (id) => {
    const theCate = categoryData.find(cat => cat.class === id)
    console.log(theCate)
    let title
    if (theCate === undefined) {
        title = "None"
    }
    else {
        title = theCate.label
    }
    return title
}


const Category = ({ id, amount }) => {

    if (amount !== undefined) {

        if (amount === 0) {
            return (
                ""
            )
        }
        return (
       
            <Tag > <Link to={"/categories/" + id}>{getCategory(id)} +{amount}</Link></Tag>
        )
    }
    return (
       <Tag > <Link to={"/categories/" + id}>{getCategory(id)}</Link></Tag>
    )

}


export default Category