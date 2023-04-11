import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBannner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'


const Home = memo(() => {
  const {goodPriceInfo} = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }),shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBannner />
      <div className="content">
          <h2>{goodPriceInfo.title}</h2>
      </div>
    </HomeWrapper>
  )
})

export default Home