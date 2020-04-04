import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    useParams
} from "react-router-dom";
import { getCategorieById } from '../services/categoryService';
import { PageHeader } from 'antd';


const CategorieWrapper = () => {
    let history = useHistory()
    let { idCategory } = useParams();
    const category = getCategorieById(idCategory)

    return (
        <React.Fragment>
            <PageHeader
                onBack={() => history.push("/categories")}
                title={category.label}
                subTitle="information "
            />
            <div>{category.label}</div>

        </React.Fragment>
    )
}


export default CategorieWrapper