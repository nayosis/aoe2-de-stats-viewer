import React, { useState } from "react";
//import 'antd/dist/antd.css';
import 'antd/dist/antd.dark.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { IntlProvider, FormattedMessage, formatMessage } from "react-intl";

import { Layout, Menu, Radio, Drawer, Form , Button, message} from 'antd';
import ListUnitWrapper from "./pages/listUnitWrapper";

import UnitWrapper from "./pages/unitWrapper"
import HomeWrapper from "./pages/homeWrapper"
import CategorieWrapper from "./pages/categorieWrapper";
import ListCategoryWrapper from "./pages/listCategoryWrapper";
import { messages } from './internationalisation'



const { Header, Footer, Content } = Layout;




const App = () => {

    const [locale, setLocale] = useState(localStorage.getItem('prefLang') || 'en');
    const [visible, setvisible] = useState(false);

    const handleSelect = e => {
        localStorage.setItem('prefLang', e.target.value)
        setLocale(e.target.value);
        message.success(messages[e.target.value]["option.lang.confirm"].replace("{lang}",e.target.value),2 );
    };
    const showDrawer = () => {
        setvisible(true)

    };

    const onClose = () => {
        setvisible(false)
    };

    const resetData = () => {
        localStorage.clear()
        message.success(messages[locale]["option.resetalldata"],4);
    }

    return (
        <div>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <Router>
                    <Layout>
                        <Header  >

                            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1"><Link to="/"><FormattedMessage id="menu.home" /></Link></Menu.Item>
                                <Menu.Item key="units"><Link to="/units"><FormattedMessage id="menu.units" /></Link></Menu.Item>
                                <Menu.Item key="categories"><Link to="/categories"><FormattedMessage id="menu.categories" /></Link></Menu.Item>
                                <Menu.Item key="options" onClick={() => showDrawer()}><FormattedMessage id="menu.options" /></Menu.Item>

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
                <Drawer
                    title="Options"
                    width={"450"}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                        initialValues=""
                    // onValuesChange={onFormLayoutChange}
                    >
                        <Form.Item label="Locale" name="locale">
                            <Radio.Group onChange={handleSelect} defaultValue={locale}>
                                <Radio.Button value="en">Eng</Radio.Button>
                                <Radio.Button value="fr">Fr</Radio.Button>
                                
                            </Radio.Group>

                        </Form.Item>
                        <Button  type="dashed" danger block onClick={() => resetData()}>Reset my data !</Button>
                    </Form>

                </Drawer>
            </IntlProvider>
        </div>
    );
}

export default App;

