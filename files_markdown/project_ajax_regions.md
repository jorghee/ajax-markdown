# <samp>Task about Ajax - Regiones</samp>
- Crearemos una pagina web que contenga las 8 opciones propuestas en el ejercicio.

### Sobre la estructura de la pagina web :eyes:
- Vamos a crear un html que contenga botones para cada opción, por el momento será simple. El evento será modificar un único '<div>' que se actualizará con cada opción. 

- Por ejemplo, la primera opcion es listar las regiones, por lo tanto el '<div>' vacio se actualizará con las regiones, para la segunda opción, el mismo '<div>' se reactulizará con la informacion de la segunda opción y asi para todas las opciones.

### Sobre cómo crear nuestro servidor y leer el archivo JSON
1. Lo primero es crear un servidor con python3. Leer lo que el profesor dio como ejemplo en las indiciones.

2. Lo segundo es con Ajax realizar la solicitud al servidor que hemos creado con python. Aqui debemos implementar solo una función que se encargue de hacer la solicitud HTTP al servidor y recuperar data.json. Esta función sera reutlizada en cada función individual que cada uno creará para resolver el problema que le hemos asignado.

> Ejemplo básico de la función que hace la solicitud AJAX
```javascript
function loadFile() {
  let url = "http://localhost:8000/data.json";

  fetch(url)
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(error => console.log(error));
}

```
### Dudas 
1. Se estuvo probando el codigo, después de ejecutar el comando para lanzar el servidor, todo salio exitosamente. Sin embargo, al momento de querer hacer la solicitud ajax con fetch, me sa error de permisos. Entonces se tiene que configurar el servidor python :new_moon_with_face:

### Ya más individual
3. Ahora cada uno crea su propia función para resolver el problema que se le ha asignado.
4. Para la generacion de graficos, no se asusten, el profesor mando un enlace sobre la representación, ver las indicaciones en OTI.
