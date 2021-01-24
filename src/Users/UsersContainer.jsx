import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Users from "./Users";
import {
    addNewUser,
    deleteUser,
    getMoreUsers,
    getUsersProfile,
    searchResult
} from "../redux/usersReducer";
import 'antd/dist/antd.css';
import s from "./user.module.css";
import sch from "../components/SearchPage/search.module.css";
import {Input} from "antd";
import {useHistory} from "react-router-dom";
import wrap from './wrapper.module.css'
import {FormModal} from "../components/formAddUser/FormModal";

const {Search} = Input;

const UsersContainer = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        dispatch(getUsersProfile())
    }, []);

    const users = useSelector(state => state.usersPage.users);

    const hasMore = useSelector(state => state.usersPage.hasMore);

    const moreUsers = useCallback(() => dispatch(getMoreUsers()), []);

    const userDelete = (id) => dispatch(deleteUser(id));

    const userSearch = (value) => dispatch(searchResult(value));

    const addUser = (formValues) => dispatch(addNewUser(formValues));

    const onSearch = (value) => {
        userSearch(value)
        history.push({pathname: '/search'})
    };

    return (
        <div className={wrap.wrapper}>
            <div className={s.formAddUser}>
                <div className={sch.search}>
                    <Search
                        maxLength={20}
                        placeholder="Поиск пользователя"
                        onSearch={onSearch}
                        style={{width: 200}}
                    />
                </div>
                <FormModal addUser={addUser}/>
            </div>
            <Users
                users={users}
                deleteUser={userDelete}
                hasMore={hasMore}
                getMoreUsers={moreUsers}
            />
        </div>
    );
}
export default UsersContainer;
