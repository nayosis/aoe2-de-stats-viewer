import React from 'react'


import { getAllCaegories } from '../services/categoryService';
import { List, Card } from 'antd';
import FilAriane from '../components/filAriane';

const ListCategoryWrapper = () => {

    const categories = getAllCaegories()

    const data = categories.map(categorie => { return ("[" + categorie.class + "] " + categorie.label) })

    return (
        <React.Fragment>
           
            <Card>
                <FilAriane />
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </Card>
        </React.Fragment>

    )
}


export default ListCategoryWrapper