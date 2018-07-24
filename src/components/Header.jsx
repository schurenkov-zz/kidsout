import React from 'react';
import injectSheet from 'react-jss';

var styles = {
  header: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    zIndex: 1,
    position: 'relative'
  },
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1207,
    height: 65,
    margin: 'auto'
  },
  ul: {
    padding: 0,
    display: 'flex'
  },
  li: {
    listStyle: 'none',
    margin: '0 10px'
  },
  a: {
    color: '#000',
    textDecoration: 'none',
    fontSize: 15
  }
}

export default injectSheet(styles)((props) => {
  return <header className={props.classes.header}>
            <div className={props.classes.wrap}>
              <a href='/' >
                <img src='../img/logo.svg' />
              </a>
              <ul className={props.classes.ul}>
                <li className={props.classes.li}><a href="/" className={props.classes.a}>Сообщения</a></li>
                <li className={props.classes.li}><a href="/" className={props.classes.a}>Найти ситтера</a></li>
                <li className={props.classes.li}><a href="/" className={props.classes.a}>Все ситтеры</a></li>
              </ul>
              <a href='/'><img src='../img/user.png' /></a>
            </div>
         </header>
})
