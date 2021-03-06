import React, { useEffect, useState } from 'react'
import Loader from '../CommonComponents/Loader'
import Pagination from '../CommonComponents/Pagination'
import PhotoCard from './PhotoCard'
import usePhotoListDetails from '../../hooks/usePhotoListDetails'
import useAppSelector from '../../Redux/hooks'
import classes from '../../css/Common.module.css';
import useUserListDispatch from '../../Redux/userLists/usersListAction'
import useAlbumListDetails from '../../hooks/useAlbumListDetails'
import useUserListDetails from '../../hooks/useUserListDetails'

const ListPhoto = (props) => {
    const { photoList, loader } = usePhotoListDetails()
    const photos = useAppSelector((state) => state.photoList.photos)
    const { albums, pageLimit } = useAppSelector((state) => state.albumList)
    const { users, isError } = useAppSelector((state) => state.userList)

    const pathName = props.location.pathname.split('/')
    const activeUserId = Number(pathName.find((e) => e.includes('active')).split('=')[1])
    const clickedAlbumId = Number((props.match.params.id).split('=')[1])

    const userData = users.filter(user => user.id === activeUserId)
    const albumData = albums && albums.filter(album => album.id === clickedAlbumId)
    const userName = userData && userData.length > 0 && userData[0].name || ''
    const albumTitle = albumData && albumData.length > 0 && albumData[0].title || ''

    const [currentPhotoes, setCurrentPhotoes] = useState(photos)
    const { albumsList } = useAlbumListDetails()
    const { usersList } = useUserListDetails()

    useEffect(() => {
        photoList(clickedAlbumId)
        if (!albums.length > 0) {
            albumsList(pageLimit)
        }
        if (!users.length > 0) {
            usersList()
        }
    }, [])


    const onPageChanged = (data) => {
        const { currentPage, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentPhotoes = photos.length > 0 && photos.slice(offset, offset + pageLimit);

        setCurrentPhotoes(currentPhotoes)
    }

    return (
        <>
            {isError ? (
                <div className={classes.error}>
                    <i class="material-icons error-icon">API Failed ! Please refresh the page.</i>
                </div>
            ) : !loader ?
                <>
                    <Pagination
                        totalRecords={photos.length}
                        pageNeighbours={1}
                        onPageChanged={onPageChanged}
                    />
                    <div className={classes.photoWrapper}>
                        <div className={classes.albumOwner}>{userName + ' Album'}</div>
                        <div className={classes.ownerAlbumTitle}>{albumTitle}</div>
                        <div className={classes.photoInnerWrapper} >
                            {currentPhotoes.length > 0 && currentPhotoes.map(photos => (
                                <PhotoCard key={photos.id} photos={photos} albumTitle={albumTitle} userName={userName} />
                            ))}
                        </div>
                    </div>
                </>
                : <Loader />
            }
        </>
    )
}

export default ListPhoto