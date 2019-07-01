export class UbActivos{
    id_ubicaciondeactivo: number;
    id_activo: number;
    id_ubicacion_esp: number;
    
 
    public static getValidators() {

        return {
           id_activo: {
              validators: {
                 notEmpty: {
                    message: 'Activo es obligatorio.'
                 },
              },
           },
           id_ubicacion_esp: {
            validators: {
               notEmpty: {
                  message: 'El lugar es obligatorio.'
               },
            },
         },
        }
     }
  }