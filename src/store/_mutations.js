export default {
  // login
  setUser: (state, user) => {
    // TODO 如何解决密码加密问题
    localStorage.setItem('token', user.token)
    localStorage.setItem('user', JSON.stringify(user))
    state.user = user
  }
}
