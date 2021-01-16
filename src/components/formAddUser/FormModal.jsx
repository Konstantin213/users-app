import React, {useState} from "react";
import {Button, Tooltip} from "antd";
import FormModalAddUser from "./FormModalAddUser";

export const FormModal = ({addUser}) => {

    const [visible, setVisible] = useState(false);

    const onCreate = formData => {
        addUser(formData)
        setVisible(false);
    };

    return (
        <div>
            <Tooltip title="Добавить нового пользователя">
    <span>
        <Button
            type="primary"
            onClick={() => {
                setVisible(true)
            }}>
                Добавить нового пользователя
            </Button>
    </span>
            </Tooltip>
            <FormModalAddUser
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};