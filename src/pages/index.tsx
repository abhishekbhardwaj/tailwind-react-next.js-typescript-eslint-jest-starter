import React from 'react'
import { NextPage } from 'next'

import MainHeading from '@/components/main-heading/main-heading'
import { APP_NAME } from '@/config'

const Home: NextPage = () => (
  <MainHeading>
    Hello from <u>{APP_NAME}</u>.
  </MainHeading>
)

export default Home
