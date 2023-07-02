const cart = [];

export default function handleCart(state = cart, action) {
  const product = action.payload;

  switch (action.type) {

    case "ADDITEM":
      // CHECK IF PRODUCT IS ALREADY EXIST
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //INCREASE THE QUANTITY
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

      break;

 case "DELITEM":
      // CHECK IF PRODUCT IS ALREADY EXIST
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty===1) {
        //INCREASE THE QUANTITY
        return state.filter((x) => x.id !== exist1.id)
        
      } else {
        
        return state.map((x)=> x.id===product.id?{...x, qty:x.qty-1}:x)
          
      }

      break;


    default:
        return state;
      break;
  }
}
