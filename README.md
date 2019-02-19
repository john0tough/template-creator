# template-creator
Plantilla para crear librerias NPM de Typescript, empleando WebPack como ejecutor de tareas y el plugin ts-loader como transpilador a Javascript.

La transpilacion genera los Types para poder emplear la libreria con otros proyectos de TypeScript.
##Uso

1. Ejecute el script index.js 
```
node template-creator/index.js [Nombre_Del_Proyecto]
```
2. Se genera una nueva carpeta [Nombre_Del_Proyecto] que contiene el proyecto NPM

##Tareas del proyecto NPM Typescript:
"prebuild": "npm run lint"
"test": "karma start ./test/karma.config.js
"build:jsdevelop": "webpack --config webpack.dev.js"
"build:js": "webpack --config webpack.prod.js"
"build:develop": "npm run build:jsdevelop && node postbuild.js"
"build": "npm run build:js && node postbuild.js"
"pack": "npm pack -cwd ./dist && node pack.js"