import * as types from '../ActionTypes/Types'

const initialState = {
    photos: []
};

const photoListReducer = (state = initialState, action) => {
    switch (action.type) {

            case types.UPDATE_PHOTO_LIST:
                return { ...state, photos: action.payload };            

        default:
            return state;
    }
};

export default photoListReducer