import React, { useState } from 'react'
import classes from './Modal.module.css';

const Modal = (props) => {

  const height = {
    height: `${props.height}vh`,
  }

  const [hideModal, setHideModal] = useState(false);

  const hideModalHandler = () => {
      setHideModal((prev) => {
          return !prev;
      })
  }

  return (
    <div className={classes.modal} style={{display:hideModal ? 'none' : 'flex'}}>
        <div className={classes.modalContent} style={height}>
            <div></div>
        </div>
        {props.children}
    </div>
  )
}

export default Modal;