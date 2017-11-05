
function setUser(user) {
  return {
    type: 'SET_USER',
    user
  }
}

function removeUser() {
  return {
    type: 'REMOVE_USER'
  }
}



export { setUser, removeUser };
