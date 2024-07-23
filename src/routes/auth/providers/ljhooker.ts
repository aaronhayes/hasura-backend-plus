import { Router } from 'express'

import { Strategy } from 'passport-oauth2'
import { initProvider } from './utils'
import { PROVIDERS } from '@shared/config'
import Boom from '@hapi/boom'

export default (router: Router): void => {
  const options = PROVIDERS.ljhooker

  if (options) {
    // Checks if the strategy has required keys
    if (!options.clientID || !options.clientSecret) {
      throw Boom.badImplementation(`Missing environment variables for ljhooker strategy.`)
    }

    initProvider(router, 'ljhooker', Strategy, {
      scope: ['email', 'profile']
    })
  }
}
