export function isBrowser() {
    return typeof window !== "undefined"
  }
  
  export function getUser() {
    return isBrowser() && window.localStorage.getItem("usuarioGatsby")
      ? JSON.parse(window.localStorage.getItem("usuarioGatsby"))
      : {}
  }
  
  export function setUser(user) {
    window.localStorage.setItem("usuarioGatsby", JSON.stringify(user))
  }
  
  export function handleLogin({ username, password }) {
    if (username === "20336598" && password === "123") {
      return setUser({
        username: `20336598`,
        name: `Mati`,
        email: `macc7890@gmail.com`,
      })
    }
  
    return false
  }
  
  export function isLoggedIn() {
    const user = getUser()
  
    return !!user.username
  }
  
  export function logout(callback) {
    setUser({})
    callback()
  }