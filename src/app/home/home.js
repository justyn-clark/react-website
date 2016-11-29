import React, {Component} from 'react';
import {Header} from '../components/header';
import {Page} from './page';
import {Footer} from '../components/footer';
import Helmet from 'react-helmet';

export class Home extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
          title="Home"
          titleTemplate="This is React - %s"
          defaultTitle="This is React"
          base={{target: "_blank", href: "/"}}
          meta={[
            {name: "description", content: "This is React for websites and apps. I've put this together to demo my React skills and for you to to use to make your own React website quickly."},
            {property: "og:type", content: "article"}
          ]}
          link={[
            {rel: "canonical", href: "http://react.justynclark.com/"},
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
        <Page/>
        <Footer/>
      </div>
    );
  }
}
