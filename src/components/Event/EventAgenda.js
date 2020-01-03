import React from 'react';
import moment from 'moment';
import { EventAgendaContainer } from './event.style';

const EventAgenda = ({ sessions }) => {
  return (
    <EventAgendaContainer>
      <h2>
        SCHEDULE AND LOCATION <br />
        <span>OF ALL SESSIONS.</span>{' '}
      </h2>
      <hr />
      <section>
        {sessions.length > 0 &&
          sessions.map(session => (
            <div key={`session-${session.id}`}>
              <section>
                <p>{moment(session.start_time).format('dddd, MMMM Do YYYY')}</p>
                <h3>{moment(session.start_time).format('h:mm A')}</h3>
              </section>
              <section>
                <h2>{session.topic}</h2>
                <p>Speaker: {session.speaker}</p>
                <h4>{session.venue}</h4>
                <p>{session.desc}</p>
              </section>
            </div>
          ))}
      </section>
    </EventAgendaContainer>
  );
};

export default EventAgenda;
