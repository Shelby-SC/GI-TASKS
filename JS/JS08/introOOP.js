//Esta es la forma por *prototipos* de implementar objetos en Javascript:
let persona = {
    nombre: 'Pierre',
    apellido: 'Jean',
    nombreCompleto: function() {
        return 'el nombre es ' + this.nombre + ' ' + this.apellido //"This" es una palabra reservada. Se refiere al dueño de la función, en éste caso, persona. No se usan flechas en las funciones porque "this" hace referencia a un objeto global.
    }
} //Aquí, está implicito la abstraccion pues al ser persona y tener un nombre y características, ya lo hace diferente.

console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());