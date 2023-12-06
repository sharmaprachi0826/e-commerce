'use client';
import React, {useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getProductById } from '@/api/products.js';
import  ProductItem  from '@/components/productItem.js';

const ProductDetail = () => {
    const { id } = useParams(); 
    const [productDetail, setproductDetail] = useState([]);
    useEffect(() => {
        fetchDetails();
      }, [id]);
      const fetchDetails = async () => {
        try {
            console.log('fjf')
            const data = await getProductById(id);
          if (data) 
          {
            setproductDetail(data[0]);
          }
          else
          {
              console.error('Error fetching products');
          }
         
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
    return (
      <div className='container'>
        <ProductItem key={productDetail.id} product={productDetail} page={'details'}/>
      </div>
    );
  };
  
  export default ProductDetail;