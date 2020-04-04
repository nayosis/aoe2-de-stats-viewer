import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Layout, Menu } from 'antd';
import ListUnitWrapper from "./pages/listUnitWrapper";




const { Header, Footer,  Content } = Layout;

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
const App = () => {


    return (
        <div>
            <Router>
                <Layout>
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/units">units</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/users">Users</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>

                        <Content>

                            <Switch>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/users">
                                    <Users />
                                </Route>
                                <Route path="/units">
                                    <ListUnitWrapper />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>


                        </Content>
                      
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>

            </Router>
        </div>
    );
}

export default App;

