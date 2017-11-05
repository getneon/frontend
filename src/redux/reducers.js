const { combineReducers } = require('redux');

function user(state = {}, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    case 'REMOVE_USER':
      return {};
    default:
      return state;
  }
}



const neonApp = combineReducers({
  user,
});

module.exports = { user, neonApp };
