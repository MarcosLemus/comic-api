## pendiente obligatorio (EXITO)

1. despliegue a producción siguiendo el video PARTE 13

2. Preparar entregables para el proyecto (mirar la tarea en classroom)

3. Uno de los entregables son los archivos que una vez no vayan a tener cambios habrá que exportar (todas las colecciones(.json) y entornos de prod y dev (.json) en la carpeta /thunder.

4. otra es subir a github

## Pendiente (EXITAZO)

1. Manejar errores sincronos y asincronso desde express. (dependencia: express-async-errors y middleware de errores). para que nunca crasee la aplicación cuando encuentre una excepción y responda el server con un 500 desde el middleware de errores de express.

## Pendiente pero para el proximo proyecto backend

2. Aprender a usar el sistema de validación dado de la misma forma que se ha hecho con el de usuarios. Y Validar los inputs en todas las definiciones de ruta

## Pendiente para nota

3. Validar con status code adecuados todos los casos posibles en cada controlador. Por ejemplo:

- 404 cuando se intente borrar, obtener, actualizar un recurso que no existe
- Anticiparase para que no vaya a un 500 y responder con 400 cuando se intenten crear recursos con campos unicos ya existentes.

## Pendiente ULTRA PREMIUM

1.PRIMERO: Moderar comentarios

PUT /comment/:commentId/moderate

a. obtener por id el comment
b. establecer en false moderate
c. actualizar comment a "El comentario ha sido moderado por un admin"
d. salvar el documento

Tambien hay que actulaizar el PUT /comment/:commentId Para que un usuario no pueda actualizar comentarios moderados

2. Los comentarios solo deben poder actualizarse por sus autores
