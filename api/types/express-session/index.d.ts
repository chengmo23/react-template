export {}

declare module 'express-session' {
  interface SessionData {
    loggedIn: boolean
  }
}
