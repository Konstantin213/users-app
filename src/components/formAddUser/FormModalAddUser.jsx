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
    const validateMessages = {
        // eslint-disable-next-line no-template-curly-in-string
        required: "Требуется ввести ${label}",
        types: {
            email: 'Введите корректный Email',
        },
        string: {
            // eslint-disable-next-line no-template-curly-in-string
            min: "${label} может содержать только буквы"
        },
        number: {
            range: "${label} должен быть от ${min} до ${max}"
        },
    }

    return (
        <Modal
            visible={visible}
            title="Добавить пользователя"
            okText="Добавить"
            cancelText="Отмена"
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
                validateMessages={validateMessages}
                layout="vertical"
                size="small"
                name="form_in_modal"
            >
                <Form.Item
                    name={'age'}
                    label="Возраст"
                    rules={[
                        {
                            type: "number",
                            required: true,
                            min: 18,
                            max: 99,
                        },
                    ]}
                >
                    <InputNumber/>
                </Form.Item>
                <Form.Item
                    name={'userName'}
                    label="Ник пользователя"
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
                    label="Имя"
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
                    label="Фамилия"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name={'geolocation'}
                    label="Страна"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name={'email'}
                    label="Email"
                    rules={[
                        {
                            required: true,
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
