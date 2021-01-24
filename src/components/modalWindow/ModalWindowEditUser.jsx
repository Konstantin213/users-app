import React, {useState} from 'react'
import 'antd/dist/antd.css';
import {Button, Modal, Form, Input, InputNumber} from "antd";
import {useDispatch} from "react-redux";
import {editUser} from "../../redux/usersReducer";
import {infoMessageSuccessEdit} from "../utilits/infoMessageSuccessEdit";
import s from "./modal.module.css"

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const ModalWindowEditUser = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const dispatch = useDispatch()

    const [form] = Form.useForm();

    const {user} = props

    const editingUser = (editValue) => dispatch(editUser(editValue))

    const onFinish = (formValues) => {
        setIsModalVisible(false);
        infoMessageSuccessEdit()
        editingUser(formValues)
    }


    const validateMessages = {
        // eslint-disable-next-line no-template-curly-in-string
        required: "Требуется ввести '${label}'",
        types: {
            email: 'Введите корректный Email',
        },
        string: {
            // eslint-disable-next-line no-template-curly-in-string
            min: "'${label}' может содержать только буквы"
        },
    }

    return (
        <>
            <Button type="primary"
                    onClick={showModal}>
                Редактировать
            </Button>
            <Modal className={s.editForm}
                   title="Редактирование"
                   visible={isModalVisible}
                   onOk={handleOk}
                   onCancel={handleCancel}>
                <div>
                    <Form {...layout}
                          form={form}
                          onFinish={onFinish}
                          validateMessages={validateMessages}>
                        <Form.Item
                            name={'userName'}
                            initialValue={user.userName}
                            label="Ник пользователя"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={'age'}
                            initialValue={user.age}
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
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={'firstName'}
                            initialValue={user.firstName}
                            label="Имя"
                            rules={[
                                {
                                    required: true,
                                    type: "string",
                                },
                            ]}
                        >
                            <InputNumber/>
                        </Form.Item>
                        <Form.Item
                            name={'lastName'}
                            initialValue={user.lastName}
                            label="Фамилия"
                            rules={[
                                {
                                    required: true,
                                    type: "string",
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={'geolocation'}
                            initialValue={user.geolocation}
                            label="Страна"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={'email'}
                            initialValue={user.email}
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                        </Form.Item>
                        <Form.Item
                            name={'id'}
                            initialValue={user.id}
                            hidden={true}
                        >
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Сохранить
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
};
export default ModalWindowEditUser