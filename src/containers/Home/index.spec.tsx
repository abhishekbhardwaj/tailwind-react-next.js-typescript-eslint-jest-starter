import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import Index from './index'

describe('Index Page', () => {
  let uut: ShallowWrapper

  beforeEach(() => {
    uut = shallow(<Index />)
  })

  it('renders correctly', () => {
    expect(uut).toMatchSnapshot()
  })

  it('renders hello', () => {
    // Given
    const EXPECTED = 'Hello'

    // When
    const ACTUAL = uut.find('h1').text()

    // Then
    expect(ACTUAL).toEqual(EXPECTED)
  })

  it('renders hello with tailwind classes', () => {
    // Given
    const EXPECTED = 'text-xl text-gray-900'

    // When
    const ACTUAL = uut.find('h1').props().className

    // Then
    expect(ACTUAL).toEqual(EXPECTED)
  })
})
