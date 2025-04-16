import useFavoritesStore from './favoritesStore';

const ProductCard = ({ product }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavoritesStore();
  const favorite = isFavorite(product.id);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2)}</p>
      <button
        onClick={() => 
          favorite ? removeFromFavorites(product.id) : addToFavorites(product)
        }
      >
        {favorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
};

export default ProductCard;