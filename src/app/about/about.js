import React, {Component} from 'react';
import {Header} from '../components/header';
import {Title} from '../components/title';
import {Footer} from '../components/footer';
import {P} from '../components/p';
import {Row} from 'react-foundation';

export class About extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Title>About</Title>
        <main>
          <Row>
            <div className="medium-6 columns medium-push-6">
              <img className="thumbnail" src="http://placehold.it/750x350"/>
            </div>
            <div className="medium-6 columns medium-pull-6">
              <h2>Our Agency, our selves.</h2>
              <P>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.</P>
            </div>
          </Row>
          <Row>
            <div className="medium-4 columns">
              <h3>Photoshop</h3>
              <P>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</P>
            </div>
            <div className="medium-4 columns">
              <h3>Javascript</h3>
              <P>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</P>
            </div>
            <div className="medium-4 columns">
              <h3>Marketing</h3>
              <P>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</P>
            </div>
          </Row>
        </main>
        <Footer/>
      </div>
    );
  }
}
