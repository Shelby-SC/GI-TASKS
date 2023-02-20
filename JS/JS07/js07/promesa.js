const myURL= document.URL.toString(); //aquí estoy aplicando el DOM diciendole que vaya al document, o sea, al html. Con esto hago una solicitud de que me devuelva un recurso (la url)
const promesa = fetch(myURL) //El api fetch hace la parte asincrona pero con más control, lo que le estoy pasando aqui es un recurso***

//Las promesas usan métodos para controlar los resultados que se entreguen en los mecanismos asíncronos.
//Estos son los callbacks, hay 2 call backs aquí, el primero es una promesa.
//El segundo call back es que me mande un mensaje por si ha salido algún error.
promesa.then(resultado => console.log(resultado), e => console.log('error callback ${e}')); 
//En las promesas, se pueden mezclar funciones.

/* *********** Ejemplo de API: *****************/

/*
//let url = 'https://randomuser.me/api/'
let url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url)
    .then(Response => Response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data)
        let body = ""
        for (var i = 0; i < data.length; i++) {      
           body+=`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].email}</td>
                </tr>`
        }
        document.getElementById('data').innerHTML = body
        //console.log(body)
    }
*/


