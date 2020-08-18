/**
 * Helpful Resources
 * https://relay.dev/docs/en/experimental/step-by-step#42-configure-relay-runtime
 */

import { Environment, Network, RecordSource, Store } from 'relay-runtime'

import fetchQuery from './fetchQuery'

export default new Environment( {
  network: Network.create( fetchQuery ),
  store: new Store( new RecordSource() ),
} )
