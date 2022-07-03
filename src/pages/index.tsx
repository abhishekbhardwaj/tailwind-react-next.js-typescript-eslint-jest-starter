import React from 'react'
import { NextPage } from 'next'

import { publicRuntimeConfig } from '@src/config'
import MainHeading from '@src/components/main-heading/main-heading'

const Home: NextPage = () => {
  return (
    <MainHeading>
      Hello from <u>{publicRuntimeConfig.APP_NAME}</u>.
    </MainHeading>
  )
}

export default Home
