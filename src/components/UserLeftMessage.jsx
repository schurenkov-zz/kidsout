import React from 'react';
import injectSheet from 'react-jss';
import { Scrollbars } from 'react-custom-scrollbars';

const styles = {
  userLeftMessage: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  userMessageWrap: {
    display: 'flex',
    alignItems: 'center'
  },
  userLeftMessageText: {
    background: '#fff',
    borderRadius: 13,
    padding: '2px 10px 5px',
    margin: '1px 0px 1px 10px',
    lineHeight: '20px'
  },
  userLeftMessageTextTop: {
    background: '#fff',
    borderRadius: '13px 13px 5px 5px',
    padding: '2px 10px 5px',
    margin: '1px 10px 1px 0px',
    lineHeight: '20px'
  },
  userLeftMessageTextMiddle: {
    background: '#fff',
    borderRadius: 5,
    padding: '2px 10px 5px',
    margin: '1px 10px 1px 0px',
    lineHeight: '20px'
  },
  userLeftMessageTextBottom: {
    background: '#fff',
    borderRadius: '5px 5px 13px 13px',
    padding: '2px 10px 5px',
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

  let clasess = props.classes.userLeftMessageText;

  if(user == prevUser && user == nextUser){
    clasess = props.classes.userLeftMessageTextMiddle;
  }else if(user == nextUser){
    clasess = props.classes.userLeftMessageTextTop;
  }else if( user == prevUser ){
    clasess = props.classes.userLeftMessageTextBottom;
  }

  return  <div  className={props.classes.userLeftMessage}>
            <div className={props.classes.userMessageWrap}>
              <img src='../img/user.png' />
              <p className={clasess} dangerouslySetInnerHTML={{__html: text.replace(/\n/g, "<br />")}} />
              <span className={props.classes.time}>{time}</span>
            </div>
          </div>

})
