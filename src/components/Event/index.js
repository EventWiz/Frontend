import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import EventDescription from './EventDescription';
import EventAgenda from './EventAgenda';

import { pusherLocator,apiURL } from '../../config';

const Event = (props) => {
  const tokenProvider = new TokenProvider({
    url: `${apiURL}/api/authenticate`,
  });
  
  useEffect(() => {
    if (props.user) {
      const chatManager = new ChatManager({
        instanceLocator: pusherLocator, 
        userId: props.user.email,
        tokenProvider
      })

      chatManager.connect()
      .then(currentUser => {
        console.log('Successful connection', currentUser)
        currentUser.subscribeToRoomMultipart({
          roomId: `${props.events.title}_1`,
          hooks: {
            onMessage: message => {
              console.log("received message", message)
            }
          },
          messageLimit: 10
        })
      })
      .catch(err => {
        console.log('Error on connection', err)
      })
    }
  }, )

  return (
    <div>
      <EventDescription />
      <EventAgenda />
    </div>
  );
};

const mapStateToProps = ({ eventReducer, authReducer }) => ({
  loading: eventReducer.loading,
  events: eventReducer.events,
  loggedIn: authReducer.loggedIn,
  user: authReducer.user,
});

export default connect(mapStateToProps, {})(Event);
