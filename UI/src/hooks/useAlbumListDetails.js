import { useCallback, useState } from 'react'
import useAlbumListDispatch from '../Redux/albumLists/albumsListAction'

const useAlbumListDetails = () => {

    const { updateAlbumList } = useAlbumListDispatch()
    const [ loader, setLoader ] = useState(true)

    const albumsList = useCallback(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(results => results.json())
            .then(data => {
                updateAlbumList(data)
                setLoader(false)
            }).catch((err) => {
                console.log(err)
                setLoader(true)
            })
    })

    return {
        albumsList,
        loader
    }
}

export default useAlbumListDetails
