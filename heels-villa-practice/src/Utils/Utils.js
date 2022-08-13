const getLocalStorage = () => {
  const getJSON = localStorage.getItem('shopping_cart');
  const getItem = JSON.parse(getJSON);
  return getItem;
} 

const addToLocalStorage = id => {
  const exits = getLocalStorage();
  let shoppingCart = {};
  if (!exits) {
    shoppingCart[id] = 1;
  } else {
    shoppingCart = exits;
    if (shoppingCart[id]) {
      const newCart = shoppingCart[id] + 1;
      shoppingCart[id] = newCart;
    } else {
      shoppingCart[id] = 1;
    }
  }

  localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart))
}

export {addToLocalStorage, getLocalStorage}