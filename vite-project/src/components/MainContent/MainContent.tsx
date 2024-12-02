import Filter from '../Filter/Filter'
import Products from '../Products/Products'
import './assets/MainContent.css'

const MainContent = () => {

  return (
    <>
      <main>

        <section className='filter-section'>
          <Filter />
        </section>

        <section className='prodcuts-section'>
          <Products />
        </section>
      </main>
    </>
  )
}

export default MainContent