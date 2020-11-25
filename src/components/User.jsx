import React from "react";
import s from "./user.module.css"
import 'antd/dist/antd.css';
import ModalWindow from "./modalWindow/ModalWindowProfileUser";
import ModalWindowDeleteUser from "./modalWindow/ModalWindowDeleteUser";

const User = ({user,deleteUser}) => {

    return (
        <div className={s.user}>
            <div className={s.deleteProfile}>
                <ModalWindowDeleteUser user={user} deleteUser={deleteUser}/>
            </div>
            <div>
                <img src={user.avatar} alt={'In progress'}/>
            </div>
            <div>
                <div className={s.userName}>Username : {user.userName}</div>
            </div>
            <ModalWindow user={user}/>
        </div>
    )
}
export default User;