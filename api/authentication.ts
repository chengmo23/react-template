import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth2'

const GOOGLE_OAUTH_CLIENT_ID = '550291530150-51o51t1k1o57ru2slf911qg9vcikvg06.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = 'hLN9q9mIlVUoqF6M7Dmwv5MD'

const init = (): void => {
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    done(null, user)
  })

  passport.use(
    new GoogleStrategy.Strategy(
      {
        clientID: GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/google/callback',
      },
      (_accessToken, _refreshToken, profile, done) => {
        return done(null, profile)
      },
    ),
  )
}

export default init
