import React, { useEffect } from 'react'
import classes from '../css/Common.module.css'
import ListAlbum from './Albums/ListAlbum'
import Loader from '../Components/CommonComponents/Loader.js';
import useUserListDetails from '../hooks/useUserListDetails'

const Dashboard = () => {
    const { loader, usersList } = useUserListDetails()

    useEffect(() => {
        usersList()
    }, [])

    return (
        <>
            <div className={classes.listWrapper}>
                {loader ? <Loader /> : <ListAlbum />}
            </div>
        </>
    )

}

export default Dashboard