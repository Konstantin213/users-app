import React, {useState} from "react";
import User from "./User";
import s from "./user.module.css"
import * as _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'antd/dist/antd.css';
import {Select} from "antd";

const {Option} = Select;

const Users = (props) => {

    const [selectedValue, setSelectedValue] = useState()

    const {hasMore, users, getMoreUsers, deleteUser} = props

    const renderUsers = (value) => _.map(value, u => <User
        user={u}
        key={u.id}
        deleteUser={deleteUser}/>)

    const onChange = (value) => {
        setSelectedValue(value)
    }

    const filteredUsers = (selectedValue) => {
        switch (selectedValue) {
            case 'all' : {
                return renderUsers(users)
            }
            case 'true' : {
                const filterList = _.filter(users, u => {
                    return u.boolean
                })
                return renderUsers(filterList)
            }
            case 'false' : {
                const filterList = _.filter(users, u => {
                    return !u.boolean
                })
                return renderUsers(filterList)
            }
            default :
                return renderUsers(users)
        }
    }
    return (
        <div>
            <InfiniteScroll
                dataLength={users}
                next={getMoreUsers}
                hasMore={hasMore}
            >
                <div className={s.filterButton}>
                    <Select placeholder='Показать :' style={{width: '200px', marginBottom: 30}} onChange={onChange}>
                        <Option value="Все">Все пользователи</Option>
                        <Option value="true">У кого 'True'</Option>
                        <Option value="false">У кого 'False'</Option>
                    </Select>
                </div>
                <div className={s.wrapperFromUser}>
                    {filteredUsers(selectedValue)}
                </div>
            </InfiniteScroll>
        </div>
    );
};
export default Users;
