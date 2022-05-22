import * as types from '../ActionTypes/Types';
import { useDispatch } from 'react-redux'

const useUserListDispatch = () => {
    const dispatch = useDispatch()

    const updateUserList = (users) => {
        dispatch({
            type: types.UPDATE_USER_LIST,
            payload: users,
        })
    }

    const updateUserId = (userId) => {
        dispatch({
            type: types.USER_ID,
            payload: userId,
        })
    }

    return {
        updateUserList,
        updateUserId
    }
}

export default useUserListDispatch