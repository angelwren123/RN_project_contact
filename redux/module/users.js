import { ofType } from 'redux-observable';
import * as Types from '../constants/constants';
import { getUsersActionSuccess } from '../actions/actionsTypes';
import { mergeMap } from "rxjs";
import callAPI from '../../utils/callApi';

export const getUsersEpic = action$ => action$.pipe(
    ofType(Types.GET_USERS),
    mergeMap(action =>
        callAPI(action.payload, 'GET', null)
            .then(res => getUsersActionSuccess(res?.data[0].data, res?.data[0].page, res?.data[0].total_pages))
    )
);
export const getUsersReFreshEpic = action$ => action$.pipe(
    ofType(Types.GET_USERS_REFRESH),
    mergeMap(async action => {
        const res = await callAPI(action.payload, 'GET', null);
        return getUsersActionSuccess(res?.data[0].data, res?.data[0].page, res?.data[0].total_pages);
    }
    )
);

const initialValue = {
    users: [],
    currentPage: 1,
    loading: false,
    total_pages: 1,
    usersFilter: [],
}
export default function getUsersReducer(state = initialValue, action) {
    // console.log(action);
    switch (action.type) {
        case Types.GET_USERS:
            return {
                ...state,
                loading: false,
            }
        case Types.GET_USERS_SUCCESS:
            return {
                ...state,
                users: [...state.users, ...action.payload.users],
                currentPage: action.payload.page,
                total_pages: action.payload.total_pages,
                loading: true,
                usersFilter: [...state.usersFilter, ...action.payload.users],
            }

        case Types.GET_USERS_REFRESH:
            return {
                ...state,
                users: [],
                currentPage: 1,
                loading: true,
                usersFilter: [],
            }

        case Types.SEARCH_USERS:
            console.log(state.usersFilter.length);
            const UsersFilter = [...state.usersFilter]
            if (action.payload !== '' || action.payload !== undefined) {
                const dataSort = UsersFilter.filter((user, idx) => {
                    return `${user.first_name} ${user.last_name}`.toLowerCase().includes(action.payload.toLowerCase())
                })
                if (dataSort.length > 0) {
                    return {
                        ...state,
                        users: dataSort
                    }
                } else {
                    return {
                        ...state,
                        users: []
                    }
                }
            } else {
                return {
                    ...state,
                    users: [...state.usersFilter],
                }
            }

        default:
            return state;
    }
}