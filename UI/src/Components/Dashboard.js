import React, { useEffect } from 'react'
import classes from '../css/Common.module.css'
import ListAlbum from './Albums/ListAlbum'
import Loader from '../Components/CommonComponents/Loader.js';
import useUserListDetails from '../hooks/useUserListDetails'
import useAppSelector from '../Redux/hooks';

const Dashboard = () => {
    const { loader, usersList } = useUserListDetails()
    const isError = useAppSelector((state) => state.userList.isError)

    useEffect(() => {
        usersList()
    }, [])

    return (
        <>
            <div className={classes.listWrapper}>
                {isError ? (
                <div className={classes.error}>
                    <i class="material-icons error-icon">API Failed ! Please refresh the page.</i>
                </div>
            ) : loader ? <Loader /> : <ListAlbum />}
            </div>
        </>
    )

}

export default Dashboard