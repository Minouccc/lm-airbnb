import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import EntireRoom from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRoomListAction())
  },[dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRoom />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire