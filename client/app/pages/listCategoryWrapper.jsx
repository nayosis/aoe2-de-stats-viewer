import React from 'react'


import { getAllCaegories } from '../services/categoryService';
import { List, Card } from 'antd';


const ListCategoryWrapper = () => {

    const categories = getAllCaegories()

    const data = categories.map(categorie => { return ("[" + categorie.class + "] " + categorie.label) })

    return (
        <React.Fragment>
            <Card>
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