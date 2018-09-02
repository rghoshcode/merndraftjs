import React, { Component } from 'react';

import './App.css';
import 'antd/dist/antd.css';

import { Form, Input, Button } from 'antd';
import RichEditorExample from "./RichEditorExample";

const FormItem = Form.Item;



class AdvancedSearchForm extends Component {
    constructor() {
        super();
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Form layout="vertical"
                      onSubmit={this.handleSearch}>

                    <FormItem
                    >
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })
                        (<Input placeholder="input placeholder" />)}
                    </FormItem>
                    <FormItem
                    >
                        {getFieldDecorator('pass', {
                            rules: [{ required: true, message: 'Please input your pass!' }],
                        })
                        (<Input placeholder="input placeholder" />)}
                    </FormItem>

                    <FormItem
                    >
                        {getFieldDecorator('editor', {
                            rules: [{ required: true, }],
                        })
                        (<RichEditorExample />)}
                    </FormItem>
                    <FormItem >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }

}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <WrappedAdvancedSearchForm/>
        );
    }

}
export default App;
