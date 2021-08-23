import React from 'react';
import renderer from 'react-test-renderer';
import Bar from '../components/Bar';

describe('Bar', () => {
  it('return Bar component', () => {
    const tree = renderer
      .create(<Bar title="testTitle" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
