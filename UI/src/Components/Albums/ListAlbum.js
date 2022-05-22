import React, { useEffect, useState } from 'react'
import Album from './Album'
import Loader from '../CommonComponents/Loader'
import Pagination from '../CommonComponents/Pagination'
import useAlbumListDetails from '../../hooks/useAlbumListDetails'
import useAppSelector from '../../Redux/hooks'
import classes from '../../css/Common.module.css'


const ListAlbum = () => {

    const { albumsList, loader } = useAlbumListDetails()
    const { albums, pageLimit  } = useAppSelector((state) => state.albumList)
    const [currentAlbums, setCurrentAlbums] = useState(albums)

    useEffect(() => {
        albumsList(pageLimit)
    }, [])

    const onPageChanged = (data) => {
        const { currentPage, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentAlbums = albums.slice(offset, offset + pageLimit);

        setCurrentAlbums(currentAlbums)
    };

    return (
        <>
            {!loader ?
                <>
                    <Pagination
                        totalRecords={albums.length}
                        pageNeighbours={1}
                        onPageChanged={onPageChanged}
                    />
                    <div className={classes.albumGalleryTitle}>Album Gallery</div>
                    <div className={classes.albumWrapper} >
                        {currentAlbums.map(albums => (
                            <Album key={albums.id} albums={albums}/>
                        ))}
                    </div>
                </>
                :
                <Loader />
            }
        </>
    )
}

export default ListAlbum