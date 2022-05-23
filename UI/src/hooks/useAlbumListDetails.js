import { useCallback, useState } from 'react'
import useAlbumListDispatch from '../Redux/albumLists/albumsListAction'
import useUserListDispatch from '../Redux/userLists/usersListAction'

const useAlbumListDetails = () => {

    const { updateAlbumList } = useAlbumListDispatch()
    const [loader, setLoader] = useState(true)
    const { updateErrorStatus } = useUserListDispatch()

    const albumsList = useCallback(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(results => results.json())
            .then(data => {
                if (data.length > 0) {
                    updateAlbumList(data)
                    setLoader(false)
                    updateErrorStatus(false)
                } else {
                    updateErrorStatus(true)
                }
            }).catch((err) => {
                updateErrorStatus(true)
                setLoader(true)
            })
    })

    return {
        albumsList,
        loader
    }
}

export default useAlbumListDetails
