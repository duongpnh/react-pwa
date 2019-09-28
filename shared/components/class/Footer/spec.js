import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('Footer Component', () => {
    it('It should render without errors', () => {
        const component = shallow(<Footer />);
        const wrapper = component.find('.d-footer');
        expect(wrapper.length).toBe(1);
    });
})

