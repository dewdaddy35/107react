import { createContext } from 'react';
/**
 * context is the blueprint
 */

const GlobalContext = createContext({
cart: [],
user: {},
addProductToCart: () => {},
removeProductFromCart: () => {},
});

export default GlobalContext;