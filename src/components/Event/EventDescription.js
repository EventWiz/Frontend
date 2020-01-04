import React from 'react';
import { GoLocation, GoCalendar, GoClock } from 'react-icons/go';
import { EventDescriptionContainer } from './event.style';
import { Link } from 'react-router-dom';

const EventDescription = () => {
  return (
    <EventDescriptionContainer>
      <section>
        <div>
          <Link to='/'>&larr; Back to Events</Link>
        </div>
        <h2>Eventz</h2>
        <p>
          conference of Amazing Johnson Friends, with over 2000 attendees every
          year, and 20 fun events
        </p>
        <button>Get Tickets</button>
        <p>325 Tickets Left</p>
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
