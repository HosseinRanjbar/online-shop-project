import { IProduct } from '../../utils/types';
import './assets/ProductCard.css';
import AddToCartButton from './components/AddToCartButton';
import ProductCardWrapper from './components/ProductCardWrapper';

const ProductCard = ({
  name,
  images,
  price,
  description,
  category
}: IProduct) => {


  return (
    <ProductCardWrapper>
      <>
        <div className='product-card-container' >
          <img src={images[0]} />
          <span className='product-category'>{category?.name}</span>
          <h3 className='product-name'>{name}</h3>
          <p className='product-description'>{description}</p>
          <h4 className='product-price'>$ {price?.toFixed(2)}</h4>
        </div>
        <AddToCartButton />
      </>
    </ProductCardWrapper>
  )
}

export default ProductCard