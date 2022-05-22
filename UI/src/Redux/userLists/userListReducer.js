import * as types from '../ActionTypes/Types'

const initialState = {
    users: [],
    userId: null
};

const userListReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.UPDATE_USER_LIST:
            return { ...state, users: action.payload }

        case types.USER_ID:
            return { ...state, userId: action.payload }

        default:
            return state;
    }
};

export default userListReducer