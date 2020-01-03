import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllEvents } from '../actions/events';
import svgImg from '../assets/homeSvg.svg';
import logo from '../assets/logo.png';
import { EventPageStyle, CardContainer } from '../styles/Event';
import EventCard from './EventCard';

const EventPage = props => {
  return (
    <EventPageStyle>
      <header>
        <nav>
          <Link to='/'>
            <img src={logo} alt='App logo'/>
          </Link>
          <div className='links'>
            {props.loggedIn ? (
              <React.Fragment>
                <Link to='/create-event'>Create Event</Link>
                <Link className='logout-btn' to='/logout'>
                  {props.user?.firstName}, Logout
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
              </React.Fragment>
            )}
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
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </CardContainer>

      <footer>
        <p>
          Made with{' '}
          <span role='img' aria-label='heart'>
            ❤️{' '}
          </span>{' '}
          and{' '}
          <span role='img' aria-label='bicep'>
            💪🏽
          </span>
        </p>
      </footer>
    </EventPageStyle>
  );
};

const mapStateToProps = ({ eventReducer, authReducer }) => ({
  loading: eventReducer.loading,
  events: eventReducer.events,
  loggedIn: authReducer.loggedIn,
  user: authReducer.user
});

export default connect(mapStateToProps, { getAllEvents })(EventPage);
