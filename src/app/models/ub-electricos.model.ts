export class UbEqelectricos{
    
    id_ubeqelectrico: number;
    id_ubicacion_esp: number;
    id_eq_electrico: number;
 
    public static getValidators() {

        return {
           id_ubicacion_esp: {
              validators: {
                 notEmpty: {
                    message: ' El lugar es obligatorio.'
                 },
              },
           },
           id_eq_electrico: {
            validators: {
               notEmpty: {
                  message: ' El campo es obligatorio.'
               },
            },
         },
        }
     }
  }