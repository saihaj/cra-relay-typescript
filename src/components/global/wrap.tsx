import React, { ReactNode, ElementType } from 'react'
import { RelayEnvironmentProvider } from 'relay-hooks'
import 'normalize.css'

import { Environment } from '../relay'
import './tailwind.output.css'

interface WrapperProps {
  children: ReactNode
}

/**
 * Wrapper function for different Context Providers that should be available globally
 */
const GlobalWrapper:ElementType<WrapperProps> = ( { children }:WrapperProps ) => (
  <RelayEnvironmentProvider environment={Environment}>
    {children}
  </RelayEnvironmentProvider>

)

export default GlobalWrapper
