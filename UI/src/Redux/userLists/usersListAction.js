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

    const updateErrorStatus = (isError) => {
        dispatch({
            type: types.UPDATE_ERROR_STATUS,
            payload: isError,
        })
    }

    return {
        updateUserList,
        updateErrorStatus
    }
}

export default useUserListDispatch