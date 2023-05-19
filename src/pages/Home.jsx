import React from 'react'
import people from "../images/sec1.png"
import "./scss/home.scss"
import MyList from '../MyList'
import ProductList from '../ProductList'

const Home = () => {
  return (<>
  
    <section className='sec1 py-9 md:py-0'>

      <div className="container w-4/5 m-auto">

        <div className="boxes w-100 md:flex items-center m-auto">

          <div className="box w-4/5 md:w-3/6 m-auto">
            <img src={people} alt="people" />
          </div>

          <div className="box w-4/5 md:w-3/6 m-auto">
            <MyList name="Murad Qəhrəmanov "/>
          </div>
        </div>
      </div>
     </section>     

      <ProductList/>

   </>
  )
}

export default Home