import React, { ReactNode, ElementType } from 'react'
import 'normalize.css'
import { RelayEnvironmentProvider } from 'relay-hooks'
import { Environment } from '../relay'

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
