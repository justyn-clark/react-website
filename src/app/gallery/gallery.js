import React, {Component} from 'react';
import {Header} from '../components/header';
import {Title} from '../components/title';
import {Photos} from '../gallery/photos';
import {Footer} from '../components/footer';

export class Gallery extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Title>Gallery</Title>
        <main>
          <Photos/>
        </main>
        <Footer/>
      </div>
    );
  }
}
