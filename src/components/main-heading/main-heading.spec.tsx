import React from 'react'

import { render, screen } from '@testing-library/react'

import MainHeading from './main-heading'

// Just a sample test.
describe('Index Page', () => {
  it('renders correctly', () => {
    const { container } = render(<MainHeading />)
    expect(container).toMatchSnapshot()
  })

  it('renders hello world', () => {
    // Given
    render(<MainHeading>Hello World</MainHeading>)

    // When
    const actual = screen.getByRole('heading', {
      name: /hello world/i,
    })

    // Then
    expect(actual).toBeInTheDocument()
    expect(actual.textContent).toBe('Hello World')
    expect(actual.className).toBe('text-xl text-gray-900')
  })
})
