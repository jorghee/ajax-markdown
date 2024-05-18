# Fundamentos de Git
Git es un sistema de control de versiones que te permite como desarrollador rastrear y gestionar cambios en tu proyecto de software.

> No uses Git con interfaces graficas de usuario (GUI), usalo solo por consola (CLI)                      - Paz Valderrama

## Los tres estados de Git
### Committed (confirmado)
Significa que los estados estan almacenados de manera segura en nuestra base de datos local.
### Modified (modificado)
Significa que hemos modificado el archivo pero todavia no lo hemos confirmado en nuestra base de datos.
### Staged (preparado)
Significa que hemos marcado un archivo modificado en su version actual para que vaya en nuestra proxima confirmacion (commit).

## Las tres secciones principales
### Working Directory (Directorio de trabajo)
Es una copia de una version del proyecto. **Estos archivos, se sacan de la base de datos comprimida en el Git Directory, y se colocan en disco para que lo podamos usar y modificar.**
### Staging Area (Area de preparacion)
**Es simplemente un archivo**, generalmente contenido en el Git Directory, que **almacena informacion acerca de lo que va a ir en nuestra proxima confirmacion.**
### Git directory (Directorio de Git)
**Almacena los metadatos y la base de datos de objetos para nuestro proyecto.** Es la parte mas importante de Git, y es lo que se copia cuando clonamos un repositorio desde otro ordenador.

## Relacion entre los tres estados y secciones de Git
Si una versión concreta de un archivo está en el Git Directory, se considera confirmada (committed). Si ha sufrido cambios desde que se obtuvo del repositorio, pero ha sido añadida al Staging Area, está preparada (staged). Y si ha sufrido cambios desde que se obtuvo del repositorio, pero no se ha preparado, está modificada (modified).

---
## Configurando Git por primera vez
- Lee y escribe especificamente en el archivo `/etc/gitconfig`. Valores para todos los usuarios del sistema.
~~~
git config --system user.name "Jorgels"
git config --system user.email "jorgehuarsaya@gmail.com"
~~~
- Lee y escribe especificamente en el archivo `~/.gitconfig` o `~/.config/git/config`. Valores para tu usuario.
~~~
git config --global user.name "Jorgels"
git config --global user.email "jorgehuarsaya@gmail.com"
~~~
- Lee y escribe especificamente en el archivo `config` (es decir `.git/config`). Es especifico del directorio actual (Repositorio actual).
~~~
git config user.name "Jorgels"
git config user.email "jorgehuarsaya@gmail.com"
~~~
- Elige el editor de texto por defecto que se utilizara cuando Git necesite que introduzcas un mensaje.
~~~
git config --global core.editor nvim
~~~
- Muestra todas las propiedades que Git ha configurado
~~~
git config --list
~~~

## Inicializando un repositorio en un directorio existente
- Crea el esqueleto del archivo `.git` en el directorio actual. Ten en cuenta que aun no hay nada en el directorio que este bajo seguimiento.
~~~
git init 
~~~
- Comienza el seguimiento de los archivos dentro del directorio y hacer una primera confirmacion (commit).
~~~
git add .
git commit -m "Initial project version"
~~~

El comando `add` cumple varios propositos, lo usamos para empezar a rastrear archivos nuevos como lo estamos viendo en este caso; tambien para preparar archivos, y hacer otras cosas como marcar archivos en conflicto por combinación como resueltos.

## Clonando un repositorio existente
- El el siguiente ejemplo, **se obtiene una copia** de un repositorio Git existente. **crea** un directorio llamado `libgit2`, **inicializa** un directorio `.git` en su interior, **descarga** toda la información de ese repositorio y **saca una copia de trabajo** de la última versión. Tambien puedes especificar el nombre del directorio.
~~~
git clone https://github.com/libgit2/libgit2
git clone https://github.com/libgit2/libgit2 mylibgit
~~~
Git te permite usar distintos protocolos  de transferencia. En esta ocasion se uso `http://`, pero tambien puedes utilizar `git://` o `usuario@servidor:ruta/del/repositorio.git` que utiliza el protocolo SSH.

> Personalmente siento que esta funcionalidad no sigue la filosofia de "Hazlo tu mismo", mas adelante en la seccion "Añadir repositorios remotos" puede que entiendas el porque de este pensamiento. Es verdad que como programadores debemos automatizar las funcionalidades que nos hacen perder tiempo, sin embargo, eso no justifica no conocer el funcionamiento por dentro.

## Revisando el Estado de tus archivos
- Muestra el estado actual de los archivos. Tambien puedes ejecutar el comando con el siguiente argumento para una salida abreviada.
~~~
git status
git status -s     # de --short
~~~

## Ignorar archivos, el archivo .gitignore
GitHub mantiene una extensa lista de archivos .gitignore adecuados a docenas de proyectos y lenguajes, en caso de que quieras tener un punto de partida para tu proyecto, te dejo el link al repositorio [GitHub gitignore](https://github.com/github/gitignore)

## Ver los cambios preparados y no preparados
- Muestra lo que has cambiado pero aun no lo has preparado.
~~~
git diff <file>
~~~

- Muestra lo que has preparado y sera incluido en la proxima confirmacion (commit)
~~~
git diff --staged <file>
git diff --cached <file>
~~~

## Saltar el Staging Area
- Prepara automaticamente todos los archivos rastreados antes de confirmarlos, ahorrandote el paso de `git add`.
~~~
git commit -a -m "Added new benchmarks"
~~~

## Eliminar archivos
- Elimina tu archivo del Git Directory y del Working Directory, sim embargo esta a la espera de ser confirmado (commited). Pero, puedes **forzar** la eliminacion inmediata sin la necesidad de una confirmacion.
~~~
git rm <file>
git rm -f <file>       # -f de force
~~~

- Mantiene el archivo en el Working Directory pero lo elimina del Staging Area
~~~
git rm --cached <file>
~~~

## Ver el historial de commits (confirmaciones)
- Lista los commits hechos sobre ese repositorio en orden cronologico inverso.
~~~
git log
~~~

- Muestra las diferencias introducidas en cada confirmacion
~~~
git log -p
~~~

- Muestra una lista de archivos con un resumen de las lineas insertadas y eliminadas de los archivos confirmados
~~~
git log --stat
~~~

- Modifica el formato de salida
~~~
git log --pretty=<choice>        # choices: oneline, short, full, fuller, format
git log --pretty=format:"%h - %an, %ar : %s"        # Example
~~~

Opciones utiles de `git log --pretty=format

| Opción  | Descripción de la salida                                |
|---------|---------------------------------------------------------|
| %H      | Hash de la confirmación                                 |
| %h      | Hash de la confirmación abreviado                       |
| %T      | Hash del árbol                                          |
| %t      | Hash del árbol abreviado                                |
| %P      | Hashes de las confirmaciones padre                      |
| %p      | Hashes de las confirmaciones padre abreviados           |
| %an     | Nombre del autor                                        |
| %ae     | Dirección de correo del autor                           |
| %ad     | Fecha de autoría (el formato respeta la opción -–date)  |
| %ar     | Fecha de autoría, relativa                              |
| %cn     | Nombre del confirmador                                  |
| %ce     | Dirección de correo del confirmador                     |
| %cd     | Fecha de confirmación                                   |
| %cr     | Fecha de confirmación, relativa                         |
| %s      | Asunto                                                  |

> Puede que te estés preguntando la diferencia entre autor (author) y confirmador (committer). **Imagina** que estas contribuyendo a un proyecto de software libre y mandas un "parche", entonces, yo, que soy colaborador lo revisare y como se que eres de la UNSA lo aplicare. Pasa que ambos hemos sido autores de ese "parche". **Tu como autor y yo como confirmador.**

## Limitar la salida del Historial
- Lista  aquellas confirmaciones hechas despues de la fecha especificada (since - desde). Filtra segun el autor.
~~~
git log --since=2.weeks
git log --since="2050-01-24"
git log --author=jorgels
~~~
- Lista solo aquellas confirmaciones que cumplen ciertos criterios.
~~~
git log --author=jorgels
~~~

Opciones para limitar la salida de `git log`

| Opción            | Descripción de la salida                                                                          |
|-------------------|---------------------------------------------------------------------------------------------------|
| -(n)              | Muestra solamente los ultimos n commits                                                           |
| --since, --after  |  Muestra los commits hechos despues de la fecha especificada                                      |
| --until, --before | Muestra los commits hechos antes de la fecha especificada                                         |
| --author          | Muestra solo los commits cuyo autor coincide con la cadena especificada                           |
| --committer       | Muestra solo los commits cuyo committer coincide con la cadena especificada                       |
| -S                | Muestra solo los commits que agregan o eliminan codigo que corresponda con la cadena especificada |

## Deshacer cosas
- Utiliza tu Staging Area para el nuevo commit, si no hay cambios preparados despues del commit que deseas reemplazar, entonces la instantanea lucira exactamente igual y lo unico que cambiaras sera el mensaje de confirmacion.
~~~
git commit --amend
~~~

### Deshacer un archivo preparado
- Deshace la preparacion del archivo especifico.
~~~
git reset HEAD <file>
~~~
> Ojito: Este comando `reset` es magico, te recomiendo investigar como usarlo para que haga cosas realmente interesantes.

### Deshacer un archivo modificado
- Deshace los cambios hechos en el directorio de trabajo
~~~
git restore <file>
~~~

---
## Trabajar con remotos
- Muestra los repositorios remotos configurados en tu maquina local, la opcion -v muestra las URLs
~~~
git remote
git remote -v
~~~

## Añadir repositorios remotos 
Es importante que domines esta teoria entretenida, es por ello que no debes quedarte solo con esta informacion, investiga a profundidad.
- Usa GitHub, es el programa mas usado para alojar tus repositorios remotos.
- Practica y prueba los siguiente comandos para analizar su funcionamiento, no esperes a que te digan que es lo que va a pasar, tu puedes probarlo.
- Te exigo tener creado un repositorio local y uno remoto. Nombralos como mas te guste.

Añadir un repositorio remoto **significa establecer una conexion entre tu repositorio local y cualquier otro repositorio remoto u repositorios remotos.** 

> Recuerda que el comando `git clone` realizaba muchas tareas por ti, lo que importa saber es que **hace automaticamente la relacion entre el repositorio remoto y tu repositorio local**, dicho repositorio local que tambien lo crea automaticamente. Por defecto añade el repositorio remoto con el nombre de `origin`, este nombre no es mas que **una referencia** para usarla en lugar de la URL completa.

Cuando inicializas un seguimiento, git crea automaticamente la rama `master` donde se almacena todo tu proyecto. Ten en cuenta que solo cuando realizas tu primera confirmacion (commit), git realiza esta accion.
No te quiero confundir pero no pienses erroneamente que solo puedes tener una rama local para seguir solo un repositorio remoto, de hecho, en un repositorio local puedes tener referencias a varios servidores (repositorios remotos). Me sentire bien conmigo mismo si es que entendiste que los repositorios remotos son solo referencias en los repositorios locales.

---
- Añade un remoto nuevo y asocia a un nombre que puedas referenciar facilmente.
~~~
git remote add [name] [url]
~~~

> El `name` no necesariamente debe ser igual al nombre del repositorio remoto, si entendiste eso de referencias, me diras que obviamente no debe ser igual ya que es solo una referencia para que me simplifique manipular dicho repositorio.

## Traer y combinar remotos
Ya tienes la referencia, ahora puedes realizar operaciones usando esta referencia.
- Trae toda la informacion que aun no tienes del repositorio remoto. Luego de hacer esto, tendrás referencias a todas las ramas del remoto, las cuales puedes combinar e inspeccionar cuando quieras.
~~~
git fetch [remote-name]
~~~
> Es importante destacar que el comando solo trae datos a tu repositorio local, ni lo combina automaticamente con tu trabajo ni modifica el trabajo que llevas hecho. La combinación con tu trabajo debes hacerla manualmente, creando y configurando ramas locales para que rastreen ramas remotas especificas y finalmente ejecutando el comando `git pull`. Si relacionas esto con lo aprendido te daras cuenta que desde ahora todo es igual.

## Enviar a tus remotos
- Envia la informacion de una rama local al servidor (repositorio remoto) que este referenciado en el repositorio local.
~~~
git push [remote-name] [branch-name]
~~~
> Si has configurado que una rama local siga a una rama remota especifica, no es necesario realizar esta especificacion, basta con `git push`. De hecho, cuando clonamos un repositorio, git hace automaticamente esta configuracion, por ello solo ejecutamos comandos como `git pull` y `git push`

## Inspeccionar un remoto
- Muestra informacion acerca de un remoto en particular.
~~~
git remote show [remote-name]
~~~

## Eliminar y renombrar remotos
- Renombra y/o elimina el repositorio remoto respectivamente.
~~~
git remote rename [back-name] [new-name]
git remote rm [remote-name]
~~~

## Dudas existenciales
- Que pasaria si en un contexto controlado, dos colaboradores intentan hacer exactamente los mismo movimientos y cambios en el codigo, es posible que el hash sea el mismo (?)
