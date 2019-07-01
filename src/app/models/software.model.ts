export class Software{
    id_software: number;      
   nombre:string;               
   version:string;              
   descripcion:string;          
   tipo_licencia:string;        
   licencia:string;

   public static getValidators() {
    return {
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
        version: {
            validators: {
           notEmpty: {
              message: 'Verision es un campo obligatorio.'
                },
                regexp: {
                    regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                    message: '<b>El campo solo permite letras y números.</b>'
                },
                stringLength: {
                    min: 10,
                    max: 100,
                    message: 'Version debe tener como minimo 10 carácteres y máximo 100.'
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
      tipo_licencia: {
        validators: {
       notEmpty: {
          message: 'Tipo de liciencia es un campo obligatorio.'
            },
          },
    },
    licencia: {
        validators: {
       notEmpty: {
          message: 'Licencia es un campo obligatorio.'
            },
            regexp: {
                regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                message: '<b>El campo solo permite letras y números.</b>'
            },
            stringLength: {
                min: 3,
                max: 30,
                message: 'Licencia debe tener como minimo 10 carácteres y máximo 100.'
            },
    },
    },
    }
}
}