import React from 'react'
import useDataGetter from '../../../hooks/useDataGetter/useDataGetter'
import { FILTER_ENDPOINTS } from '../meta/constants'
import { ITopSelling } from '../meta/types'
import Loading from '../../Loading/Loading'
import '../assets/topSelling.css'

const TopSelling = () => {

  const { data, loading } = useDataGetter({
    url: FILTER_ENDPOINTS.topSelling
  })

  return (
    <div>
      TopSelling
      {loading ?
        <Loading
          width={"310px"}
        />
        : data?.map((item: ITopSelling) => {
          return (
            <div id={item._id} className='top-selling-container'>

              <img src={item.images[0]} style={{ width: "4rem", height: "4rem" }} />

              <div className='top-selling-text'>
                <p>{item.category.name}</p>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default TopSelling