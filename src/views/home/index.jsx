import React, { memo } from 'react'
import { HomeWrapper } from './style'
import HomeBannner from './c-cpns/home-banner'

const Home = memo(() => {
  
  return (
    <HomeWrapper>
      <HomeBannner />
    </HomeWrapper>
  )
})

export default Home