import React from 'react';
import { shallow } from 'enzyme';
import RequestFrom from './RequestFrom';

describe('RequestFrom component', () => {
  it('renders without crashing', () => {
    shallow(<RequestFrom />);
  });

  it('should update name state when input is changed', () => {
    const wrapper = shallow(<RequestFrom />);
    const nameInput = wrapper.find('Form.Control[name="name"]');

    nameInput.simulate('change', {
      target: { name: 'name', value: 'John' },
    });

    expect(wrapper.state('data').name).toEqual('John');
  });

  it('should update email state when input is changed', () => {
    const wrapper = shallow(<RequestFrom />);
    const emailInput = wrapper.find('Form.Control[name="email"]');

    emailInput.simulate('change', {
      target: { name: 'email', value: 'john.doe@example.com' },
    });

    expect(wrapper.state('data').email).toEqual('john.doe@example.com');
  });

  it('should update licenseNumber state when input is changed', () => {
    const wrapper = shallow(<RequestFrom />);
    const licenseNumberInput = wrapper.find('Form.Control[name="licenseNumber"]');

    licenseNumberInput.simulate('change', {
      target: { name: 'licenseNumber', value: '123456789' },
    });

    expect(wrapper.state('data').licenseNumber).toEqual('123456789');
  });

  it('should update description state when input is changed', () => {
    const wrapper = shallow(<RequestFrom />);
    const descriptionInput = wrapper.find('Form.Control[name="description"]');

    descriptionInput.simulate('change', {
      target: { name: 'description', value: 'This is a test message' },
    });

    expect(wrapper.state('data').description).toEqual('This is a test message');
  });

  it('should set errors when invalid name is submitted', () => {
    const wrapper = shallow(<RequestFrom />);
    const nameInput = wrapper.find('Form.Control[name="name"]');

    nameInput.simulate('change', {
      target: { name: 'name', value: 'John#' },
    });

    const nextButton = wrapper.find('.stepped span');
    nextButton.simulate('click');

    expect(wrapper.state('errors').name).toEqual('Invalid name');
  });

  it('should set errors when invalid email is submitted', () => {
    const wrapper = shallow(<RequestFrom />);
    const emailInput = wrapper.find('Form.Control[name="email"]');

    emailInput.simulate('change', {
      target: { name: 'email', value: 'john.doeexample.com' },
    });

    const nextButton = wrapper.find('.stepped span');
    nextButton.simulate('click');

    expect(wrapper.state('errors').email).toEqual('Invalid email address');
  });

  it('should set errors when invalid license number is submitted', () => {
    const wrapper = shallow(<RequestFrom />);
    const licenseNumberInput = wrapper.find('Form.Control[name="licenseNumber"]');

    licenseNumberInput.simulate('change', {
      target: { name: 'licenseNumber', value: '1234567890#' },
    });

    const nextButton = wrapper.find('.stepped span');
    nextButton.simulate('click');

    expect(wrapper.state('errors').licenseNumber).toEqual('Invalid email address');
  });
});
