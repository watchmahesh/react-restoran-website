/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';

const Menu = () => {

    const [data, setData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/category');
                const jsonData = await response.json();
                const categories = jsonData.data;
                setData(categories);
                if (categories.length > 0) {
                    handleCategory(categories[0].id); // Fetch products for the first category by default
                  }
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])

    const handleCategory = async (category_id) => {
        try {
          const response = await fetch(`http://localhost:5000/api/v1/product/product-by-category?category_id=${category_id}`);
          const jsonData = await response.json();
          const products = jsonData.data;
          setProductData(products);
          setSelectedCategory(category_id);
        } catch (error) {
          console.log('Error fetching products:', error);
        }
      };
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        {data ? data.map((item) => {
                            return (
                                <li className="nav-item" key={item.id}>
                                    <a className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${selectedCategory===item.id?'active':''}`} data-bs-toggle="pill" href="#tab-1" onClick={() => handleCategory(item.id)}>
                                        <i className="fa fa-coffee fa-2x text-primary"></i>
                                        <div className="ps-3">
                                            <small className="text-body">Popular</small>
                                            <h6 className="mt-n1 mb-0">{item.title}</h6>
                                        </div>
                                    </a>
                                </li>
                            );
                        }) : []}

                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {productData ? productData.map((item) => (
                                    <div className="col-lg-6" key={item.id}>
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={item.image} alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>{item.title}</span>
                                                    <span className="text-primary">${item.price}</span>
                                                </h5>
                                                <small className="fst-italic">{item.description}</small>
                                            </div>
                                        </div>
                                    </div>
                                )) : []}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
