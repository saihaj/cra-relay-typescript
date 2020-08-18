/**
 * Helpful Resources
 * https://github.com/sibelius/create-react-app-relay-modern/blob/master/src/relay/fetchQuery.js
 * https://github.com/relay-tools/relay-compiler-language-typescript/blob/master/example/ts/app.tsx
 */
import { Variables } from 'react-relay'

export const GRAPHQL_URL:string = 'https://rickandmortyapi.com/graphql'

// Define a function that fetches the results of a request (query/mutation/etc)
// and returns its results as a Promise:
const fetchQuery = async ( operation:any, variables: Variables ) => {
  const body = JSON.stringify( {
    query: operation.text, // GraphQL text from input
    variables,
  } )

  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  }

  const response = await fetch( GRAPHQL_URL, {
    method: 'POST',
    headers,
    body,
  } )

  return response.json()
}

export default fetchQuery
