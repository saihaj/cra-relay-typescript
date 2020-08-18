/// <reference types="react-scripts" />

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35707
declare module 'babel-plugin-relay/macro' {
  export { graphql as default } from 'react-relay'
}
