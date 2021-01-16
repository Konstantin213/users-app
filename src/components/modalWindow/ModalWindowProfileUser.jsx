import React from 'react';
import 'antd/dist/antd.css';
import {Modal, Space, Button} from 'antd';
import {Card} from 'antd';
import s from './modal.module.css'
import ModalWindowEditUser from "./ModalWindowEditUser";

const ReachableContext = React.createContext();

const UnreachableContext = React.createContext();

const ModalWindow = (props) => {

    const {user} = props

    const config = {
        title: 'Профиль',
        visible: false,
        keyboard: true,
        maskClosable: true,
        content: <div>
            <Card size="small" title={user.userName} style={{width: 300}}>
                <p><img src={user.avatar} alt={'In progress'}/></p>
                <p>Возраст : {user.age}</p>
                <p>Имя : {user.firstName}</p>
                <p>Фамилия : {user.lastName}</p>
                <p>Страна : {user.geolocation}</p>
                <p>Email : {user.email}</p>
                <p><ModalWindowEditUser user={user}/></p>
            </Card>
        </div>
    }
    const [modal, contextHolder] = Modal.useModal();

    return (
        <ReachableContext.Provider value="Light">
            <Space>
                <div className={s.buttonProfile}>
                    <Button type="primary" onClick={() => {
                        modal.info(config)
                    }}>
                        Профиль
                    </Button>
                </div>
            </Space>
            {contextHolder}
            <UnreachableContext.Provider value="Bamboo"/>
        </ReachableContext.Provider>
    );
};
export default ModalWindow;
