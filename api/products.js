
export const getProducts = async () => {
  try {
    const products = [
      { id: 1, name: 'Product 1', category: 'clothing', price: 50, color: 'red', size: 'small' },
      { id: 2, name: 'Product 2', category: 'electronics', price: 75, color: 'blue', size: 'medium' },
      { id: 3, name: 'Product 3', category: 'accessories', price: 88, color: 'green', size: 'large' },
      { id: 4, name: 'Product 4', category: 'electronics', price: 250, color: 'green', size: 'medium' },
      { id: 5, name: 'Product 5', category: 'clothing', price: 160, color: 'purple', size: 'large' },
      { id: 6, name: 'Product 6', category: 'clothing', price: 110, color: 'red', size: 'large' },
      { id: 7, name: 'Product 7', category: 'clothing', price: 200, color: 'blue', size: 'large' },
    ];
    return products;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  
  try {
    const products = [
      { id: 1, name: 'Product 1', category: 'clothing', price: 50, color: 'red', size: 'small' },
      { id: 2, name: 'Product 2', category: 'electronics', price: 75, color: 'blue', size: 'medium' },
      { id: 3, name: 'Product 3', category: 'accessories', price: 88, color: 'green', size: 'large' },
      { id: 4, name: 'Product 4', category: 'electronics', price: 250, color: 'green', size: 'medium' },
      { id: 5, name: 'Product 5', category: 'clothing', price: 160, color: 'purple', size: 'large' },
      { id: 6, name: 'Product 6', category: 'clothing', price: 110, color: 'red', size: 'large' },
      { id: 7, name: 'Product 7', category: 'clothing', price: 200, color: 'blue', size: 'large' },
    ];
    const productDetails = products.filter(product => product.id == id);
    console.log(productDetails)
   return productDetails;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

