# Despliegue de app en firebase
* en compilacion abrimos `Hosting`

  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/948edc9f-163c-4504-bfb4-f14637c06322)
* dentro de `Hosting` le damos click al boton `comenzar`

  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/5ce41201-27e3-41d2-b4dd-67139ae46289)

* Nos redirecciona a esta pagina, ejecutamos el siguiente comando en nuestra consola `npm install -g firebase-tools`, al finalizar la ejecucion del comando anterior damos click al boton `Siguiente` que se encuentra en la pagina.
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/ccd9a56e-ef53-429a-8d27-a11c65808bd3)

* En la siguiente pagina copiamos y pegamos el siguiente comando `firebase login:ci`
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/578b1368-ab93-46c8-938d-defcdf1f2035)
* Te redirrecionara automaticamente a la pagina de inicio de sesion
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/28a10c9d-ca37-4542-a930-af54dd20b238)

* Nos pedira que iniciemos sesion
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/36bbb8f0-1678-4935-9f4b-2669df28233c)

* Si al ingresar te sale este error o no te redirecciona a la pagina, desabilita tu anti virus
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/d8937390-9218-4341-9b76-45278285c97d)

* continuando, le damos en `permitir`
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/6e7f546c-515e-44de-86bd-5a78375a89d0)
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/65408c3b-e4c4-4f00-8b3d-6073acc8ea7f)

* Luego de iniciar sesion en consola dejara de ejecutarse el anterior comando y nos aparecera un token, lo copiamos
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/51dbd8c8-084f-45d1-9416-9f56ab25df34)

* y ejecutamos el siguiente comando `firebase init --token "aqui va tu token"`, te debe mostrar lo siguiente, escribes Y``
  
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/321bfc51-6b22-4abf-8342-4274c1896141)

* te debe mostrar lo siguiente, con la flecha `↓` bajas hasta la siguiente opcion y oprimimos `tecla espacio` para seleccionar y luego la `tecla enter`

  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/cb99d7d4-1c03-4058-9bc9-a991b2316e9d)

* En la siguiente opcion oprimimos la `tecla enter`
  
![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/35f39749-47e2-49fa-93ec-a6a488e53e87)

* Escogemos nuestro proyecto con la `tecla enter`

  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/f3b5181c-5478-4faf-9e21-8ed9f0ff2e65)

* Luego escribimos la palabra `dist` para configurarlo como directorio publico y damos `Enter`, luegos escribimos `y` para confirmar y damos nuevamente `Enter`

  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/46dde1b5-5d5a-4033-8bad-bc9bae3f9dde)

* Luego nos saldra una ultima opcion a la cual le diremos que no, escribimos la letra `N`
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/abe89733-7203-46ce-8bef-c0b4098e13dd)

### Te debe de crear la 📁 `dist`, `.firebaserc` y `firebase.json`, ahora eliminamos la 📁 `dist`
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/59c912c5-a734-41d7-a67c-68710127e682)

### Ahora en la consola Ejecutamos el siguiente comando `npm run build`
### Te debe de crear la 📁 `build`
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/c852b7e3-0528-4d65-aee5-80730cbac08d)

### Ahora entramos a la 📁 `firebase.json` y cambiamos la palabra `dist` por `build`
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/532ef654-bf7a-4e95-b99a-1af3530ce5db)

### Por ultimo nos ejecutamos el comando `firebase deploy --token "aqui va tu token"`
### Despliegue con exito
## [Despliegue de la pagina](https://redux-firebase-37565.web.app/)

  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/d14ca6f5-8aae-4872-a332-14a753d870bb)

## En hosting te aparecera tu dominio
  ![imagen](https://github.com/02Alexis/miniBackend-app-pizza/assets/99287560/4041be10-7963-415a-9943-c46a41f3b51d)

