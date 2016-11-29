import React, {Component} from 'react';
import {Row, Column} from 'react-foundation';

export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <Row>
          <Column medium={3}>
            <p className="lead">Heading</p>
            <ul className="menu vertical">
              <li><a href="#">One</a></li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
              <li><a href="#">Four</a></li>
            </ul>
          </Column>
          <Column medium={3}>
            <p className="lead">Heading</p>
            <ul className="menu vertical">
              <li><a href="#">One</a></li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
              <li><a href="#">Four</a></li>
            </ul>
          </Column>
          <Column medium={3}>
            <p className="lead">Heading</p>
            <ul className="menu vertical">
              <li><a href="#">One</a></li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
              <li><a href="#">Four</a></li>
            </ul>
          </Column>
          <Column medium={3}>
            <p className="lead">Heading</p>
            <ul className="menu vertical">
              <li><a href="#">One</a></li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
              <li><a href="#">Four</a></li>
            </ul>
          </Column>
        </Row>
      </footer>
    );
  }
}
