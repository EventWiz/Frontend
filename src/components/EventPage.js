import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllEvents } from '../actions/events';
import svgImg from '../assets/homeSvg.svg';
import { EventPageStyle, CardContainer } from '../styles/Event';
import EventCard from './EventCard';

const EventPage = props => {
  return (
    <EventPageStyle>
      <header>
        <nav>
          <Link to='/'>
            <h1>Event Wiz</h1>
          </Link>
          <div className='links'>
            <Link to='/create-event'>Create Event</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
          </div>
        </nav>
      </header>

      <div className='hero'>
        <div className='hero-text'>
          <h2>Find the most</h2>
          <h2>exciting events</h2>
        </div>
        <img src={svgImg} alt='svg img' />
      </div>

      <CardContainer>
        <h2>Explore Events</h2>
        <div className='cards'>
          {props.events.map(event => (
            <EventCard event={event} />
          ))}
        </div>
      </CardContainer>

      <footer>
        <p>Made with ❤️ and 💪🏽</p>
      </footer>
    </EventPageStyle>
  );
};

const mapStateToProps = ({ eventReducer }) => ({
  loading: eventReducer.loading,
  events: eventReducer.events
});

export default connect(mapStateToProps, { getAllEvents })(EventPage);
