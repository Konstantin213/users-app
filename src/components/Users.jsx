import React from "react";
import User from "./User";
import s from "./user.module.css"
import * as _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'antd/dist/antd.css';

const Users = (props) => {

    const {hasMore, users, getMoreUsers,deleteUser } = props

    const renderUsers = _.map(users, u => <User
        user={u}
        key={u.id}
        deleteUser={deleteUser}/>)

    return (
        <div>
            <InfiniteScroll
                dataLength={users}
                next={getMoreUsers}
                hasMore={hasMore}
            >
                <div className={s.wrapperFromUser}>
                    {renderUsers}
                </div>
            </InfiniteScroll>
        </div>
    );
};
export default Users;
