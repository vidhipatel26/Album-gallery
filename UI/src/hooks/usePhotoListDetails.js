import { useCallback, useState } from 'react'
import usePhotoListDispatch from '../Redux/photoLists/photosListAction'

const usePhotoListDetails = () => {

    const { updatePhotoList } = usePhotoListDispatch()
    const [ loader, setLoader ] = useState(true)

    const photoList = useCallback((albumId) => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(results => results.json())
            .then(data => {
                updatePhotoList(data)
                setLoader(false)
            }).catch((err) => {
                console.log(err)
                setLoader(true)
            })
    })

    return {
        photoList,
        loader
    }
}

export default usePhotoListDetails
