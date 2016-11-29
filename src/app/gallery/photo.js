import React, {Component} from 'react';
import {Column} from 'react-foundation';

export class Photo extends Component {
  render() {
    return (
      <Column className="text-center">
        <img className="thumbnail text-center" src={this.props.photo.logo}/>
        <h3>{this.props.photo.title}</h3>
        <p>{this.props.photo.text1}</p>
      </Column>
    );
  }
}

Photo.propTypes = {
  photo: React.PropTypes.object.isRequired
};
