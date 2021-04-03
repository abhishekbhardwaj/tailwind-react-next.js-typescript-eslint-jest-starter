import React from 'react'
import { NextPage } from 'next'
import MainHeading from '@src/components/main-heading/main-heading'

const Home: NextPage = () => {
  const { SITE_NAME } = process.env

  return (
    <MainHeading>
      Hello from <u>{SITE_NAME}</u>.
    </MainHeading>
  )
}

export default Home
