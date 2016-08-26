jest.unmock('../src/components/Users');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Users from '../src/components/Users';
import { findDOMNode } from 'react-dom';

describe('Users', () => {
    it('Check users children length', () => {
        const users = TestUtils.renderIntoDocument(
            <Users />
        );

        const usersNode = findDOMNode(users);

        expect(usersNode.children.length).toEqual(4);

        // ...
    });
});