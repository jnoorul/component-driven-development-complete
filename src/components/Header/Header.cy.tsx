
/// <reference path="../../../cypress/support/component" />

import {Header} from './Header';

describe('<Stepper>', () => {
  it('mounts', () => {
    cy.mount(<Header />);
  })
});