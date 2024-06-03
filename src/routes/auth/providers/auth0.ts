import { Router } from 'express'

import { Strategy } from 'passport-auth0'
import { initProvider } from './utils'
import { COOKIE_SECRET, PROVIDERS } from '@shared/config'
import Boom from '@hapi/boom'
import session from 'express-session'

export default (router: Router): void => {
  const options = PROVIDERS.auth0
  if (options) {
    // Checks if the strategy has required keys
    if (!options.domain || !options.clientID || !options.clientSecret) {
      throw Boom.badImplementation(`Missing environment variables for Auth0 strategy.`)
    }

    if (!COOKIE_SECRET) {
      throw Boom.badImplementation(
        'Missing COOKIE_SECRET environment variable that is required for Auth0.'
      )
    }
    router.use(
      '/twitter',
      session({
        secret: COOKIE_SECRET,
        resave: false,
        saveUninitialized: true
      })
    )

    initProvider(router, 'auth0', Strategy, {
      scope: 'openid email profile'
    })
  }
}
