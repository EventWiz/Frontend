import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllEvents } from '../actions/events';
import { EventCardStyle } from '../styles/Event';

const EventCard = props => {
  const { id, img, title, start_date, location } = props.events[0];

  return (
    <EventCardStyle key={id}>
      <Link to={`/events/{id}`}>
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

const mapStateToProps = ({ eventReducer }) => ({
  loading: eventReducer.loading,
  events: eventReducer.events
});

export default connect(mapStateToProps, { getAllEvents })(EventCard);
