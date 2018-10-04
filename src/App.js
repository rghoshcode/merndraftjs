import React, { Component } from 'react';

import './App.css';
import 'antd/dist/antd.css';
import 'react-quill/dist/quill.snow.css';
import { Layout,  } from 'antd';
import { Input } from 'antd';

const { TextArea } = Input;
const { Header, Content, Footer } = Layout;


class NewPost extends React.Component {
    render() {
        return (
            <div style={{ margin: '10px 2px', borderColor:'black', }}>
                <TextArea placeholder="Put in a title for the question you wish to post here" autosize />
                <div style={{ margin: '24px 0' }} />
                <TextArea placeholder="The main content of your question goes here" autosize={{ minRows: 8, maxRows: 20 }} />
                <div align="right">
                    <button className='bar-button' onClick={this.onNewPostPost}>Post</button>
                    <button className='bar-button' onClick={this.onNewPostDiscard}>Discard</button>
                </div>
            </div>
        );
    }
}

class SiderDemo extends React.Component {
    state = {
        showNewDraftPost: false,
    };

    onNewPost = (clicked) => {
        console.log(clicked);
        if(this.state.showNewDraftPost === false)
        this.setState({ showNewDraftPost: true });
    }
//<Icon style={{ width: '40px' }} type="plus-square" theme="twoTone" />

    render() {
        return (
            <div>

            <Layout style={{ minHeight: '100vh' }}>
                    <Header id='header' >
                        Minimalist. Resourceful. Reliable.

                    </Header>
                    <Content style={{ margin: '0 2px' }}>
                    <div align="left"><button className='bar-button' onClick={this.onNewPost}>New Question</button></div>
                        { this.state.showNewDraftPost && <NewPost/>}

                    </Content>
                    <Footer style={{ textAlign: 'center', fontSize: '10px' }}>
                        CtrlShiftF.com ©2018 Designed by Ranajoy Ghosh
                    </Footer>

            </Layout>
            </div>
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
