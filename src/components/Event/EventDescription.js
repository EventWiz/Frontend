import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoLocation, GoCalendar, GoClock } from 'react-icons/go';
import { EventDescriptionContainer } from './event.style';
import { Link } from 'react-router-dom';

const EventDescription = ({ event, loggedIn }) => {
  const history = useHistory();
  return (
    <EventDescriptionContainer>
      <section>
        <div>
          <Link to="/">&larr; Back to Events</Link>
        </div>
        <h2>{event.title}</h2>
        <p>{event.desc}</p>
        {loggedIn ? (
          <button className="desc-button">Get Tickets</button>
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
        <div>
          <div>
            <GoCalendar />
            <div>
              <h3>Opening Ceremony</h3>
              <p>This section would be managed by Nabelaah Johnson</p>
            </div>
          </div>
          <div>
            <GoLocation />
            <p>Cafeteria, Andela, Nigeria</p>
          </div>
          <div>
            <GoClock />
            <p>12pm</p>
          </div>
        </div>

        <div>
          <div>
            <GoCalendar />
            <div>
              <h3>Opening Ceremony</h3>
              <p>This section would be managed by Nabelaah Johnson</p>
            </div>
          </div>
          <div>
            <GoLocation />
            <p>Cafeteria, Andela, Nigeria</p>
          </div>
          <div>
            <GoClock />
            <p>12pm</p>
          </div>
        </div>

        <div>
          <div>
            <GoCalendar />
            <div>
              <h3>Opening Ceremony</h3>
              <p>This section would be managed by Nabelaah Johnson</p>
            </div>
          </div>
          <div>
            <GoLocation />
            <p>Cafeteria, Andela, Nigeria</p>
          </div>
          <div>
            <GoClock />
            <p>12pm</p>
          </div>
        </div>
      </section>
    </EventDescriptionContainer>
  );
};

export default EventDescription;
