## Pendiente ULTRA PREMIUM

### PRIMERO: Moderar comentarios

PUT /comment/:commentId/moderate

1. obtener por id el comment
2. establecer en false moderate
3. actualizar comment a "El comentario ha sido moderado por un admin"
4. salvar el documento

Tambien hay que actulaizar el PUT /comment/:commentId Para que un usuario no pueda actualizar comentarios moderados

### SEGUNDO: Un usuario logueado que quiera actualizar un comentario debe poder actualizar solo un comentario que haya escrito el.
