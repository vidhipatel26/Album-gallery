import { useCallback, useState } from 'react'
import usePhotoListDispatch from '../Redux/photoLists/photosListAction'
import useUserListDispatch from '../Redux/userLists/usersListAction'

const usePhotoListDetails = () => {

    const { updatePhotoList } = usePhotoListDispatch()
    const [loader, setLoader] = useState(true)
    const { updateErrorStatus } = useUserListDispatch()

    const photoList = useCallback((albumId) => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(results => results.json())
            .then(data => {
                if (data.length > 0) {
                    updatePhotoList(data)
                    setLoader(false)
                    updateErrorStatus(false)
                } else {
                    updateErrorStatus(true)
                }
            }).catch((err) => {
                setLoader(false)
                updateErrorStatus(true)
            })
    })

    return {
        photoList,
        loader
    }
}

export default usePhotoListDetails
