import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoLocation, GoCalendar, GoClock } from 'react-icons/go';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { EventDescriptionContainer } from './event.style';

const EventDescription = ({ event, loggedIn, rsvpEvent, registered }) => {
  const history = useHistory();
  return (
    <EventDescriptionContainer>
      <section>
        <div>
          <Link to="/">&larr; Back to Events</Link>
        </div>
        <h2>{event.title}</h2>
        <p>{event.desc}</p>
        {/* Bad Code Need Refactoring. Past Time already */}
        {registered && <h3>Your Ticket Code {registered}</h3>}
        {!registered && loggedIn ? (
          <button
            className="desc-button"
            disabled={event.registered}
            onClick={() => rsvpEvent(event.id)}
          >
            {event.registered ? 'Registered' : 'Get Tickets'}
          </button>
        ) : (
          <Link
            className="desc-button"
            to={{
              pathname: '/login',
              state: {
                prevLocation: history.location.pathname,
              },
            }}
          >
            Login to Get Tickets
          </Link>
        )}
        <p>{event.capacity} Tickets Left</p>
      </section>
      <section>
        {event.Sessions.length &&
          event.Sessions.slice(0, 3).map(session => (
            <div key={`session-${session.id}`}>
              <div>
                <GoCalendar />
                <div>
                  <h3>{session.topic}</h3>
                  <p>This section would be managed by {session.speaker}</p>
                </div>
              </div>
              <div>
                <GoLocation />
                <p>{session.venue}</p>
              </div>
              <div>
                <GoClock />
                <p>{moment(session.date).format('h:mm a')}</p>
              </div>
            </div>
          ))}
      </section>
    </EventDescriptionContainer>
  );
};

export default EventDescription;
