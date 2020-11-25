import React from 'react';
import 'antd/dist/antd.css';
import {Modal, Form, Input, InputNumber} from 'antd';

const FormModalAddUser = ({visible, onCreate, onCancel}) => {

    const [form] = Form.useForm();
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    return (
        <Modal
            visible={visible}
            title="Add new user"
            okText="Add"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={(e) => {
                e.preventDefault()
                form
                    .validateFields()
                    .then(formData => {
                        form.resetFields();
                        onCreate(formData);
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
            >
                <Form.Item
                    name={'age'}
                    label="Age"
                    rules={[
                        {
                            type: "number",
                            min: 0,
                            max: 99,
                        },
                    ]}
                >
                    <InputNumber/>
                </Form.Item>
                <Form.Item
                    name={'userName'}
                    label="UserName"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name={'firstName'}
                    label="FirstName"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name={'lastName'}
                    label="LastName"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name={'geolocation'}
                    label="Geolocation"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name={'email'}
                    label="Email"
                    rules={[
                        {
                            type: 'email'
                        },
                    ]}>
                    <Input/>
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default FormModalAddUser
