import React, { useEffect, useState } from 'react';
import "./productlist.scss"
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    // <Link to={"/details"}>
    <div className="sec2">
       <div className='flex flex-wrap gap-5 w-11/12 m-auto items-center justify-center '>
      {products.map((product) => (
        <div className='sm:w-full md:w-2/4 lg:w-2/6 xl:w-1/5  api-box'>
          <div className='relative' key={product.id}>
            <div className='bg-cover bg-center h-72'>
              <img className='w-full h-full' src={product.image} alt="" />
            </div>
            <div className='h-28 relative '>
            <h1 className='text-lg absolute bottom-0'>{product.title}</h1>
              <h2 className='text-lg absolute top-0 right-1'>{product.price}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
    // </Link>
   
  );
}

export default ProductList;