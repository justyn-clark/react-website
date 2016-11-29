import React, {Component} from 'react';
import {Header} from '../components/header';
import {Footer} from '../components/footer';
import {Title} from '../components/title';
import {FlexVideo} from 'react-foundation';

export class Work extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Title>Work</Title>
        <div className="row">
          <main id="work" className="medium-12 column">
            <div className="flex-video-example">
              <FlexVideo isWidescreen isVimeo>
                <iframe src="//player.vimeo.com/video/60122989" width="400" height="225" frameBorder="0" allowFullScreen/>
              </FlexVideo>
            </div>
          </main>
        </div>
        <Footer/>
      </div>
    );
  }
}
