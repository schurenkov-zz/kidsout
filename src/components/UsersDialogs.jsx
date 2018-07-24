import React from 'react';
import injectSheet from 'react-jss';
import { Scrollbars } from 'react-custom-scrollbars';

const styles ={
  info: {
    background: '#5dcb8e',
    position: 'fixed',
    width: 262,
    padding: '16px 19px',
    display: 'flex',
    alignItems: 'flex-start',
    color: '#fff',
    zIndex: 1
  },
  usersWrap: {
    marginTop: 134,
    width: 300,
    background: '#fff'
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
  infoText: {
    marginLeft: 15,
    fontSize: 15,
  },
  addedAd: {
    fontWeight: 700,
    marginTop: 7,
  },
  textInfoSend: {
    margin: '10px 0'
  },
  textInfoLink: {
    color: 'rgba(255,255,255, 0.8)',
    textDecoration: 'none'
  },
  userItem: {
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'flex-start',
    cursor: 'pointer'
  },
  userName: {
    fontWeight: 700,
    fontSize: 15,
    marginTop: 0,
    marginBottom: 5
  },
  userActive: {
    color: '#898989',
    fontSize: 12,
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: 1,
    marginLeft: 8,
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
  userText: {
    marginLeft: 10
  },
  userMessage: {
    margin: '5px 0'
  }
}
export default injectSheet(styles)((props) => {
  const { dialogs, users, messages } = props;
  return <div className={props.classes.wrap}>
            <Scrollbars
              style={{ width: 317, height: '75vh'}}
              renderTrackVertical={p => <div {...p} className={props.classes.track} />}
              renderThumbVertical={p => <div {...p} className={props.classes.thumb} />}
              >
              <div className={props.classes.info}>
                <img src='../img/time.svg' />
                <div className={props.classes.infoText}>
                    <p className={props.classes.addedAd}>Ваше объявление добавлено</p>
                    <p className={props.classes.textInfoSend}>Мы отправили его ситтерам, скоро кто-нибудь откликнется.</p>
                    <a href="/" className={props.classes.textInfoLink}>Посмотреть объявление</a>
                </div>
              </div>
              <div className={props.classes.usersWrap}>
                {
                  Object.keys(dialogs).map((i)=>
                    <div key={dialogs[i].id} className={props.classes.userItem} onClick={(e)=> props.handlerClick(dialogs[i].id)}>
                        <img src='../img/user.png' />
                        <div className={props.classes.userText}>
                          <p className={props.classes.userName}>{users[dialogs[i].users.user].name} {users[dialogs[i].users.user].status == 'online' ? <span className={props.classes.userActive}>В сети</span> : null} </p>
                          <p className={props.classes.userMessage}>
                            {
                              messages[dialogs[i].messages[Object.keys(dialogs[i].messages).length - 1]].text.length > 40
                              ?
                                messages[dialogs[i].messages[Object.keys(dialogs[i].messages).length - 1]].text.slice(0, 40) + '...'
                              :
                                messages[dialogs[i].messages[Object.keys(dialogs[i].messages).length - 1]].text
                            }
                          </p>
                        </div>
                    </div>
                  )
                }
              </div>
            </Scrollbars>
         </div>;
})
