import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="product-carts">
      <div className="container">
        <h2>Popular Products</h2>
        <input
          type="search"
          name="src"
          placeholder="search products here"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div className="container card-sliderbg">
        <div className="row">
          {" "}
          {selectedProduct && (
            <div id="product" className="container py-5">
              <h3>Selected Product</h3>
              <div>
                <h5>{selectedProduct.title}</h5>
                <p>{selectedProduct.description}</p>
                <p>Price: {selectedProduct.price}</p>
                {/* Add more details as needed */}
              </div>
            </div>
          )}
          {data
            .filter((row) => {
              if (search === "") {
                return row;
              } else if (
                row.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return row;
              }
            })
            .map((row, i) => {
              return (
                <div
                  className="swiper-slide col-md-3 col-sm-4 col-xs-2"
                  key={i}
                >
                  <div className="position-relative">
                    <div className="card">
                      <a
                        href="#product"
                        onClick={() => handleProductClick(row)}
                        className="card-link"
                      >
                        <img
                          src={row.image}
                          className="card-img-top"
                          alt={row.img}
                        />
                        <div className="card-body">
                          <div className="card-text">
                            <h5>{row.title.substring(0, 20)}</h5>
                            <p className="price-1">{row.price}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
