/* eslint-disable @typescript-eslint/no-var-requires */

const ENV_VARS = {
  APP_NAME: process.env.APP_NAME,
}

module.exports = {
  env: ENV_VARS,
  publicRuntimeConfig: ENV_VARS,
  poweredByHeader: false,
  generateEtags: false,
}
