import React, { useEffect } from 'react';
import { getEvent, rsvpEvent } from '../../actions/events';
import { connect } from 'react-redux';
import EventDescription from './EventDescription';
import EventAgenda from './EventAgenda';

const Event = ({ getEvent: fetchEvent, match, event, loggedIn, rsvpEvent }) => {
  const eventId = match.params?.eventId;

  useEffect(() => {
    fetchEvent(eventId);
  }, [eventId, fetchEvent]);

  return (
    <div>
      {event && (
        <React.Fragment>
          <EventDescription
            event={event}
            loggedIn={loggedIn}
            rsvpEvent={rsvpEvent}
          />
          <EventAgenda sessions={event.Sessions} />
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = ({ eventReducer, authReducer }) => ({
  event: eventReducer.event,
  loggedIn: authReducer.loggedIn,
});

export default connect(mapStateToProps, { getEvent, rsvpEvent })(Event);
