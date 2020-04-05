import React from "react";
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Layout, Menu, Card } from 'antd';
import ListUnitWrapper from "./pages/listUnitWrapper";

import UnitWrapper from "./pages/unitWrapper"
import HomeWrapper from "./pages/homeWrapper"
import CategorieWrapper from "./pages/categorieWrapper";
import ListCategoryWrapper from "./pages/listCategoryWrapper";




const { Header, Footer, Content } = Layout;




const App = () => {


    return (
        <div>
            <Router>
                <Layout>
                    <Header  >
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to="/">HOME</Link></Menu.Item>
                            <Menu.Item key="units"><Link to="/units">UNITS</Link></Menu.Item>
                            <Menu.Item key="categories"><Link to="/categories">CATEGORIES</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>

                        <Content style={{ height: '75vh' }}>

                            <Switch>
                                <Route path="/categories/:idCategory">
                                    <CategorieWrapper />
                                </Route>
                                <Route path="/categories">
                                    <ListCategoryWrapper />
                                </Route>
                                <Route path="/units/:idUnit">
                                    <UnitWrapper />
                                </Route>
                                <Route path="/units">
                                    <ListUnitWrapper />
                                </Route>
                                <Route path="/">
                                    <HomeWrapper />
                                </Route>
                            </Switch>


                        </Content>

                    </Layout>

                </Layout>

            </Router>
        </div>
    );
}

export default App;

