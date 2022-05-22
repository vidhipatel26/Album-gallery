import * as types from '../ActionTypes/Types'

const initialState = {
    albums: [],
    pageLimit: 20,
};

const albumListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_ALBUM_LIST:
            return { ...state, albums: action.payload }

        case types.UPDATE_PAGE_LIMIT:
            return { ...state, pageLimit: action.payload }

        default:
            return state;
    }
};

export default albumListReducer