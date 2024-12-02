import useDataGetter from '../../hooks/useDataGetter/useDataGetter'
import { IProduct } from '../../utils/types'
import Loading from '../Loading/Loading'
import ProductCard from '../ProductCard/ProductCard'
import './assets/Products.css'
import { PRODUCTS_ENDPOINTS } from './meta/constants'


const Products = () => {
  const { data, loading } = useDataGetter({
    url: PRODUCTS_ENDPOINTS.get
  })

  return (
    <div className='products-container'>
      {loading ? <Loading /> :

        data?.products.map((item: IProduct) => {
          return (
            <ProductCard
              name={item.name}
              images={item.images}
              price={item.price}
              description={item.description}
              category={item?.category}
            />
          )
        })
      }
    </div>
  )
}

export default Products