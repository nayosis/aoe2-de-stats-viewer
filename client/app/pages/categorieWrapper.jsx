import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    useParams,
     useLocation
} from "react-router-dom";
import { getCategorieById } from '../services/categoryService';
import { PageHeader } from 'antd';
import FilAriane from '../components/filAriane';


const CategorieWrapper = () => {
    let history = useHistory()
    let location = useLocation();
    let para= useParams();
    let { idCategory } = useParams();
    const category = getCategorieById(idCategory)

    console.log("para",para)
    console.log("location",location)
    return (
        <React.Fragment>
            <FilAriane />
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