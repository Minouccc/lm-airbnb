import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import EntireRoom from './c-cpns/entire-rooms'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRoomListAction())
  },[dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRoom />
      <div className="pagination">pagination-section</div>
    </EntireWrapper>
  )
})

export default Entire