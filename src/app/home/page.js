import React, {Component} from 'react';
import {Hero} from './hero';
import {Section} from './section';
import {P} from '../components/p';
import {Row} from 'react-foundation';

export class Page extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <section className="callout">
          <Row>
            <div className="medium-6 columns medium-push-6">
              <img className="thumbnail" src="http://placehold.it/750x350"/>
            </div>
            <div className="medium-6 columns medium-pull-6">
              <h2>Our Agency, our selves.</h2>
              <P>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.</P>
            </div>
          </Row>
        </section>
        <Section id="web" title="Web"/>
        <section className="callout">
          <Row>
            <div className="medium-6 columns">
              <img className="thumbnail" src="http://placehold.it/750x350"/>
            </div>
            <div className="medium-6 columns">
              <h2>Our Agency, our selves.</h2>
              <P>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.</P>
            </div>
          </Row>
        </section>
        <Section id="about" title="Ninja"/>
        <section className="callout">
          <Row>
            <div className="medium-6 columns medium-push-6">
              <img className="thumbnail" src="http://placehold.it/750x350"/>
            </div>
            <div className="medium-6 columns medium-pull-6">
              <h2>Our Agency, our selves.</h2>
              <P>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.</P>
            </div>
          </Row>
        </section>
        <Section id="contact" title="Master"/>
      </div>
    );
  }
}
