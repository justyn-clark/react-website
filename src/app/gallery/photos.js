import React, {Component} from 'react';
import axios from 'axios';
import {Photo} from './photo';
import {Row} from 'react-foundation';

export class Photos extends Component {
  constructor() {
    super();
    this.state = {photos: []};
  }

  componentDidMount() {
    axios
      .get('app/gallery/gallery.json')
      .then(response => {
        this.setState({photos: response.data});
      });
  }

  render() {
    return (
      <div>
        <Row upOnSmall={1} upOnMedium={2} upOnLarge={4}>
          {this.state.photos.map((photo, i) => (
            <Photo key={i} photo={photo}/>
          ))}
        </Row>
      </div>
    );
  }
}
