import React, { ReactNode, ElementType } from 'react'

import 'normalize.css'

interface WrapperProps {
  children: ReactNode
}

/**
 * Wrapper function for different Context Providers that should be available globally
 */
const GlobalWrapper:ElementType<WrapperProps> = ( { children }:WrapperProps ) => (
  <>
    {children}
  </>
)

export default GlobalWrapper
