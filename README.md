# Demo Rimac 

Demo empleado el framework Serverless 

## Contenido
* Permite desplegar en AWS la arquitectura planteada en el reto
* Exposición de 3 endpoint para la consulta y persistencia en Dynamo de AWS
* Como entiedad a persistir en dynamo se utilizo los atributos de la entidad Planet del api de Starwars

## Desplegar y probar con el comando
```
sls deploy -v
```
## Endpoint implementados
{{HOST}}/planetas       GET
{{HOST}}/planeta        POST
{{HOST}}/planeta/id     GET

You are ready to go!
