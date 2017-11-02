const expect = require('expect');
const deepfreeze = require('deepfreeze');

const { user } = require('./reducers');

const tests = [testUser];


function testUser() {
  let stateBefore = {};
  let action = { type: 'SET_USER', user: { name: 'Johnny' } };
  let stateAfter = { name: 'Johnny' };

  deepfreeze(stateBefore);

  expect(user(stateBefore, action)).toEqual(stateAfter);
}



tests.forEach(test => test());


console.log('All tests passed!');
