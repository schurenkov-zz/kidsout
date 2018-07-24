import React from 'react';
import injectSheet from 'react-jss';
import { Scrollbars } from 'react-custom-scrollbars';

import UserRightMessage from './UserRightMessage.jsx';
import UserLeftMessage from './UserLeftMessage.jsx';


const styles = {
  wrap: {
    '&:before': {
      content: `''`,
      display: 'block',
      position: 'relative',
      width: '98%',
      height: 1,
      top: 2,
      background: '#c7c7c7'
    }
  },
  dialogMessages: {
    padding: '10px 0 60px'
  },
  track: {
    background: '#ededed',
    borderRadius: 5,
    height: '100%',
    right: 0,
    width: 7
  },
  thumb: {
    borderRadius: 5,
    background: '#898989'
  },
  formMessage: {
    position: 'fixed',
    bottom: 21,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '64vw',
    flexWrap: 'wrap',
    background: '#f6f6f6',
    '&:before': {
      content: `''`,
      display: 'block',
      position: 'relative',
      width: '98%',
      height: 1,
      marginBottom: 10,
      background: '#c7c7c7'
    }
  },
  textarea: {
    borderRadius: 5,
    border: '1px solid #c7c7c7',
    backgroundColor: '#fff',
    width: '82%',
    height: 40,
    boxSizing: 'border-box',
    padding: 10,
    resize: 'none',
    '&::-webkit-input-placeholder': {
      color: 'rgba(0,0,0,0.3)'
    },
    '&::-moz-placeholder': {
      color: 'rgba(0,0,0,0.3)'
    },
    '&:-ms-input-placeholder': {
      color: 'rgba(0,0,0,0.3)'
    },
    '&:-moz-placeholder': {
      color: 'rgba(0,0,0,0.3)'
    }
  },
  button: {
    borderRadius: 5,
    border: '2px solid #bfbfbf',
    color: '#a6a6a6',
    fontSize: 15,
    fontWeight: 700,
    background: 'transparent',
    padding: '10px 20px',
    margin: '0 18px 0 10px',
    cursor: 'pointer'
  },
  time: {
    fontSize: 12,
    color: '#c7c7c7',
    margin: '0 10px'
  }
};

export default injectSheet(styles)((props) => {
  const { dialogs, users, messages, activeDialog, currenUser, message } = props;
  return <div className={props.classes.wrap}>
            <Scrollbars
              style={{ width: '64vw', height: '75vh'}}
              renderTrackVertical={p => <div {...p} className={props.classes.track} />}
              renderThumbVertical={p => <div {...p} className={props.classes.thumb} />}
              >
              <div className={props.classes.dialogMessages}>
                  {
                    dialogs[activeDialog].messages.map((id, i)=>
                      currenUser.id == messages[id].user ?
                        <UserRightMessage
                          key={id}
                          time={messages[id].time}
                          text={messages[id].text}
                          user={currenUser.id}
                          prevUser={messages[dialogs[activeDialog].messages[i-1]] != undefined ? messages[dialogs[activeDialog].messages[i-1]].user : null}
                          nextUser={messages[dialogs[activeDialog].messages[i+1]] != undefined ? messages[dialogs[activeDialog].messages[i+1]].user : null}
                        />
                      :
                        <UserLeftMessage
                          key={id}
                          time={messages[id].time}
                          text={messages[id].text}
                          user={messages[id].user}
                          prevUser={messages[dialogs[activeDialog].messages[i-1]] != undefined ? messages[dialogs[activeDialog].messages[i-1]].user : null}
                          nextUser={messages[dialogs[activeDialog].messages[i+1]] != undefined ? messages[dialogs[activeDialog].messages[i+1]].user : null}
                        />
                    )
                  }
              </div>
              <div className={props.classes.formMessage}>
                <textarea placeholder="Сообщение" value={message} onChange={e=> props.changeTextarea(e.target.value)} className={props.classes.textarea}></textarea>
                <button className={props.classes.button} onClick={e=> props.sendMessage()}>Отправить</button>
              </div>
            </Scrollbars>
         </div>
})
