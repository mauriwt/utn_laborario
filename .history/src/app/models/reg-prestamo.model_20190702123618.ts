export class RegPrestamo{
    
    id_regpres: number;
    id_persona: number;
    id_ciclo: number;
    id_activos: number;
    id_ubicacion: number;
    id_docente: number;
    hora_inicio_hrapr: number;
    hora_fin_hrpr: number;
 
 public static getValidators() {
    return {
      id_regpres: {
          validators: {
         notEmpty: {
            message: 'El nombre es un campo obligatorio.'
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
    }
}
}
