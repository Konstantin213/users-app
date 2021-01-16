import React from "react";
import {useSelector} from "react-redux";
import 'antd/dist/antd.css';
import {useHistory} from "react-router-dom";
import s from './searchPage.module.css'
import sU from '../../Users/user.module.css'
import User from "../../Users/User";
import * as _ from "lodash";
import {Tooltip} from "antd";
import ArrowLeftOutlined from "@ant-design/icons/lib/icons/ArrowLeftOutlined"

const SearchPage = () => {

    const user = useSelector(state => state.usersPage.users);

    const userSearch = _.map(user, u => <User user={u} key={u.id}/>)

    const history = useHistory()

    return (
        <div>
            <Tooltip>
                        <span><ArrowLeftOutlined
                            className={s.backButton}
                            onClick={() => {
                                history.push({pathname: '/users'})
                            }}
                        /></span>
            </Tooltip>
            <div className={sU.wrapperFromUser}>
                {userSearch}
            </div>
        </div>
    );
}

export default SearchPage;
