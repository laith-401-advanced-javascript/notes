'use strict';

// ./index.js -a 'text' 

jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(() => {
    return {
        a: 'text',
        add: 'text'

    }
})


const Input = require('../input.js');



describe('input module', () => {

    it('valid() respects proper object ', () => {
        let option = new Input();
        expect(option.valid()).toBeTruthy();

    });

});