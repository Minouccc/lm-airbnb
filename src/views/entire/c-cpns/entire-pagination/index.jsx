import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import { Pagination } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';
const EntirePagination = memo(() => {
  const {totalCount,currentPage,roomList} = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }),shallowEqual)  

  const totalPage = Math.ceil(totalCount / 20) * 10
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function pageChangeHandle(page) {
    window.scrollTo(0,0)
    dispatch(fetchRoomListAction(page))
  }
  return (
    <PaginationWrapper>
        {
            !!roomList.length && (
                <div className="info">
            <Pagination 
            defaultCurrent={1} 
            total={totalPage} 
            onChange={pageChangeHandle}
            />
            <div className="desc">
                第{startCount}-{endCount}个房源，共超过{totalCount}个
            </div>
        </div>
            )
        }
    </PaginationWrapper>
  )
})

export default EntirePagination