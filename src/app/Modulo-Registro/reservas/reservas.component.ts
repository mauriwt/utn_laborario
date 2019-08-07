
import { Component, OnInit, Input, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertasService, GenericoService, CRUDService } from 'app/providers';
import { Reservas, Personas, Espacios, Docentes } from 'app/models';
import { config } from 'app/shared/smartadmin.config';
import { CalendarioService } from './config';
import { TabDirective } from 'ngx-bootstrap/tabs';

import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { FormControl } from '@angular/forms';


declare var $;
declare var moment;
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

 

  @ViewChild('modalAno') modalAno: any;
  @ViewChild('mdrEserva') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Reservas[];
  public reserva: Reservas;
  public insertar: boolean;
  public urlParam: number;
  public idTmp: number;
  private $calendarRef: any;
  private calendar: any;
  public tarea: any;
  public tareas: any;
  public viewStatus: any;
  public fechaInicio: any;
  public descripcion: string;
  public personas: Personas[];
  public espacios: Espacios[];
  public docente: Docentes[];
  fecha: string;
  hora: string;
  id_persona: string;
  fechatotal:Date;
  hoy:number;

  @Input() eventos: boolean;
  @Input() activo: boolean;
  @Output() finishEdit = new EventEmitter();



  constructor(private el: ElementRef, private router: Router,
     private route: ActivatedRoute, private msj:
      AlertasService, 
       private gens: GenericoService, 
       private crud: CRUDService, private aroute: ActivatedRoute,
      private calen: CalendarioService) {
    System.import('script-loader!smartadmin-plugins/bower_components/fullcalendar/dist/fullcalendar.min.js').then(() => {
      System.import('script-loader!smartadmin-plugins/bower_components/fullcalendar/dist/lang/es.js').then(() => {
        System.import('script-loader!smartadmin-plugins/bower_components/moment/min/moment.min.js').then(() => {
          this.render()
          console.log("Constructor", "render", "moment");
        
        });
      });
    });
    this.tarea = {};
    this.viewStatus = {};
    this.tareas = [];
  }

  ngOnInit() {
    console.log("ngOnInit", "1");
    this.hoy = new Date((new Date()).setHours(0, 0, 0, 0)).getTime();
    this.descripcion;
    this.aroute.params.subscribe((params: Params) => {
      if (params['anio'])
        this.urlParam = params['anio'];
    });
    this.reserva = new Reservas();
    this.getAplicaciones();
    this.personas = new Array<Personas>();
    this.espacios = new Array<Espacios>();
    this.docente = new Array<Docentes>();
    this.parametros = new Array<Reservas>();
    this.getPersonas();
    this.getDocentes();
    this.getEspacios();
  }



getAplicaciones() {
  this.cargando = true;
  this.crud.obtener(`${this.base}${config.APIRest.registroreservacion.list}`).subscribe(response => {
    this.parametros = response;
    this.cargando = false;
  }, error =>{
    this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
    this.cargando = false;
  })
}

getPersonas() {
  this.cargando = true;
  this.crud.obtener(`${this.base}${config.APIRest.personas.list}`).subscribe(response => {
    this.personas = response;
    this.cargando = false;
  }, error =>{
    this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
    this.cargando = false;
  })
}
getEspacios() {
  this.cargando = true;
  this.crud.obtener(`${this.base}${config.APIRest.espacios.list}`).subscribe(response => {
    this.espacios = response;
    this.cargando = false;
  }, error =>{
    this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
    this.cargando = false;
  })
}
getDocentes() {
  this.cargando = true;
  this.crud.obtener(`${this.base}${config.APIRest.docentes.list}`).subscribe(response => {
    this.docente = response;
    this.cargando = false;
  }, error =>{
    this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
    this.cargando = false;
  })
}

getNpersona(idPerona): string{
  let categoriap = this.personas.find(cat => cat.id_persona == idPerona);
  if(categoriap)
    return "Est: "+ categoriap.nombre;
  else return " ";
}

public lista: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8'];

 /** Metodos para realizar el Type head*/
datospersona(idPerona): string{
  let categoriap = this.personas.find(cat => cat.documento == idPerona);
  if(categoriap)
    return " Nombre: "+ categoriap.nombre + "\n " + "Telefono "+ categoriap.telefono +"\n "+"Correo "+ categoriap.correo;
  else return " ";
}
datosdocente(idPerona): string{
  let categoriap = this.docente.find(cat => cat.documento_doc == idPerona);
  if(categoriap)
    return "Nombre: "+ categoriap.apellido_doc +" "+ categoriap.nombre_doc + "\n "+"Telefono "+ categoriap.telefono_doc + "\n "+"Correo"+ categoriap.correo_doc;
  else return " ";
}
  enviarid(idPerona): string{
  let categoriap = this.personas.find(cat => cat.documento == idPerona);
  if(categoriap)
    return categoriap.id_persona + "";
    else return " ";
}



noResult = false;
selectedOption: any;
selectedValue: string;
    typeaheadNoResults(event: boolean): void {
      this.noResult = event;
    }
    onSelect(event: TypeaheadMatch): void {
      this.selectedOption = event.item;
    }

saveValidar(valid) {
  if (!valid) return;
  if (this.reserva.id_regresv) {
    this.save("update", `${config.APIRest.registroreservacion.update}/${this.reserva.id_regresv}`);
  } else {
    this.save("insert",config.APIRest.registroreservacion.add);
  }
}

save(tipo, url) {
 this.cargando = true;
  this.modal.hide();
  let fe = new Date(this.convertirFecha(this.fecha, this.hora))
  this.reserva.fecha_inicio = fe.getTime();
  console.log(this.reserva)
  this.crud.save(`${this.base}${url}`, this.reserva, tipo).subscribe(response => {
    this.getAplicaciones();
    this.cancelar();
    this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
  }, error => {
    this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
    this.cargando = false;
  })
}

public render() {
  let self = this;
  let events = this.eventos || [];
  this.$calendarRef = $('#calendar', this.el.nativeElement);
  this.calendar = this.$calendarRef.fullCalendar({
    lang: 'es',
    header: {
      left: 'prev,next today, month,agendaWeek,agendaDay',
   },
    businessHours: true, // display business hours
    editable: true,
    contentHeight: 1000,
    //events
    events: [
     
    ],
    timeFormat: 'HH:mm',
    displayEventTime: false,
   eventRender: (event, element, icon) => {
      if (event.description != "") {
        element.find('.fc-event-title').append("<br/><span class='ultra-light'>" + event.description + "</span>");
      }
      if (event.icon != "") {
        element.find('.fc-event-title').append("<i class='air air-top-right fa " + event.icon + " '></i>");
      }
    }
  }
  );
}

getFila(reserva){
  this.reserva = new Reservas();
  this.reserva = Object.assign({}, reserva)
  this.modal.show();
}
cancelar(){
  this.reserva = Object.assign({}, new Reservas());
  $('#frmActivo').bootstrapValidator('resetForm', true);
  this.modal.hide();
}

open(){
  this.modal.show();
}
getCast(id) {
  if (id) {
   // console.log(new Date(+id));
    return new Date(+id);
  }}

public setFecha(e) {
  $("#fecha").val(e).trigger('input');
  this.fecha = e;
}
public setHora(e) {
  $("#hora").val(e).trigger('input');
  this.hora = e;
}


public convertirFecha(fecha: string,hora: string) {
  if (fecha && hora)
    return moment(`${fecha} ${hora}`, 'DD/MM/yyyy HH:mm').toDate();
  else if (fecha)
    return moment(fecha, 'DD/MM/yyyy').toDate();
  return null;
}

ctrl = new FormControl('', (control: FormControl) => {
  const value = control.value;
  if (!value) { return null; }
  if (value.hour <= 6) { return { tooEarly: true }; }
  if (value.hour >= 20) {
    if (value.minute >= 1) {
      return { tooLate: true };
    }
  }
  return null;
});

ctrlfin = new FormControl('', (control: FormControl) => {
  const value = control.value;
  if (!value) { return null; }
  if (value.hour <= 6) { return { tooEarly: true }; }

  if (value.hour < this.ctrl.value.hour ) {
    return { tooIgual: true }; } else {
    if ((value.hour + value.minute) <= (this.ctrl.value.hour + (this.ctrl.value.minute + 30))) {

      return { tooIgual: true };
    }
  }
  if (value.hour >= 21) {
    if (value.minute > 0) { return { tooLate: true }; }
  }
  return null;
});

getValidators() {
  return {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: Reservas.getValidators()
  };
}


reset() {
  this.fechaInicio = null;
  this.modal.hide();
}

back() {
  window.history.back();
}
/** Vistas de calendario 
value: string;
onSelect(data: TabDirective): void {
  this.value = data.heading;
}
*/
}