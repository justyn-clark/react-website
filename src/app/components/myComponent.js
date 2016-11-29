import React, {PropTypes, Component} from 'react';

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  text: 'My brand new component!'
};

MyComponent.propTypes = {
  text: PropTypes.string
};
