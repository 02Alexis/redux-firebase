//las funciones reductoras son funciones que se 'exportan' para alimentar o interactuar con el 'store'
//las funciones reductoras reciven dos parametros 'state' and 'action'

import { userTypes } from "../types/userTypes";

const initialValue = {
  user: {},
  error: null,
};

const userReducer = (state = initialValue, action) => {
    //evaluamos el tipo de accion y como se retornara
  switch (action.type) {
    case userTypes.CREATE_USER:

      return {
        ...state,
        user: {
            ...action.payload.user
        },
        error: action.payload.error
      };

    default:
      return {
        ...state
      };
  }
};

export default userReducer;
