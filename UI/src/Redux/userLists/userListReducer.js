import * as types from '../ActionTypes/Types'

const initialState = {
    users: [],
    isError: false
};

const userListReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.UPDATE_USER_LIST:
            return { ...state, users: action.payload }

        case types.UPDATE_ERROR_STATUS:
            return { ...state, isError: action.payload }

        default:
            return state;
    }
};

export default userListReducer