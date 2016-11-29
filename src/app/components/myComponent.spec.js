import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MyComponent from './myComponent';

describe('MyComponent component', () => {
  it('should render default text', () => {
    const myComponent = TestUtils.renderIntoDocument(<MyComponent/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(myComponent, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
