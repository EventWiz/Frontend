import React from 'react';
import { Link } from 'react-router-dom';
import { EventCardStyle } from '../styles/Event';

const EventCard = props => {
  const { id, img, title, start_date, location } = props.event;

  return (
    <EventCardStyle>
      <Link to={`/events/${id}`} key={id}>
        <img src={img} alt='Event banner' />
        <div className='desc'>
          <p>{start_date}</p>
          <div>{title}</div>
          <p>{location}</p>
        </div>
      </Link>
    </EventCardStyle>
  );
};

export default EventCard;
