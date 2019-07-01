export class Espacios{
    id_ubicacion_esp: number;
    id_tipo: number;
    nombre: string;
    descripcion: string;
    capacidad: string;
    piso: string;
 
    public static getValidators() {
        return {
            id_tipo: {
                validators: {
               notEmpty: {
                  message: 'Es un campo obligatorio.'
                    },   
            },
            },
            nombre: {
                validators: {
               notEmpty: {
                  message: 'El nombre es un campo obligatorio.'
                    },
                    regexp: {
                        regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                        message: '<b>El campo solo permite letras y números.</b>'
                    },
                    stringLength: {
                        min: 5,
                        max: 30,
                        message: 'El nombre debe tener de 5 a 30 carácteres.'
                    },
            },
            },
            
            descripcion: {
                validators: {
               notEmpty: {
                  message: 'La descripción es un campo obligatorio.'
                    },
                    regexp: {
                        regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                        message: '<b>El campo solo permite letras y números.</b>'
                    },
                    stringLength: {
                        min: 10,
                        max: 100,
                        message: 'La descripción debe tener como minimo 10 carácteres y máximo 100.'
                    },
            },
            },
            capacidad: {
                validators: {
               notEmpty: {
                  message: 'Capacidad es un campo obligatorio.'
                    },
                    regexp: {
                        regexp: /^[0-9]*$/i,
                        message: '<b>El campo solo permite números.</b>'
                    },
                    stringLength: {
                        min: 1,
                        message: 'Debe tener un carácter.'
                    },
            },
            },
            piso: {
                validators: {
               notEmpty: {
                  message: 'Planta Es un campo obligatorio.'
                    },
                regexp: {
                        regexp: /^[0-9]*$/i,
                        message: '<b>El campo solo permite números.</b>'
                    },
                    stringLength: {
                        min: 1,
                        message: 'Planta debe tener de 5 a 30 carácteres.'
                    },
            },
            },

        }
    }
   }