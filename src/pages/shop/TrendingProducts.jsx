// import React, { useState } from 'react'
// import ProductCards from './ProductCards'

// import products from "../../data/products.json"

// const TrendingProducts = () => {
//     const [visibleProducts, setVisibleProducts] = useState(8);

//     const loadMoreProducts = () => {
//         setVisibleProducts(prevCount => prevCount + 4)
//     }
//     return (
//         <section className='section__container product__container'>
//             <h2 className='section__header'>Trending Products</h2>
//             <p className='section__subheader mb-12'>
//                 Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.
//             </p>

//             {/* products card */}
//             <div className='mt-12'>
//             <ProductCards products={products.slice(0, visibleProducts)}/>
//             </div>

//             {/* load more products btn */}
//             <div className='product__btn'>
//                 {
//                     visibleProducts < products.length && (
//                         <button className='btn' onClick={loadMoreProducts}>Load More</button>
//                     )
//                 }
//             </div>
//         </section>
//     )
// }

// export default TrendingProducts

import React, { useState } from 'react';
import ProductCards from './ProductCards';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);

    // Fetching all products using Redux API query
    const { data: { products = [] } = {}, error, isLoading } = useFetchAllProductsQuery({
        category: '', // Fetch all categories for trending
        limit: 20, // Fetch a reasonable amount of products
    });

    const loadMoreProducts = () => {
        setVisibleProducts((prevCount) => prevCount + 4);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading trending products.</div>;

    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader mb-12'>
                Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.
            </p>

            {/* Product cards */}
            <div className='mt-12'>
                <ProductCards products={products.slice(0, visibleProducts)} />
            </div>

            {/* Load more products button */}
            <div className='product__btn'>
                {visibleProducts < products.length && (
                    <button className='btn' onClick={loadMoreProducts}>Load More</button>
                )}
            </div>
        </section>
    );
};

export default TrendingProducts;