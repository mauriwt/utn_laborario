export class Mantenimiento{
        id_mantenimiento:number;
        fecha_ingreso?:Date;   
        id_pc?:number; 
        id_tmant?:number;   
        id_activos?:number; 
        id_eq_electrico?:number; 
        problema:string;  
        recomendacion:string;   
        m_preventivo:string;    
        m_correctivo:string;    
        fecha_entrega:string; 

        public static getValidators() {
                return {
                   fecha_ingreso: {
                        validators: {
                       notEmpty: {
                          message: 'es un campo obligatorio.'
                            },
                           
                    },
                    },
                    id_tmant: {
                        validators: {
                       notEmpty: {
                          message: 'es un campo obligatorio.'
                            },
                           
                    },
                    },

                    problema: {
                        validators: {
                       notEmpty: {
                          message: 'es un campo obligatorio.'
                            },
                            regexp: {
                                regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                                message: '<b>El campo solo permite letras y números.</b>'
                            },
                            stringLength: {
                                min: 10,
                                max: 100,
                                message: 'debe tener como minimo 10 carácteres y máximo 100.'
                            },
                    },
                    },
                    recomendacion: {
                        validators: {
                       notEmpty: {
                          message: 'es un campo obligatorio.'
                            },
                            regexp: {
                                regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                                message: '<b>El campo solo permite letras y números.</b>'
                            },
                            stringLength: {
                                min: 10,
                                max: 100,
                                message: 'debe tener como minimo 10 carácteres y máximo 100.'
                            },
                    },
                    },
                    m_preventivo: {
                        validators: {
                       notEmpty: {
                          message: 'es un campo obligatorio.'
                            },
                            regexp: {
                                regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                                message: '<b>El campo solo permite letras y números.</b>'
                            },
                            stringLength: {
                                min: 10,
                                max: 100,
                                message: 'debe tener como minimo 10 carácteres y máximo 100.'
                            },
                    },
                    },
                    m_correctivo: {
                        validators: {
                       notEmpty: {
                          message: 'es un campo obligatorio.'
                            },
                            regexp: {
                                regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                                message: '<b>El campo solo permite letras y números.</b>'
                            },
                            stringLength: {
                                min: 10,
                                max: 100,
                                message: 'debe tener como minimo 10 carácteres y máximo 100.'
                            },
                    },
                    },
                    fecha_entrega: {
                        validators: {
                       notEmpty: {
                          message: 'es un campo obligatorio.'
                            },
                           
                    },
                    },
                }
            }
           }