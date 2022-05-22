import React, { useEffect, useState } from 'react'
import Loader from '../CommonComponents/Loader'
import Pagination from '../CommonComponents/Pagination'
import PhotoCard from './PhotoCard'
import usePhotoListDetails from '../../hooks/usePhotoListDetails'
import useAppSelector from '../../Redux/hooks'
import classes from '../../css/Common.module.css';
import useUserListDispatch from '../../Redux/userLists/usersListAction'

const ListPhoto = (props) => {
    const { photoList, loader } = usePhotoListDetails()
    const { updateUserId } = useUserListDispatch()
    const photos = useAppSelector((state) => state.photoList.photos)
    const { albums } = useAppSelector((state) => state.albumList)
    const { users, userId } = useAppSelector((state) => state.userList)
    const userData = users.filter(user => user.id === userId)
    const albumData = albums && albums.filter(album => album.id === Number(props.location.albumId))
    const userName = userData && userData.length > 0 && userData[0].name || ''
    const albumTitle = albumData && albumData.length > 0 && albumData[0].title || ''
    const [currentPhotoes, setCurrentPhotoes] = useState(photos)

    useEffect(() => {
        updateUserId(Number(props.location.userId))
        photoList(Number(props.match.params.id))
    }, [])


    const onPageChanged = (data) => {
        const { currentPage, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentPhotoes = photos.slice(offset, offset + pageLimit);

        setCurrentPhotoes(currentPhotoes)
    }

    return (
        <>
            {!loader ?
                <>
                    <Pagination
                        totalRecords={photos.length}
                        pageNeighbours={1}
                        onPageChanged={onPageChanged}
                    />
                    <div className={classes.photoWrapper}>
                        <div className={classes.albumOwner}>{userName + 'Album'}</div>
                        <div className={classes.ownerAlbumTitle}>{albumTitle}</div>
                        <div className={classes.photoInnerWrapper} >
                            {currentPhotoes.map(photos => (
                                <PhotoCard key={photos.id} photos={photos} albumTitle={albumTitle} userName={userName}/>
                            ))}
                        </div>
                    </div>
                </>
                :
                <Loader />
            }
        </>
    )
}

export default ListPhoto