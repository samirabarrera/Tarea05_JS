/*Utilizando las propiedades y métodos agrupados en cada usuario
creado en el Problema III, vuelve a crear esos usuarios (objetos) pero
en esta ocasión crea los usuarios (objetos) utilizando una factory
function.*/

function devolverUser(id, nombre, apellido, email){  
    return {
        id: id,
        nombre: nombre,
        apellido: apellido,
        email: email,
        cambiarDireccion: function () {
            console.log('Verificando usuario...');
        },
    };
}

let user = devolverUser(0, 'Paola', 'Ortiz', 'paola@company.ru')
let user1 = devolverUser(1, 'Danilo', 'Rodriguez', 'danilo@company.ru')
let user2 = devolverUser(2, 'Pablo', 'Pérez', 'pablo@company.ru')
let user3 = devolverUser(3, 'Andrea', 'González', 'pablo@company.ru')
let user4 = devolverUser(4, 'Marta', 'Pérez', 'marta@company.ru')
let user5 = devolverUser(5, 'Daniela', 'Méndez', 'daniela@company.ru')

console.log(user);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
