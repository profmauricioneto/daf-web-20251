import ProductCard from './ProductCard';
import FavoritesList from './FavoritesList';

const products = [
  { id: 1, name: 'Camiseta', price: 49.90 },
  { id: 2, name: 'Calça Jeans', price: 129.90 },
  { id: 3, name: 'Tênis', price: 199.90 },
];

function App() {
  return (
    <div className="app">
      <h1>Loja Online</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <FavoritesList />
    </div>
  );
}

export default App;