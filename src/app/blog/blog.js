import React, {Component} from 'react';
import {Header} from '../components/header';
import {Title} from '../components/title';
import {Footer} from '../components/footer';
import {P} from '../components/p';
import {Row} from 'react-foundation';
import Helmet from 'react-helmet';

export class Blog extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
          title="Blog"
          titleTemplate="%s | This is React"
          defaultTitle="Blog"
          base={{target: "_blank", href: "/blog"}}
          meta={[
            {name: "description", content: "This is React for websites and apps. I've put this together to demo my React skills and for you to to use to make your own React website quickly."},
            {property: "og:type", content: "article"}
          ]}
          link={[
            {rel: "canonical", href: "http://react.justynclark.com/blog"},
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
        <Title>Blog</Title>
        <main className="row">
          <div className="large-8 columns">
            <article>
              <Row>
                <div className="large-6 columns">
                  <P><img src="http://placehold.it/600x370&amp;text=Look at me!" alt="image for article"/></P>
                </div>
                <div className="large-6 columns">
                  <h5><a href="#">'Death Star' Vaporizes Its Own Planet</a></h5>
                  <P>
                    <span><i className="fi-torso"> By Thadeus &nbsp;&nbsp;</i></span>
                    <span><i className="fi-calendar"> 11/23/16 &nbsp;&nbsp;</i></span>
                    <span><i className="fi-comments"> 6 comments</i></span>
                  </P>
                  <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</P>
                </div>
              </Row>
              <hr/>
              <Row>
                <div className="large-6 columns">
                  <P><img src="http://placehold.it/600x370&amp;text=Look at me!" alt="image for article"/></P>
                </div>
                <div className="large-6 columns">
                  <h5><a href="#">NASA's SLS Rocket Sheds Saturn V Color Scheme in Design Review</a></h5>
                  <P>
                    <span><i className="fi-torso"> By Thadeus &nbsp;&nbsp;</i></span>
                    <span><i className="fi-calendar"> 11/23/16 &nbsp;&nbsp;</i></span>
                    <span><i className="fi-comments"> 6 comments</i></span>
                  </P>
                  <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</P>
                </div>
              </Row>
              <hr/>
              <Row>
                <div className="large-6 columns">
                  <P><img src="http://placehold.it/600x370&amp;text=Look at me!" alt="image for article"/></P>
                </div>
                <div className="large-6 columns">
                  <h5><a href="#">Ingredients for Life Were Always Present on Earth, Comet Suggests</a></h5>
                  <P>
                    <span><i className="fi-torso"> By Thadeus &nbsp;&nbsp;</i></span>
                    <span><i className="fi-calendar"> 11/23/16 &nbsp;&nbsp;</i></span>
                    <span><i className="fi-comments"> 6 comments</i></span>
                  </P>
                  <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</P>
                </div>
              </Row>
              <hr/>
              <Row>
                <div className="large-6 columns">
                  <P><img src="http://placehold.it/600x370&amp;text=Look at me!" alt="image for article"/></P>
                </div>
                <div className="large-6 columns">
                  <h5><a href="#">Astronaut's Watch Worn on the Moon Sells for Record $1.6 Million</a></h5>
                  <P>
                    <span><i className="fi-torso"> By Thadeus &nbsp;&nbsp;</i></span>
                    <span><i className="fi-calendar"> 11/23/16 &nbsp;&nbsp;</i></span>
                    <span><i className="fi-comments"> 6 comments</i></span>
                  </P>
                  <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</P>
                </div>
              </Row>
              <hr/>
              <Row>
                <div className="large-6 columns">
                  <P><img src="http://placehold.it/600x370&amp;text=Look at me!" alt="image for article"/></P>
                </div>
                <div className="large-6 columns">
                  <h5><a href="#">Interstellar Dust on the Galaxy's Magnetic Field | Space Wallpaper</a></h5>
                  <P>
                    <span><i className="fi-torso"> By Thadeus &nbsp;&nbsp;</i></span>
                    <span><i className="fi-calendar"> 11/23/16 &nbsp;&nbsp;</i></span>
                    <span><i className="fi-comments"> 6 comments</i></span>
                  </P>
                  <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</P>
                </div>
              </Row>
              <hr/>
              <Row>
                <div className="large-6 columns">
                  <P><img src="http://placehold.it/600x370&amp;text=Look at me!" alt="image for article"/></P>
                </div>
                <div className="large-6 columns">
                  <h5><a href="#">Explore the Moon (Virtually) with These Awesome Global Maps</a></h5>
                  <P>
                    <span><i className="fi-torso"> By Thadeus &nbsp;&nbsp;</i></span>
                    <span><i className="fi-calendar"> 11/23/16 &nbsp;&nbsp;</i></span>
                    <span><i className="fi-comments"> 6 comments</i></span>
                  </P>
                  <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</P>
                </div>
              </Row>
              <hr/>
              <Row>
                <div className="large-6 columns">
                  <P><img src="http://placehold.it/600x370&amp;text=Look at me!" alt="image for article"/></P>
                </div>
                <div className="large-6 columns">
                  <h5><a href="#">Best Space Books and Sci-Fi: A Space.com Reading List</a></h5>
                  <P>
                    <span><i className="fi-torso"> By Thadeus &nbsp;&nbsp;</i></span>
                    <span><i className="fi-calendar"> 11/23/16 &nbsp;&nbsp;</i></span>
                    <span><i className="fi-comments"> 6 comments</i></span>
                  </P>
                  <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</P>
                </div>
              </Row>
              <hr/>
              <ul className="pagination" role="navigation" aria-label="Pagination">
                <li className="disabled">Previous <span className="show-for-sr">page</span></li>
                <li className="current"><span className="show-for-sr">You're on page</span> 1</li>
                <li><a href="#" aria-label="Page 2">2</a></li>
                <li><a href="#" aria-label="Page 3">3</a></li>
                <li><a href="#" aria-label="Page 4">4</a></li>
                <li><a href="#" aria-label="Next page">Next <span className="show-for-sr">page</span></a></li>
              </ul>
            </article>
          </div>
          <div className="large-4 columns">
            <aside>
              <div className="row small-up-3">
                <div className="column text-center">
                  <i className="fi-social-facebook"></i>
                  <h6>56,009</h6>
                  <P><small>FOLLOWERS</small></P>
                  <br/>
                </div>
                <div className="column text-center">
                  <i className="fi-social-twitter"></i>
                  <h6>76,905</h6>
                  <P><small>FOLLOWERS</small></P>
                  <br/>
                </div>
                <div className="column text-center">
                  <i className="fi-social-instagram"></i>
                  <h6>34,099</h6>
                  <P><small>FOLLOWERS</small></P>
                  <br/>
                </div>
                <div className="column text-center">
                  <i className="fi-social-tumblr"></i>
                  <h6>13,765</h6>
                  <P><small>FOLLOWERS</small></P>
                </div>
                <div className="column text-center">
                  <i className="fi-social-pinterest"></i>
                  <h6>9,283</h6>
                  <P><small>FOLLOWERS</small></P>
                </div>
                <div className="column text-center">
                  <i className="fi-social-youtube"></i>
                  <h6>99,000</h6>
                  <P><small>FOLLOWERS</small></P>
                </div>
              </div>
              <br/>
              <div className="row column">
                <P className="lead">FROM OUR FRIENDS</P>
                <P><img src="http://placehold.it/400x300&amp;text=Buy Me!" alt="advertisement of ShamWow"/></P>
              </div>
              <br/>
              <div className="row column">
                <P className="lead">TRENDING POSTS</P>
                <div className="media-object">
                  <div className="media-object-section">
                    <img className="thumbnail" src="http://placehold.it/300x150"/>
                  </div>
                  <div className="media-object-section">
                    <h5>All I need is a space suit and I'm ready to go.</h5>
                  </div>
                </div>
                <div className="media-object">
                  <div className="media-object-section">
                    <img className="thumbnail" src="http://placehold.it/300x150"/>
                  </div>
                  <div className="media-object-section">
                    <h5>Are the stars out tonight? I don't know if it's cloudy or bright.</h5>
                  </div>
                </div>
                <div className="media-object">
                  <div className="media-object-section">
                    <img className="thumbnail" src="http://placehold.it/300x150"/>
                  </div>
                  <div className="media-object-section">
                    <h5>And the world keeps spinning.</h5>
                  </div>
                </div>
                <div className="media-object">
                  <div className="media-object-section">
                    <img className="thumbnail" src="http://placehold.it/300x150"/>
                  </div>
                  <div className="media-object-section">
                    <h5>Cold hearted orb that rules the night.</h5>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
