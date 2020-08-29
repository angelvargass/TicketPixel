'use strict';

let iniciarSesion = async(correo, contrasenna) => {
    let resultado;
    await axios({
            method: 'post',
            url: 'https://proyecto-software-prod.herokuapp.com/api/iniciar-sesion',
            responseType: 'json',
            data: {
                correo: correo,
                contrasenna: contrasenna
            }
        })
        .then(async function(res) {
            resultado = await res.data;
            console.log(res.data);

            if (res.data.resultado) {
                sessionStorage.setItem('conectado', res.data.resultado);
                sessionStorage.setItem('idUsuario', res.data.usuario._id);
                sessionStorage.setItem('gradoUsuario', res.data.usuario.grado);
                sessionStorage.setItem('fotoUsuario', res.data.usuario.imagen);
                sessionStorage.setItem('correoUsuario', res.data.usuario.correo);
                sessionStorage.setItem('nombreUsuario', res.data.usuario.primerNombre);
                sessionStorage.setItem('apellidoUsuario', res.data.usuario.primerApellido)
            }

        })
        .catch(function(error) {
            //console.log(error);
        });

    return resultado;
}