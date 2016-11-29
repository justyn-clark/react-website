import React, {Component} from 'react';
import {Header} from '../components/header';
import {Title} from '../components/title';
import {Footer} from '../components/footer';
import Helmet from 'react-helmet';

export class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
          title="Contact"
          titleTemplate="%s | This is React"
          defaultTitle="Contact"
          base={{target: "_blank", href: "/contact"}}
          meta={[
            {name: "description", content: "This is React for websites and apps. I've put this together to demo my React skills and for you to to use to make your own React website quickly."},
            {property: "og:type", content: "article"}
          ]}
          link={[
            {rel: "canonical", href: "http://react.justynclark.com/contact"},
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
        <Title>Contact</Title>
        <main className="row">
          <div className="medium-6 columns">
            <h3>Contact Me</h3>
            <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor.</p>
            <ul className="menu">
              <li><a href="#">Dribbble</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Yo</a></li>
            </ul>
          </div>
          <div className="medium-6 columns">
            <label>Name
              <input type="text" placeholder="Name"/>
            </label>
            <label>Email
              <input type="text" placeholder="Email"/>
            </label>
            <label>
              Message
              <textarea placeholder="Your Wonderful Message"></textarea>
            </label>
            <input type="submit" className="button" value="Submit"/>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
