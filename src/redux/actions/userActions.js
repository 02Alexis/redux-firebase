//-funcion sincrona crea el objeto action
//-funcion asincrona hace la peticion, interatua con la API-DB, cuando eso suceda con exito, dispara la funcion sincrona
//la funcion creadora de los actions
import {
    createUserWithEmailAndPassword,
    // signInWithEmailAndPassword,
    // signOut,
    // updateProfile,
  } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { userTypes } from "../types/userTypes";

export const registerActionAsync = ({email, password, name, avatar}) => {
    return async (dispatch) => {
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            dispatch(registerActionSync({email, password, name, avatar}, null))
        } catch (error) {
            console.log(error);
            dispatch(registerActionSync({}, {code: error.code, message: error.message}))
        }
    }
}

// funcion que va a retornar la propiedad 'type' y la propiedad 'payload' con la que se estara modificando
//el esrado
const registerActionSync = (newUser, error) => {
    return {
        type: userTypes.CREATE_USER,
        payload: {
            user: newUser,
            error: error
        },
    };
}