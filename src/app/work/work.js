import React, {Component} from 'react';
import {Header} from '../components/header';
import {Footer} from '../components/footer';
import {Title} from '../components/title';
import {FlexVideo} from 'react-foundation';
import Helmet from 'react-helmet';

export class Work extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
          title="Work"
          titleTemplate="%s | This is React"
          defaultTitle="Work"
          base={{target: "_blank", href: "/work"}}
          meta={[
            {name: "description", content: "This is React for websites and apps. I've put this together to demo my React skills and for you to to use to make your own React website quickly."},
            {property: "og:type", content: "article"}
          ]}
          link={[
            {rel: "canonical", href: "http://react.justynclark.com/work"},
            {rel: "apple-touch-icon", href: "http://react.justynclark.com/apple-touch-icon-57x57.png"},
            {rel: "apple-touch-icon", sizes: "72x72", href: "http://react.justynclark.com/img/apple-touch-icon-72x72.png"}
          ]}
          /* script={[
           {src: "http://include.com/pathtojs.js", type: "text/javascript"},
           {type: "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
           ]}
          noscript={[
            {innerHTML: `<link rel="stylesheet" type="text/css" href="foo.css" />`}
          ]}
          style={[{
            // cssText: `body { background-color: green; }`
          }]} */
          onChangeClientState={function (newState) {
            console.log(newState);
          }}
          />
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
