import { IProduct } from '../../utils/types';
import './assets/ProductCard.css';

const ProductCard = ({
  name,
  images,
  price,
  description,
  category
}: IProduct) => {
  
  return (
    <div className='product-card-container'>
      <img src={images[0]}/>
      <span>{category?.name}</span>
      <h3>{name}</h3> 
      <p>{description}</p>
      <h4>{price}</h4>
    </div>
  )
}

export default ProductCard