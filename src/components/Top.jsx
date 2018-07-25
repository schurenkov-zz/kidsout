import React from 'react';

import injectSheet from 'react-jss';
const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 72
  },
  button: {
    border: '1px solid #c7c7c7',
    background: 'transparent',
    cursor: 'pointer'
  },
  buttonMiddle: {
    padding: '7px 16px 9px 17px',
    borderWidth: '1px 0px'
  },
  buttonLeft: {
    borderRadius: '5px 0 0 5px',
    padding: '7px 36px 9px 32px'
  },
  buttonRight: {
    padding: '7px 10px 9px 15px',
    borderRadius: '0 5px 5px 0'
  },
  buttonActive: {
    background: '#5dcb8e',
    borderColor: '#5dcb8e',
    color: '#fff'
  },
  userName: {
    fontSize: 15,
    lineHeight: '20px',
    margin: 0
  },
  userActive: {
    color: '#898989',
    fontSize: 12,
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: 1,
    '&:before': {
      content: `''`,
      position: 'relative',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#5dcb8e',
      display: 'block',
      marginRight: 4
    }
  },
  middle: {
    textAlign: 'center'
  },
  linkProfile: {
    color: '#1172e0',
    fontSize: 15,
    textDecoration: 'none'
  },
  right: {
    display: 'flex',
    alignItems: 'center',
  },
  iconButton: {
    background: 'transparent',
    border: 'none',
    textShadow: 'none',
    marginLeft: 10
  }
};

export default injectSheet(styles)((props) => {
  const { dialogs, users, activeDialog } = props;
  return <div className={props.classes.wrap}>
          <div>
            <button className={`${props.classes.button} ${props.classes.buttonLeft} ${props.classes.buttonActive}`}>Все</button>
            <button className={`${props.classes.button} ${props.classes.buttonMiddle}`}>С заказами</button>
            <button className={`${props.classes.button} ${props.classes.buttonRight}`}>Избранные</button>
          </div>
          <div className={props.classes.middle}>
              <p className={props.classes.userName}>{users[dialogs[activeDialog].users.user].name}</p>
              {
                users[dialogs[activeDialog].users.user].status == 'online'
                ?
                  <span className={props.classes.userActive}>В сети</span>
                : null
              }

          </div>
          <div className={props.classes.right}>
            <a href='/' className={props.classes.linkProfile}>Профиль ситтера</a>
            <button className={props.classes.iconButton}><img src="../img/stars.svg" /></button>
          </div>
        </div>;
})
