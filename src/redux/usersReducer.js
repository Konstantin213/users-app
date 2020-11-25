import {usersAPI} from "../api/api";
import {
    SET_USER_PROFILE,
    setUserProfile,
    SET_MORE_USERS,
    setMoreUsers,
    SET_SEARCH_RESULT, setSearchResult, ADD_USER, addUserToState, DELETE_USER, deleteUserFromState
} from "./actions";
import * as _ from "lodash";


let initialState = {
    users: [],
    hasMore: true,
    currentPage: 1,
    pageSize: 12,
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE : {
            return {
                ...state,
                users: action.users.slice(0, 12)
            }
        }
        case SET_MORE_USERS : {
            return {
                ...state,
                users: state.users.concat(action.users.slice
                (state.currentPage * state.pageSize, (state.currentPage + 1) * state.pageSize)),
                currentPage: state.currentPage + 1
            }
        }
        case SET_SEARCH_RESULT : {
            return {
                ...state,
                users: action.users
            };
        }
        case ADD_USER : {
            return {
                ...state,
                users: [...state.users, action.formValues]
            };
        }
        case DELETE_USER : {
            return {
                ...state,
                users: _.remove(state.users, function (u) {
                    return u.id !== action.id
                })
            }
        }
        default :
            return state;
    }
}
// thunk
export const getUsersProfile = () => {
    return async (dispatch) => {
        const data = await usersAPI.getUsers()
        dispatch(setUserProfile(data.users))
    }
};
export const getMoreUsers = () => {
    return async (dispatch) => {
        const data = await usersAPI.getUsers()
        dispatch(setMoreUsers(data.users))
    }
};
// search through a server request
export const searchResult = (value) => {
    return async (dispatch) => {
        const data = await usersAPI.getSearchResult(value)
        dispatch(setSearchResult(data.users))
    }
};
export const addNewUser = (formValues) => {
    return async (dispatch) => {
        await usersAPI.addUserRequest(formValues)
        dispatch(addUserToState(formValues))
    }
};
export const deleteUser = (id) => {
    return async (dispatch) => {
        await usersAPI.deleteUserRequest(id)
        dispatch(deleteUserFromState(id))
    }
};

export default usersReducer;
