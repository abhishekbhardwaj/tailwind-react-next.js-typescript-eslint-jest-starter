/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import ParentApp from 'next/app'
import '@src/css/tailwind.css'

class MyApp extends ParentApp {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
