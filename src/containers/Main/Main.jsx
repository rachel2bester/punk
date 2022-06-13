import React from 'react'
import { CardList } from '../CardList/CardList'

const Main = () => {
  return (<>
      <p>Main</p>
      <CardList title="All Beers" url="https://api.punkapi.com/v2/beers"/>
    </>
  )
}

export default Main