import React, {Component} from 'react';
import {Element} from 'react-scroll'
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/Highlights/';
import Pricing from './components/pricing';
import Location from './components/location'
import Footer from './components/header_footer/Footer'

class App extends Component {
  render() {
  return (
    <div className="App" style={{height:"1500px",background:"white"}}>
      <Header />
      <Element name="event">
        <Featured />
      </Element>
      <Element name="venueNfo">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <Highlight />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}
}
export default App;
