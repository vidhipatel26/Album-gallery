import React, { useState } from "react";
import classes from '../../css/Common.module.css';
import Modal from 'react-modal';

const PhotoCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const { title = "", url = "", thumbnailUrl = "" } =
        props.photos || {};

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const customStyles = {
        content: {
            background: 'rgba(0,0,0,0.7)',
            width: '100%',
            height: '100%',
            left: '0',
            right: '0',
            margin: '0 auto',
            top: '50%',
            transform: 'translateY(-50%)',
            padding: '0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    }
    return (
        <>
            <div className={classes.photoHolder} key={Math.random()} onClick={toggleModal}>
                <img src={thumbnailUrl} className={classes.thumbnail} alt="thumbnail" />
                <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    style={customStyles}
                >
                    <div className={classes.photoDescModal}>
                        <p>{props.userName}</p>
                        <p>{props.albumTitle}</p>
                        <p>{title}</p>
                    </div>
                    <img src={url} alt="lightbox" className={classes.imgModal} />
                    <button onClick={toggleModal} className={classes.closeBtn}>X</button>
                </Modal>

                <div className={classes.photoDesc}>
                    <p title={title}>{title}</p>
                </div>
            </div>
        </>
    );
}

export default PhotoCard;