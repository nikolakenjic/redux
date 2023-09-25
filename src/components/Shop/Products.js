import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
  {
    id: 'p1',
    title: 'book1',
    price: 12.99,
    description: 'This is first book',
  },
  {
    id: 'p2',
    title: 'book2',
    price: 16.99,
    description: 'This is second book',
  },
];

const Products = (props) => {
  const productsList = PRODUCTS.map((product) => (
    <ProductItem key={product.id} {...product} />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productsList}</ul>
    </section>
  );
};

export default Products;
