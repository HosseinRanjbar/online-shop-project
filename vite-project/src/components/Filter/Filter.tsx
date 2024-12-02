import './assets/Filter.css'
import Brand from './components/Brand'
import Categories from './components/Categories'
import Price from './components/Price'
import TopSelling from './components/TopSelling'

const Filter = () => {
    return (
        <div className='filter-container'>
            <Categories />
            <Price />
            <Brand />
            <TopSelling />
        </div>
    )
}

export default Filter