export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_MORE_USERS = 'SET_MORE_USERS';
export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_EDIT_USER = 'SET_EDIT_USER';

export const setUserProfile = (users) => ({type: SET_USER_PROFILE, users});
export const setMoreUsers = (users) => ({type: SET_MORE_USERS, users});
export const setSearchResult = (users) => ({type: SET_SEARCH_RESULT, users});
export const addUserToState = (formValues) => ({type: ADD_USER, formValues});
export const deleteUserFromState = (id) => ({type: DELETE_USER, id});
export const setEditUserFromState = (data) => ({type: SET_EDIT_USER, data});
