import React from 'react'
import { render } from '@testing-library/react'

import Index from './index'

describe('Index Page', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Index />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders hello', () => {
    // Given
    const EXPECTED = 'Hello from Starter Project.'

    const { getByTestId } = render(<Index />)

    // When
    const ACTUAL = getByTestId('helloH1').textContent

    // Then
    expect(ACTUAL).toEqual(EXPECTED)
  })

  it('renders hello with tailwind classes', () => {
    // Given
    const EXPECTED = 'text-xl text-gray-900'
    const { getByTestId } = render(<Index />)

    // When
    const ACTUAL = getByTestId('helloH1').className

    // Then
    expect(ACTUAL).toContain(EXPECTED)
  })
})
