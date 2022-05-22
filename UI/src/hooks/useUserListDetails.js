import { useCallback, useState } from 'react'
import useUserListDispatch from '../Redux/userLists/usersListAction'

const useUserListDetails = () => {

    const [ loader, setLoader ] = useState(true)
    const { updateUserList } = useUserListDispatch()

    const usersList = useCallback(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(results => results.json())
            .then(data => {
                updateUserList(data)
                setLoader(false)
            }).catch((err) => {
                console.log(err)
                setLoader(true)
            })
    })

    return {
        usersList,
        loader,
    }
}

export default useUserListDetails
