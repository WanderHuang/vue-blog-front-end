export default {
  // login
  setUser: (state, user) => {
    localStorage.setItem('token', user.token)
    localStorage.setItem('userName', user.name)
    state.user = user
  }
}
