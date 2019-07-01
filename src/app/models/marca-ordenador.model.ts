export class MarcaOrdenador{
    id_marca: number
    nombre_marca: string
    descripcion_marca:string
    origen_marca:string 

  public static getValidators() {
      return {
         nombre_marca: {
              validators: {
             notEmpty: {
                message: 'El nombre es un campo obligatorio.'
                  },
                  regexp: {
                      regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                      message: '<b>El campo solo permite letras y números.</b>'
                  },
                  stringLength: {
                      min: 2,
                      max: 20,
                      message: 'El nombre debe tener de 5 a 30 carácteres.'
                  },
          },
          },
          descripcion_marca: {
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
          origen_marca: {
              validators: {
             notEmpty: {
                message: 'Origen es un campo obligatorio.'
                  },
                  regexp: {
                      regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                      message: '<b>El campo solo permite letras y números.</b>'
                  },
                  stringLength: {
                      min: 5,
                      max: 50,
                      message: 'Origen debe tener de 5 a 30 carácteres.'
                  },
          },
          },
      }
  }
 }