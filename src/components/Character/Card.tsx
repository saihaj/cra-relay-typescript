/* eslint-disable */

// Need to work on fixing types
import React from 'react'
import graphql from 'babel-plugin-relay/macro'
import { useQuery } from 'relay-hooks'

import type { CardCharacterQueryResponse } from './__generated__/CardCharacterQuery.graphql'

const query = graphql`
query CardCharacterQuery($characterId: ID) {
  character(id:$characterId) {
    name
  }
}
`
const variables = {
  characterId: 1,
}

const Card = () => {
  const { props, error } = useQuery( query, variables )

  if ( props ) {
    return (
      <div>
        {/* @ts-ignore */}
        {props.character.name}
      </div>
    )
  } if ( error ) {
    return <div>{error.message}</div>
  }
  return <div>loading..</div>
}

export default Card
