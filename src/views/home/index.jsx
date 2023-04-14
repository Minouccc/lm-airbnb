import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBannner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'

const Home = memo(() => {
  const {goodPriceInfo,highScoreInfo,discountInfo,recommendInfo,longForInfo,homePlusInfo} = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longForInfo: state.home.longForInfo,
    homePlusInfo:state.home.homePlusInfo
  }),shallowEqual)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  },[dispatch])


  return (
    <HomeWrapper>
      <HomeBannner />
      <div className="content">
        {Object.keys(discountInfo).length && <HomeSectionV2 infoData={discountInfo}/>}
        {Object.keys(recommendInfo).length && <HomeSectionV2 infoData={recommendInfo}/>}
        {Object.keys(longForInfo).length && <HomeLongfor infoData={longForInfo}/>}
        {Object.keys(goodPriceInfo).length && <HomeSectionV1 infoData={goodPriceInfo}/>}
        {Object.keys(highScoreInfo).length && <HomeSectionV1 infoData={highScoreInfo}/>}
        {Object.keys(homePlusInfo).length && <HomeSectionV3 infoData={homePlusInfo}/>}
      </div>
    </HomeWrapper>
  )
})

export default Home