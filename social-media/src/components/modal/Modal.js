import React, { useState } from 'react'
import classes from './Modal.module.css';

const Modal = (props) => {

  const [hideModal, setHideModal] = useState(false);

  const hideModalHandler = () => {
      setHideModal((prev) => {
          return !prev;
      })
  }

  return (
    <div className={classes.modal} onClick={hideModalHandler} style={{display:hideModal ? 'none' : 'flex'}}>
        <div className={classes.modalContent}>
            <div></div>
        </div>
        {props.children}
    </div>
  )
}

export default Modal;