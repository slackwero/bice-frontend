# Bice-front

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

Para el diseño tome una plantilla gratuita de internet y le hice las integraciones con Angular.

Como BD para el Login de usuarios se utlizo MongoDB (cloud free version)

[https://www.mongodb.com/try](https://www.mongodb.com/try)

El proyecto lee 2 API's para mostrar el contenido en la aplicación

[https://www.indecon.online/last](https://www.indecon.online/last)

[http://hn.algolia.com/api/v1/search?tags=front_page](http://hn.algolia.com/api/v1/search?tags=front_page)

El Backend también expone un API para autenticar la aplicación.

```
POST localhost:3000/login

```

## Como usar el proyecto

Para utilizar este proyecto debe instalar el Backend (1 proy.) y las API's (2 proy.) relacionadas.

Todo los proyectos estan dokerizados y publicos en Docker Hub, por lo que solo necesita descargar las imagenes y ejecutar el comando docker run con cada una de ellas.

### Instrucciones de configuración y ejecución del proyecto

### Pre-requisitos

[https://docs.docker.com/engine/](https://docs.docker.com/engine/)

Luego de tener instalado el docker engine, proceder a ejecutar el docker run en cada imagen del proyecto.
```
Backend: docker run -p 3000:3000 -it slackwero/bice-backend:latest

```
```
API-indecon: docker run -p 8080:8080 -it slackwero/bice-api-indecon:latest

```
```
API-Hacker News: docker run -p 8085:8085 -it slackwero/bice-api-hackernews:latest

```
```
Frontend: docker run -p 4200:4200 -it slackwero/bice-frontend:latest

```
Y eso es todo!

Abrir en el explorador la URL`http://localhost:4200/`
```
User: alex@gmail.com
```
```
Password: 123456
```

## Otros proyectos relacionados al Test

[https://github.com/slackwero/bice-backend](https://github.com/slackwero/bice-backend)

[https://github.com/slackwero/bice-api-indecon](https://github.com/slackwero/bice-api-indecon)

[https://github.com/slackwero/bice-api-hackernews](https://github.com/slackwero/bice-api-hackernews)

