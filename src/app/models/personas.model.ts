export class Personas {
    id_persona: number;
    id_carrera: number;
    tipo_documento: number;
    documento: string;
    nombre: string;
    correo: string;
    telefono: string;
    direccion: string;

    public static getValidators() {
        return {
            id_carrera: {
                validators: {
                    notEmpty: {
                        message: 'La Carrera es un campo obligatorio.'
                    },
                    regexp: {
                        regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                        message: '<b>El campo solo permite letras y números.</b>'
                    },
                },
            },
            tipo_documento: {
                validators: {
                    notEmpty: {
                        message: 'La el tipo de cocumento es un campo obligatorio.'
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
            documento: {
                validators: {
                    notEmpty: {
                        message: 'Documento es un campo obligatorio.'
                    },
                    regexp: {
                        regexp: /^[0-9]*$/i,
                        message: '<b>El campo solo permite solo números.</b>'
                    },
                    stringLength: {
                        min: 5,
                        max: 30,
                        message: 'Documento debe tener de 5 a  carácteres.'
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
            apellido: {
                validators: {
                    notEmpty: {
                        message: 'El Apellido es un campo obligatorio.'
                    },
                    regexp: {
                        regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                        message: '<b>El campo solo permite letras y números.</b>'
                    },
                    stringLength: {
                        min: 5,
                        max: 30,
                        message: 'El Apellido debe tener de 5 a 30 carácteres.'
                    },
                },
            },
            correo: {
                validators: {
                    notEmpty: {
                        message: 'El nombre es un campo obligatorio.'
                    },
                    regexp: {
                        regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ]*$/i,
                        message: '<b>El campo solo permite letras y números.</b>'
                    },
                    stringLength: {
                        min: 5,
                        max: 30,
                        message: 'El nombre debe tener de 5 a 30 carácteres.'
                    },
                },
            },
            telefono: {
                validators: {
                    notEmpty: {
                        message: 'Telefono es un campo obligatorio.'
                    },
                    regexp: {
                        regexp: /^[0-9]*$/i,
                        message: '<b>El campo solo permite números.</b>'
                    },
                    stringLength: {
                        min: 5,
                        max: 30,
                        message: 'Telefono debe tener de 5 a 30 carácteres.'
                    },
                },
            }, 
            direccion: {
                validators: {
                    notEmpty: {
                        message: 'Direccion es un campo obligatorio.'
                    },
                    regexp: {
                        regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                        message: '<b>El campo solo permite letras y números.</b>'
                    },
                    stringLength: {
                        min: 10,
                        max: 100,
                        message: 'Direccion debe tener de 10 a 100 carácteres.'
                    },
                },
            },
        }
    }
}