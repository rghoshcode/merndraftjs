import React, { Component } from 'react';

import './App.css';
import 'antd/dist/antd.css';
import 'react-quill/dist/quill.snow.css';


import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;



class SiderDemo extends React.Component {
    state = {
        collapsed: true,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
//<Icon style={{ width: '40px' }} type="plus-square" theme="twoTone" />

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                    <Header id='header' >
                        Minimalist. Resourceful. Reliable.
                        <div align="right"><button className='bar-button'>New Question</button></div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>


                    </Content>
                    <Footer style={{ textAlign: 'center', fontSize: '10px' }}>
                        CtrlShiftF.com ©2018 Designed by Ranajoy Ghosh
                    </Footer>

            </Layout>
        );
    }
}

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <SiderDemo/>
        );
    }

}
export default App;
