import { useCallback, useState } from 'react'
import useUserListDispatch from '../Redux/userLists/usersListAction'

const useUserListDetails = () => {

    const [loader, setLoader] = useState(true)
    const { updateUserList, updateErrorStatus } = useUserListDispatch()

    const usersList = useCallback(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(results => results.json())
            .then(data => {
                if (data.length > 0) {
                    updateUserList(data)
                    setLoader(false)
                    updateErrorStatus(false)
                } else {
                    updateErrorStatus(true)
                    setLoader(false)
                }
            }).catch((err) => {
                updateErrorStatus(true)
                setLoader(true)
            })
    })

    return {
        usersList,
        loader,
    }
}

export default useUserListDetails
