import React from 'react';
import 'antd/dist/antd.css';
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import {Modal, Space, Tooltip} from 'antd';

const ReachableContext = React.createContext();

const UnreachableContext = React.createContext();

const ModalWindowAntd = ({user, deleteUser}) => {

    const config = {
        title: 'Are you sure?',
        visible: false,
        onOk: () => deleteUser(user.id)
    }
    const [modal, contextHolder] = Modal.useModal();

    return (
        <ReachableContext.Provider value="Light">
            <Space>
                <div>
                    <Tooltip title="Delete user">
                        <span><CloseOutlined onClick={() => {
                            modal.confirm(config)
                        }}/>
                        </span>
                    </Tooltip>
                </div>
            </Space>
            {contextHolder}
            <UnreachableContext.Provider value="Bamboo"/>
        </ReachableContext.Provider>
    );
};
export default ModalWindowAntd;
