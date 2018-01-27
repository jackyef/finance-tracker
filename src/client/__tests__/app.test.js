import React from 'react';
import { shallow } from 'enzyme';

import App from '../app';

describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App />)

    // expect(wrapper.find('div').text()).toBe('React boilerplate!');
    expect(wrapper).toMatchSnapshot()
  })
})