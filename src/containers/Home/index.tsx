import React from 'react'

const Home: React.FC = () => {
  const { SITE_NAME } = process.env

  return (
    <h1 data-testid="helloH1" className="text-xl text-gray-900">
      Hello from <u>{SITE_NAME}</u>.
    </h1>
  )
}

export default Home
