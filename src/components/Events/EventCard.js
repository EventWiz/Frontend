import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { EventCardStyle } from '../../styles/Event';

const EventCard = ({ event }) => {
  const { id, img, title, start_date, location } = event;
  const date = moment(start_date);
  return (
    <EventCardStyle>
      <Link to={`/events/${id}`} key={`events-${id}`}>
        <img src={img} alt="Event banner" />
        <div className="desc">
          <div>{title}</div>
          <p>{location}</p>
          <p>{date.format('MMMM Do, YYYY')}</p>
        </div>
      </Link>
    </EventCardStyle>
  );
};

export default EventCard;
