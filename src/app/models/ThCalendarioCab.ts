export class ThCalendarioCab {

    cabCodigo: number;
    cabActivo: boolean;
    cabAnio: number;
    cabDescripcion: string;
    thCalendarioDets: any;

    constructor() { }

    public static getValidators() {
        return {
            cabAnio: {
                validators: {
                    notEmpty: {
                        message: 'El año es obligatorio.'
                    },
                    regexp: {
                        regexp: /^[0-9]*$/,
                        message: 'El campo solo permite números.</b>'
                    },
                    stringLength: {
                        min: 4,
                        max: 4,
                        message: 'El año debe tener 4 dígitos. Ejemplo <b>(2015)</b>'
                    },
                }
            },
            cabDescripcion: {
                validators: {
                    notEmpty: {
                        message: 'La descripción no puede esta vacía.'
                    },
                    regexp: {
                        regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                        message: '<b>El campo solo permite letras y números.</b>'
                    },
                    stringLength: {
                        min: 10,
                        message: 'La descripción debe tener como minimo diez carácteres.'
                    },
                }
            }
        }
    }

}
