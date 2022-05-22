import * as types from '../ActionTypes/Types';
import { useDispatch } from 'react-redux'

const usePhotoListDispatch = () => {
    const dispatch = useDispatch()

    const updatePhotoList = (photoes) => {
        dispatch({
            type: types.UPDATE_PHOTO_LIST,
            payload: photoes,
        })
    }

    return {
        updatePhotoList
    }
}

export default usePhotoListDispatch