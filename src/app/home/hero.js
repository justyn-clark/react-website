import React, {Component} from 'react';
import {P} from '../components/p';
import {H1} from '../components/h1';

export class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container text-center intro">
          <H1>Front-end Engineer by day</H1>
          <P>UX/UI designer by night.</P>
        </div>
      </section>
    );
  }
}

