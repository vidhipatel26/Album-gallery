import React from 'react';
import { Link } from "react-router-dom"
import classes from '../../css/Common.module.css'
import useAppSelector from '../../Redux/hooks';

const Album = (props) => {
    const { isError, users } = useAppSelector((state) => state.userList)
    const { id = "", title = "", userId = "" } = props.albums || {};
    const getUserName = (userId) => {
        const userData = users && users.filter(user => user.id === userId)
        return userData[0] && userData[0].name
    }
    let dynamicColorAndName = Math.round(userId * 255255) + 1
    let imageSrc = `https://via.placeholder.com/150/${dynamicColorAndName}?text=.`

    return (
        <>
            {isError ? (
                <div className={classes.error}>
                    <i class="material-icons error-icon">API Failed ! Please refresh the page.</i>
                </div>
            ) :
                <div className={classes.imgWrapper}>
                    <Link to={{ pathname: `/photos/albumId=${id}/activeUserId=${userId}/`, userId: userId, albumId: id }}>
                        <div className={classes.albumItemWrapper}>
                            <img src={imageSrc} className={classes.albumImg} alt="thumbnail"/>
                            <div className={classes.albumName}>{getUserName(userId)}</div>
                            <span className={classes.albumTitle} title={title}>{title}</span>

                        </div>
                    </Link>
                </div>}
        </>
    )
}

export default Album
