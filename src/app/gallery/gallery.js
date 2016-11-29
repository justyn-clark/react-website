import React, {Component} from 'react';
import {Header} from '../components/header';
import {Title} from '../components/title';
import {Photos} from '../gallery/photos';
import {Footer} from '../components/footer';
import Helmet from 'react-helmet';

export class Gallery extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
          title="Gallery"
          titleTemplate="%s | This is React"
          defaultTitle="Gallery"
          base={{target: "_blank", href: "/gallery"}}
          meta={[
            {name: "description", content: "This is React for websites and apps. I've put this together to demo my React skills and for you to to use to make your own React website quickly."},
            {property: "og:type", content: "article"}
          ]}
          link={[
            {rel: "canonical", href: "http://react.justynclark.com/gallery"},
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
        <Title>Gallery</Title>
        <main>
          <Photos/>
        </main>
        <Footer/>
      </div>
    );
  }
}
