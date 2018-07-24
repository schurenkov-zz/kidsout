import React from 'react';
import injectSheet from 'react-jss';
import { Scrollbars } from 'react-custom-scrollbars';

const styles = {
  userMessageWrap: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff'
  },
  userRightMessage: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 10
  },
  userRightMessageText: {
    background: '#5dcb8e',
    borderRadius: 13,
    padding: '5px 10px 2px',
    margin: '1px 10px 1px 0px',
    lineHeight: '20px'
  },
  userRightMessageTextTop: {
    background: '#5dcb8e',
    borderRadius: '13px 13px 5px 5px',
    padding: '5px 10px 2px',
    margin: '1px 10px 1px 0px',
    lineHeight: '20px'
  },
  userRightMessageTextMiddle: {
    background: '#5dcb8e',
    borderRadius: 5,
    padding: '5px 10px 2px',
    margin: '1px 10px 1px 0px',
    lineHeight: '20px'
  },
  userRightMessageTextBottom: {
    background: '#5dcb8e',
    borderRadius: '5px 5px 13px 13px',
    padding: '5px 10px 2px',
    margin: '1px 10px 1px 0px',
    lineHeight: '20px'
  },
  time: {
    fontSize: 12,
    color: '#c7c7c7',
    margin: '0 10px'
  }
};

export default injectSheet(styles)((props) => {
  const { time, text, user, prevUser, nextUser } = props;
  let clasess = props.classes.userRightMessageText;

  if(user == prevUser && user == nextUser){
    clasess = props.classes.userRightMessageTextMiddle;
  }else if(user == nextUser){
    clasess = props.classes.userRightMessageTextTop;
  }else if( user == prevUser ){
    clasess = props.classes.userRightMessageTextBottom;
  }

  return  <div className={props.classes.userRightMessage}>
            <div className={props.classes.userMessageWrap}>
                <span className={props.classes.time}>{time}</span>
                <p className={clasess} dangerouslySetInnerHTML={{__html: text.replace(/\n/g, "<br />")}} />
              </div>
          </div>

})
