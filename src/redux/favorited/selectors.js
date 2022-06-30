export const selectFavorite = (state) => state.favorite;

export const selectFavoriteItemById = (id) => (state) =>
  state.favorite.items.find((obj) => obj.id === id);