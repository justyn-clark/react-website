import React, {Component} from 'react';

export class P extends Component {
  render() {
    return (
      <p>{this.props.children}</p>
    );
  }
}

P.propTypes = {
  children: React.PropTypes.string
};

export default P;
