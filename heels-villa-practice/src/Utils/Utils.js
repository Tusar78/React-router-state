const addToLocalStorage = id => {
  const shoppingCart = {};
  localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart))
}

export {addToLocalStorage}