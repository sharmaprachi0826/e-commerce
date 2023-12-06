'use client';
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography } from '@material-ui/core';

const ProductItem = (product) => {
  return (
    <Card>
    <CardContent>
      <Link href={`/products/detail/${product?.product?.id}`}>
          <Typography variant="h5" component="a">
          Details
          </Typography>
        </Link>
      <Typography variant="body2" color="textSecondary" component="p">
        Category: {product?.product?.category}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Price: ${product?.product?.price}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Color: {product?.product?.color}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Size: {product?.product?.size}
      </Typography>
    </CardContent>
  </Card>
   
  );
};

export default ProductItem;