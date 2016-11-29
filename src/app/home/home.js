import React, {Component} from 'react';
import {Header} from '../components/header';
import {Page} from './page';
import {Footer} from '../components/footer';

export class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Page/>
        <Footer/>
      </div>
    );
  }
}
