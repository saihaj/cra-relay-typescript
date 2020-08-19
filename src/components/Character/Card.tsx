import React, { FC } from 'react'
import graphql from 'babel-plugin-relay/macro'
import { useQuery } from 'relay-hooks'

import type { CardCharacterQuery } from './__generated__/CardCharacterQuery.graphql'

const query = graphql`
query CardCharacterQuery($characterId: ID) {
  character(id:$characterId) {
    name
  }
}
`
const variables = {
  characterId: '1',
}

const Card:FC = () => {
  const { props, error } = useQuery<CardCharacterQuery>( query, variables )

  if ( props ) {
    return <div>{props?.character?.name}</div>
  } if ( error ) {
    return <div>{error.message}</div>
  }
  return <div>loading...</div>
}

export default Card
