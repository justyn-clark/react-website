import React, {Component} from 'react';
import {Header} from '../components/header';
import {Title} from '../components/title';
import {Footer} from '../components/footer';
import {P} from '../components/p';
import {Row} from 'react-foundation';
import Helmet from 'react-helmet';

export class About extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
          title="About"
          titleTemplate="%s | This is React"
          defaultTitle="About"
          base={{target: "_blank", href: "/about"}}
          meta={[
            {name: "description", content: "This is React for websites and apps. I've put this together to demo my React skills and for you to to use to make your own React website quickly."},
            {property: "og:type", content: "article"}
          ]}
          link={[
            {rel: "canonical", href: "http://react.justynclark.com/about"},
            {rel: "apple-touch-icon", href: "http://react.justynclark.com/apple-touch-icon-57x57.png"},
            {rel: "apple-touch-icon", sizes: "72x72", href: "http://react.justynclark.com/img/apple-touch-icon-72x72.png"}
          ]}
          /* script={[
           {src: "http://include.com/pathtojs.js", type: "text/javascript"},
           {type: "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
           ]}
          noscript={[
            {innerHTML: `<link rel="stylesheet" type="text/css" href="foo.css" />`}
          ]} */
          style={[{
            // cssText: `body { background-color: green; }`
          }]}
          onChangeClientState={function (newState) {
            console.log(newState);
          }}
          />
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
