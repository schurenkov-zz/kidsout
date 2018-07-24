import React, {Component} from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import { activeDialog, sendMessage } from '../actions/main-action';

import Header from '../components/Header.jsx';
import Top from '../components/Top.jsx';
import UsersDialogs from '../components/UsersDialogs.jsx';
import Dialog from '../components/Dialog.jsx';

const styles ={
  main: {
    background: '#f6f6f6',
    height: 'calc(100vh - 65px)',
  },
  wrap:{
    maxWidth: 1207,
    margin: 'auto'
  },
  panels: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      message: ''
    }

    this.sendMessage = this.sendMessage.bind(this);
    this.changeTextarea = this.changeTextarea.bind(this)
  }

  componentDidMount(){
      this.props.onGetDialogs()
  }

  sendMessage(){
    if(this.state.message != ''){
      this.props.onSendMessage(this.state.message);
      this.setState({
        message: ''
      })
    }
  }

  changeTextarea(text){
    this.setState({
      message: text
    })
  }

  render(){
    const { classes, dialogs, users, messages, activeDialog, currenUser } = this.props;
    const { message } = this.state;
    return <React.Fragment>
              <Header />
              <main className={classes.main}>
                  <div className={classes.wrap}>
                    {
                      users ?
                        <Top
                           dialogs={dialogs}
                           users={users}
                           activeDialog={activeDialog}
                        />
                      : null
                    }
                    <div className={classes.panels}>
                      {
                        users ?
                          <UsersDialogs
                            dialogs={dialogs}
                            users={users}
                            messages={messages}
                            handlerClick={e=>this.props.onDialogsActive(e)}
                            />
                        : null
                      }
                      {
                        dialogs ?
                          <Dialog
                            dialogs={dialogs}
                            users={users}
                            messages={messages}
                            message={message}
                            activeDialog={activeDialog}
                            currenUser={currenUser}
                            sendMessage={this.sendMessage}
                            changeTextarea={this.changeTextarea} />
                        : null
                      }
                    </div>
                  </div>
              </main>
            </React.Fragment>
  }
}

export default connect(
  state => ({
    activeDialog: state.mainState.activeDialog,
    currenUser: state.mainState.currenUser,
    users: state.mainState.users,
    dialogs: state.mainState.dialogs,
    messages: state.mainState.messages,
  }),
  dispatch => ({
    onGetDialogs:() => {
      dispatch({type: 'GET_DIALOGS'})
    },
    onDialogsActive:(id) => {
      dispatch(activeDialog(id))
    },
    onSendMessage: (message) => {
      dispatch(sendMessage(message))
    }
  })
)(injectSheet(styles)(App));
