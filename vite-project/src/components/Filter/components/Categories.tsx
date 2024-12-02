import React from 'react'
import '../assets/categories.css'
import useDataGetter from '../../../hooks/useDataGetter/useDataGetter'
import { FILTER_ENDPOINTS } from '../meta/constants'
import { ICategories } from '../../../utils/types'
import Loading from '../../Loading/Loading'

const Categories = () => {
  const { data, loading } = useDataGetter({
    url: FILTER_ENDPOINTS.categories
  })


  return (
    <div className='categories-container'>
      CATEGORIES

      {loading ?
        <Loading
          width={"8rem"}
          height={"8rem"}
        /> :
        data?.map((item: ICategories) => {
          return (
            <div id={item._id}>
              <input type='checkbox' name={item.name} id={item._id} />
              <label htmlFor={item.name}>{item.name} ({item.productCount})</label>
            </div>
          )
        })}
    </div>
  )
}

export default Categories