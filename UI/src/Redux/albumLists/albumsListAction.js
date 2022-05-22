import * as types from '../ActionTypes/Types';
import { useDispatch } from 'react-redux'

const useAlbumListDispatch = () => {
    const dispatch = useDispatch()

    const updateAlbumList = (albums) => {
        dispatch({
            payload: albums,
            type: types.UPDATE_ALBUM_LIST,
        })
    }

    const updatePageLimit = (pageLimit) => {
        dispatch({
            payload: pageLimit,
            type: types.UPDATE_PAGE_LIMIT,
        })
    }

    return {
        updateAlbumList,
        updatePageLimit,
    }
}

export default useAlbumListDispatch