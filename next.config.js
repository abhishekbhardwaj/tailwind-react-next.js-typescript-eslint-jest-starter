/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const withCSS = require('@zeit/next-css')

const ENV_VARS = {
  SITE_NAME: process.env.SITE_NAME
}

module.exports = withCSS({
  env: ENV_VARS,
  publicRuntimeConfig: ENV_VARS
})
