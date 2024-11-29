import Filter from '../Filter/Filter'
import Products from '../Products/Products'
import './assets/MainContent.css'

const MainContent = () => {

  return (
    <>
      <main>
        <section className='prodcust-section'>
            <Products />
        </section>

        <section className='filter-section'>
          <Filter />
        </section>
      </main>
    </>
  )
}

export default MainContent