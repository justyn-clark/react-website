import React, {Component} from 'react';
import {P} from '../components/p';
import {H1} from '../components/h1';

export class Section extends Component {
  render() {
    return (
      <section id={this.props.id} className="callout secondary">
        <H1>{this.props.title}</H1>
        <P>{this.props.children}</P>
      </section>
    );
  }
}

Section.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.string,
  id: React.PropTypes.string
};
