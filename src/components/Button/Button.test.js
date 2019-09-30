import React from 'react';
import Button from './Button'
import renderer from 'react-test-renderer';


test('Snapshot Testing', () => {
  const component = renderer.create(
    <Button>Button</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Snapshot Testing Primary', () => {
  const component = renderer.create(
    <Button primary>Button</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

