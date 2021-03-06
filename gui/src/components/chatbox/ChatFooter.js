import React, { Component } from 'react';
import { Layout, Input, notification } from 'antd';
import { dataTest } from '../../DataTest';
// import { $ } from '../utils/api';
// import '../styles/style.css';
const Send = Input.Search;
const {  Footer } = Layout;

class ChatFooter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleSendMessage = this.handleSendMessage.bind(this);
    // }

    handleSendMessage(e) {
        // const { currentChat, sign, chatMessage } = this.props;
        // var time = Date.now();
        // var paramsChannel = {
        //     channel: currentChat.id,
        //     user: sign.user,
        //     time: time,
        //     message: e,
        //     token: sign.token
        // };
        // var paramsCon = {
        //     conId: currentChat.id,
        //     user: sign.user,
        //     time: time,
        //     message: e,
        //     token: sign.token
        // }
        // var success = (res) => {
        //     console.log(res);
        //     if (res.body.status !== 200) {
        //         notification.open({
        //             message: 'Can\'t send message',
        //             description: res.body.message
        //         });
        //     } else {  
        //         sign.connection.send(JSON.stringify(
        //             currentChat.type === 'channel' 
        //             ? { type: 'MESSAGE_CHANNEL', params: paramsChannel, token: paramsChannel.token } 
        //             : { type: 'MESSAGE_CONVERSATION', params: paramsCon, token: paramsCon.token }));
        //         if (currentChat.name !== sign.user) {
        //             chatMessage({ time, user: sign.user, message: e});
        //         }
        //         this.ref.input.input.value = '';
        //     }
        // };
        // var failure = (err) => { console.log(err) };
        // if (e.length > 0) {
        //     if (currentChat.type === 'channel') {
        //         $.post('/channels/' + currentChat.id)
        //             .query(paramsChannel)
        //             .then(success).catch(failure);
        //     } else {
        //         $.post('/conversations/' + currentChat.id)
        //             .query(paramsCon)
        //             .then(success).catch(failure);
        //     }  
        // }
    }

    render() {
        // const { currentChat } = this.props;
        const { currentChat } = dataTest.ChatFooter;

        return (
            <Footer>
                <Send ref={(ref) => this.ref = ref} 
                    disabled={currentChat.id === ''} 
                    placeholder='Enter your message' 
                    enterButton="Send" size='large' 
                    onSearch={this.handleSendMessage} />
            </Footer>
        );
    }
}

export default ChatFooter;
