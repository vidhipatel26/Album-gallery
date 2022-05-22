import React from 'react';
import { Link } from "react-router-dom"
import classes from '../../css/Common.module.css'
import useAppSelector from '../../Redux/hooks';

const Album = (props) => {
    const users = useAppSelector((state) => state.userList.users)
    const { id = "", title = "", userId = "" } = props.albums || {};
    const getUserName = (userId) => {
        const userData = users.filter(user => user.id === userId)
        return userData[0].name
    }
    let dynamicColorAndName = Math.round(userId * 364650) + 1
    let imageSrc = `https://via.placeholder.com/150/${dynamicColorAndName}?text=.`

    return (
        <div className={classes.imgWrapper}>
            <Link to={{ pathname: `/photos/albumId=${id}/activeUserId=${userId}/`, userId: userId, albumId: id}}>
                <div className={classes.albumItemWrapper}>
                    <img src={imageSrc} className={classes.albumImg} />
                    <div className={classes.albumName}>{getUserName(userId)}</div>
                    <span className={classes.albumTitle}>{title}</span>

                </div>
            </Link>
        </div>
    )
}

export default Album
