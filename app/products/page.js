'use client';
import React, {useState, useEffect } from 'react';
import { getProducts } from '@/api/products.js';
import  ProductItem  from '@/components/productItem.js';
import { Grid } from '@material-ui/core';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState(null);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      if (data) 
      {
        setProducts(data);
        setFilteredProducts(data);
      }
      else
      {
          console.error('Error fetching products');
      }
     
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  const handleFilter = (category, priceRange, color, size) => {
  
    let filtered = products;

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (priceRange) {
      filtered = filtered.filter(product => {
        if (priceRange === '$0-$50') {
          return product.price >= 0 && product.price <= 50;
        } else if (priceRange === '$50-$100') {
          return product.price > 50 && product.price <= 100;
        } else {
          return product.price > 100;
        }
      });
    }

    if (color) {
      filtered = filtered.filter(product => product.color === color);
    }

    if (size) {
      filtered = filtered.filter(product => product.size === size);
    }
    if (sortingOption === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortingOption === 'popularity') {
      filtered.reverse();
    }

    setFilteredProducts(filtered);
  };

  const handleSortChange = (e) => {
    setSortingOption(e.target.value);
    handleFilter(); 
  };
  return (
    <div className='container'>
      <h1>Product Listing</h1>
      <div className='content'>
      <div className='filter-section'>
        <label>
          Category:
          <select onChange={e => handleFilter(e.target.value)}>
            <option value="">All</option>
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="accessories">Accessories</option>
          </select>
        </label>

        <label>
          Price Range:
          <select onChange={e => handleFilter(null, e.target.value)}>
            <option value="">All</option>
            <option value="$0-$50">$0-$50</option>
            <option value="$50-$100">$50-$100</option>
            <option value="$100+">$100+</option>
          </select>
        </label>

        <label>
          Color:
          <select onChange={e => handleFilter(null, null, e.target.value)}>
            <option value="">All</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </label>

        <label>
          Size:
          <select onChange={e => handleFilter(null, null, null, e.target.value)}>
            <option value="">All</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label>
          Sort By:
          <select value={sortingOption} onChange={handleSortChange}>
            <option value="">None</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
        </label>
      </div>
      <div className='products-section'>
      <Grid container spacing={3}>
      {filteredProducts?.map((productItem, i) => {
        return(
          
         
            <Grid key={productItem.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductItem product={productItem} />
            </Grid>
        
            
        )
        
    })}
    </Grid>
    </div>
      </div>
    </div>
  );
};

export default Products;