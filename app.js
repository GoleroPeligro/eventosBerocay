//creo la clase usuario y array usuarios

class Usuario {
    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

const usuarios = [];

let bandera = false

//DOM

let form = document.getElementById('formulario');
let inputNom = document.getElementById('inom');
let verUsuarios = document.getElementById('ver-usuarios');
let btnMostrar = document.getElementById('btnMostrar');

//Capturar datos

let iNombre = form.children[0].value;
let iApellido = form.children[1].value;
let iEmail = form.children[2].value;

inputNom.focus();

//Funciones
const validarDatos =()=> {
    iNombre = form.children[0].value;
    iApellido = form.children[1].value;
    iEmail = form.children[2].value;

    if(iNombre == '' || iApellido == '' || iEmail == ''){
        alert("Error debe completar todos los campos para continuar")
        bandera = false;
    } else {
        bandera = true;
    }
}

const agregarDatos = (e) => {
    e.preventDefault();
    validarDatos();
    if (bandera === true) {

        let datos = e.target

        usuarios.push(new Usuario(iNombre, iApellido, iEmail));

        datos.children[0].value = "";
        datos.children[1].value = "";
        datos.children[2].value = "";
        
        inputNom.focus();
    }
}

const mostrarDatos = (e) => {
    e.preventDefault();
    if (usuarios.length !== 0) {
        if (verUsuarios.className == '') {
            verUsuarios.className += "divDatos";
        }
        verUsuarios.innerHTML = '<h3>Lista de usuarios:</h3>';
        for (const datos of usuarios) {
            verUsuarios.innerHTML += `
        <p><strong>Nombre: </strong>${datos.nombre}</p>
        <p><strong>Apellido: </strong>${datos.apellido}</p>
        <p><strong>Email: </strong>${datos.email}</p> 
        <hr>`
        }
    }else {
        alert("No hay datos ingresados");
    }
}

//Eventos

form.onsubmit = agregarDatos;
btnMostrar.onclick = mostrarDatos;
