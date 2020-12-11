import { FC } from 'react'
import { Link } from '@reach/router'

import { PageProps } from '../lib/types'

const HomePage:FC<PageProps> = () => (
  <div className="flex flex-col m-2">
    <div className="mx-auto">
      <h1 className="text-2xl text-center font-bold">Homepage</h1>
      <p className="text-xl py-5">
        This is create react app with typescript. <br />
        Purpose of this is to setup Relay using typescript and relay hooks. <br />
        Checkout <a href="https://github.com/saihaj/cra-relay-typescript" className="text-blue-600 hover:text-red-600">Github Repo</a> for more details.
      </p>
      <Link to="character/1" className="text-blue-600 text-xl hover:text-red-600">Character Page: Rick Sanchez</Link>
    </div>
  </div>
)

export default HomePage
