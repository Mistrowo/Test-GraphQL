# GRAPHQL Simple GraphQL Project

## Descripción

Este proyecto implementa un servidor GraphQL simple que proporciona datos de usuarios y artículos generados aleatoriamente. La aplicación también incluye un cliente React que se conecta al servidor para obtener y mostrar estos datos en una interfaz de usuario.

## Características

- **Servidor GraphQL:** Implementado en Node.js usando `express-graphql`. Define tipos de datos y resolvers para manejar consultas.
- **Datos Falsos:** Generados por la librería `faker` y proporcionados a través de resolvers en el servidor GraphQL.
- **Cliente React:** Implementado usando `React` y `graphql-request`. Se conecta al servidor para obtener datos de usuarios y artículos, que luego se muestran en la interfaz.

## Estructura del Proyecto

- **`servidor/`:** Contiene los archivos relacionados con el servidor.
 - `server.js`: Configura y ejecuta el servidor de GraphQL.
 - `data.js`: Genera datos falsos de usuarios y artículos.
 - `graphql/index.graphql`: Contiene la definición de tipos de datos para GraphQL.
- **`cliente/`:** Contiene los archivos relacionados con el cliente React.
 - `utils/graphql.js`: Define funciones de consulta para obtener datos del servidor GraphQL.
 - `src/App.jsx`: Componente principal de la aplicación React, usa funciones de `utils/graphql.js` para mostrar datos.

## Instalación
