import React, { ReactNode } from 'react'

const MainHeading: React.FC<MainHeadingProps> = ({ children }) => <h1 className='text-xl text-gray-900'>{children}</h1>

export interface MainHeadingProps {
  children?: ReactNode
}

export default MainHeading
