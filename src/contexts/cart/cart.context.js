import { createContext } from 'react';

const CartContext = createContext({
  hidden: true,
  toggleHidden: () => { } // to invoke functions from the context, if needed
});

export default CartContext;
