import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllEvents } from '../actions/events';
import svgImg from '../assets/homeSvg.svg';
import { EvevtPageStyle } from '../styles/Event';

const EventPage = props => {
  console.log(props);
  return (
    <EvevtPageStyle>
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
    </EvevtPageStyle>
  );
};

const mapStateToProps = ({ eventReducer }) => ({
  loading: eventReducer.loading,
  events: eventReducer.events
});

export default connect(mapStateToProps, { getAllEvents })(EventPage);
