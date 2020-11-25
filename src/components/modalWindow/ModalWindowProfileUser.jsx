import React from 'react';
import 'antd/dist/antd.css';
import {Modal, Space, Button} from 'antd';
import s from './modal.module.css'

const ReachableContext = React.createContext();

const UnreachableContext = React.createContext();

const ModalWindow = ({user}) => {

    const config = {
        title: 'Profile',
        visible: false,
        keyboard: true,
        maskClosable : true,
        content: <div>
            <img src={user.avatar} alt={'In progress'}/>
            <div>Id : {user.id}</div>
            <div>Username : {user.userName}</div>
            <div>Age : {user.age}</div>
            <div>First Name : {user.firstName}</div>
            <div>Last Name : {user.lastName}</div>
            <div>Geolocation : {user.geolocation}</div>
            <div>Email : {user.email}</div>
        </div>
    }
    const [modal, contextHolder] = Modal.useModal();

    return (
        <ReachableContext.Provider value="Light">
            <Space>
                <div className={s.buttonProfile}>
                    <Button type="primary" onClick={() => {
                        modal.info(config)}}>
                        Profile
                    </Button>
                </div>
            </Space>
            {contextHolder}
            <UnreachableContext.Provider value="Bamboo"/>
        </ReachableContext.Provider>
    );
};
export default ModalWindow;

