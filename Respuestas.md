1. Participe  en varios proyectos,  que involucraron React-Native, React, Python, Amazon AWS y Azure Cloud. Hasta ese momento, no habia tenido la oportunidad de combinar tantas herramientas en un solo proyecto global. Lo que me permitió expandir mis habilidades  principalmente en backend.

2. Recientemente me encontre desarrollando un CMS para un instituto cuyos contenidos requieren ser gestionados sin programación, un frontend simple pero que el gestor de contenido este separado de la vista, como sugerencia  Wordpress parecia una buena opción, pero implicaba crear una enorme cantidad de recursos. Fue así que buscando un CMS basado en markdown encontre el proyecto Gatsby.

 * En primer lugar, en el frontend es completamente pensado para usar React.
 * Se puede acceder a traves de Graphql
 * Puede agregarse cualquier Base de Datos

Las ventajas que a mi punto de vista se tienen son:

* El Diseño puede ser muy flexible, y agil
* El cms es completamente headless se puede acceder a los contenidos a traves de llamadas a la  API
* Los sitios logrados pueden ser Render Side Rendering, amigables con SEO

El enlace al proyecto. https://github.com/gatsbyjs/gatsby


3.
a) Se asigna a cada elemento un objeto funcion
b) Se ejecutan los elementos de la funcion en printers(i) itera solo los 2 elementos
c) 0,1,2
d) 0,1,2,3,3,3
3)
4. A continuación el código:
```
let list = [
  {a:0,x:"1",y:"2",z:30},
  {foo:"bar",x:4,y:5},
  {x:-1,y:-2,z:"bar"},
  {x:-1,y:-2,z:{m:123}}
]

var valid = function (elemento){
  var keys = Object.keys(elemento)
  if(keys.indexOf('x') > 0  && keys.indexOf('y') > 0  && keys.indexOf('z') > 0){
    if(Number.isInteger(elemento['z']) && elemento['z'] > 10){
      return true
    }
  }
}

for(var i = 0; i<= list.length -1; i++){
    if(valid(list[i])){
      console.log(list[i])
    }
}

```
5.

Siendo 1E6 elementos la comparación de cada elemento se puede realizar de la siguiente manera:

1. Verificar NCores =  Cores del Sistema,
2. Verifica  RamSize = cantidad de Ram del sistema
3. Partir en NWorkers = TotalElemento / NCores
4. Obtener  paginasSize  =  RowsData/RamSistema

Por cada worker seria necesario lo siguiente:
  1. Obtener los elementos para PageSize[from,to]  
  2. Verifica que el elemento tenga las keys x,y,z
  3. Verifica que Z sea entero
  4. Verifica que Z sea mayor que Diez
  5. Escribir el  elemento
  6. Continuar en el siguiente elemento de Page

Dado que no interesa el orden de los elementos estos pueden ser guardados por cada worker en desorden, al final solo quedara en la salida los elementos que cumplan con el criterio.

Es necesario cuidar que los workers terminen debidamente, para ello deberiamos contar con un Queue de tareas para reintentar aquellos workers que no puedan terminar en el timeout necesario.

6.

III) Para obtener únicamente la data de la vista es necesario agregar una tabla auxiliar de muchos Productos a muchos Store con la siguiente query

Select Producto.Id, Product.name as productName, Product.description, Product.tags, Store.Id,Store.name,Store.lat,Store.Lon,Store.address,Store.zipCode, country.name as countryName from Product join ProductHasStore on ProductHasStore.IdProduct = Product.Id join Store on ProductHasStore.idStore = Store.Id join Country on Store.country = Country.id where ProductHasStore.IdProduct = `12345`

Para optimizar la busqueda es posible resolver la latencia  
a) Generar una vista de la consulta de la descripción del producto, agregando toda la información de las tiendas, indexar la tabla productos  por Id de Producto

II) Agregar un CACHE en el backend podria ser Redis, manteniendo un refresh de 5 min cuando se realizen las queries del mismo.

III)
a) Yo separaría la información en Dos Bases de Datos, la información de mayor consumo en una NoSQL como MongoDB donde guardaría los objetos con toda la información necesaria para las vistas, y utilizaría una base relacional  como Postgres para mantener la información que requiera transaccionalidad y evitar agregar información incompleta a la Base NoSql.

Para mantener simple la comunicaciónla API se encargaría de sincronizar la información usando una lista de Fields a mostrar que puede ser actualizada en ambas BD cuando sea requerido.


b)

Mongo -->  Product {
                Id : String
                ProductCode: Integer
                name: String
                description: String,
                tags: Collection,
                fields:{[
                  Meta:String
                  Type:String,
                  Description:String,
                  Label: String
                  ]
                }
                soldAt: [{
                  name:
                  Coordinates:{
                    latitude:String,
                    longitude:String
                  }
                  Address:{
                    City:String,
                    ZipCode:String
                    State:String
                    Country:String
                  }

                }]
            }

Postgress --> Product {
              ProductCode: Integer
              Name: Varchar(300),
              IdString: String
              }

              Fields{
                Name:String,
                Type: String,
                isVisible:Boolean,
                Description:String,
                Validation:{minValue,MaxValue,rules}
                isActive:Boolean
              }
