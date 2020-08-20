import React, { FC } from 'react'
import { Link } from '@reach/router'

import { PageProps } from '../lib/types'

const HomePage:FC<PageProps> = () => (
  <div>
    Home
    <Link to="character/1">Character Page: Rick Sanchez</Link>
  </div>
)

export default HomePage
