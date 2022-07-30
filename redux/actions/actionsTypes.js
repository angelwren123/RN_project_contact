import * as Types from '../constants/constants'
export const getUsersAction = (data) => {
    return {
        type: Types.GET_USERS,
        payload:data
    }
};
export const getAllUsers = (data) => {
    return {
        type: Types.GET_ALL_USERS,
        payload:data
    }
};
export const getUsersActionSuccess = (users,page,total_pages) =>{
    return {
        type: Types.GET_USERS_SUCCESS,
        payload:{
            users,
            page,
            total_pages
        }
    }
}
export const getUsersActionRefresh = (data) =>{
    return {
        type: Types.GET_USERS_REFRESH,
        payload:data
    }
}

export const searchUsers = (keyword) =>{
    return {
        type: Types.SEARCH_USERS,
        payload:keyword
    }
}