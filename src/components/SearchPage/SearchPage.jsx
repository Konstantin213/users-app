import React from "react";
import {useDispatch, useSelector} from "react-redux";
import 'antd/dist/antd.css';
import {useHistory} from "react-router-dom";
import s from './searchPage.module.css'
import sU from '../../Users/user.module.css'
import User from "../../Users/User";
import * as _ from "lodash";
import ArrowLeftOutlined from "@ant-design/icons/lib/icons/ArrowLeftOutlined"
import {getUsersProfile} from "../../redux/usersReducer";

const SearchPage = () => {

    const userFind = useSelector(state => state.usersPage.userFind);

    const userSearch = _.map(userFind, u => <User user={u} key={u.id}/>)

    const history = useHistory()

    const dispatch = useDispatch()

    return (
        <div>
                        <span>
                            <ArrowLeftOutlined
                            className={s.backButton}
                            onClick={() => {
                                history.push({pathname: '/'})
                                dispatch(getUsersProfile())
                            }}
                        /></span>
            <div className={sU.wrapperFromUser}>
                {userSearch}
            </div>
        </div>
    );
}

export default SearchPage;
