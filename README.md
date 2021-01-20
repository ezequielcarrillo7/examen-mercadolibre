# Mercado Libre Front End Challenge - Ezequiel Carrillo 

La aplicación está dividida en dos partes principales: Cliente y Servidor.

El lado del Cliente fue creado con React utilizando create-react-app para generar la estructura base del proyecto de manera sencilla, para el Routing de la misma utilicé
React Router, además utilicé la libreria "Emotion" para crear algunos Styled Components. El Spinner que se muestra antes de cargar el detalle de un Item fue creado gracias a SpinKit (https://tobiasahlin.com/spinkit/), elegí esta colección de Spinners personalizables para evitar crear uno desde cero.

El lado del Servidor utiliza NodeJS y Express, allí instalé la dependencia "nodemon" para evitar reiniciar el servidor cada vez que realizaba un cambio.
Este fue construido en 3 capas distintas:
-   API_helper.js (En esta capa se consumen los endpoints necesarios de la API de Mercado Libre mediante una función principal que retorna una Promesa.)
-   service.js (Toma las respuestas obtenidas en API_helper y construye los objetos utilizados en la aplicación.)
-   app.js (Allí están construidos los endpoints que utiliza el Front End. En cada uno de ellos se consume su respectiva funcion llamando al Service.)

# Pasos para correr la aplicación

1. Ejecutar el comando npm install para instalar las dependencias utilizadas en el proyecto.

2. Levantar el cliente en la raiz del proyecto con el comando npm start.

3. Levantar el servidor dentro del directorio "server" con el comando npm run server.

