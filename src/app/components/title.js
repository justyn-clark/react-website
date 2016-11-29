import React, {Component} from 'react';
import {H1} from '../components/h1';
import {Row, Column} from 'react-foundation';

const styles = {
  title: {
    margin: '1rem',
    padding: '1rem',
    textAlign: 'center'
  }
};

export class Title extends Component {
  render() {
    return (
      <div style={styles.title}>
        <Row>
          <Column medium={12}>
            <H1>{this.props.children}</H1>
          </Column>
        </Row>
      </div>
    );
  }
}

Title.propTypes = {
  children: React.PropTypes.string.isRequired
};
