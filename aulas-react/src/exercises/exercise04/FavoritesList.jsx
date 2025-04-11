import useFavoritesStore from './favoritesStore';

const FavoritesList = () => {
  const { favorites, removeFromFavorites } = useFavoritesStore();

  return (
    <div className="favorites-list">
      <h2>Seus Favoritos ({favorites.length})</h2>
      {favorites.length === 0 ? (
        <p>Nenhum item salvo.</p>
      ) : (
        <ul>
          {favorites.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price.toFixed(2)}
              <button onClick={() => removeFromFavorites(product.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;