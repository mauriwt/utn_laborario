export class ReqSofware{
    id_ubsoft: Number;
    id_ubicacion_esp:Number;
    id_software: Number;
    id_docente:Number;
    
 
    public static getValidators() {
        return {
           
          id_ubicacion_esp: {
            validators: {
           notEmpty: {
              message: 'Ubicacion es un campo obligatorio.'
                },
              },
        },id_software: {
            validators: {
           notEmpty: {
              message: 'Software es un campo obligatorio.'
                },
              },
        },id_docente: {
            validators: {
           notEmpty: {
              message: 'Docente es un campo obligatorio.'
                },
              },
        },
     
        }
    }
    }