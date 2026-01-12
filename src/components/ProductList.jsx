import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;

