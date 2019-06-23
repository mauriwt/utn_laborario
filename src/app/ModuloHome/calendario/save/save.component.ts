
import { Component, OnInit, Input, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertasService, GenericoService } from 'app/providers';
import { ThCalendarioCab, ThCalendarioDet } from 'app/models';
import { CRUDService } from 'app/providers'
import { config } from 'app/shared/smartadmin.config';
import { CalendarioService } from './config';



declare var $;
declare var moment;

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css'],
  providers: [CalendarioService]
})
export class SaveComponent implements OnInit {

  @ViewChild('modalD') modal: any;
  @ViewChild('modalAno') modalAno: any;

  private hoy: number;
  private urlbase = config.APIRest.url.local;

  public calendario: ThCalendarioCab;
  public detCalendarios: ThCalendarioDet[];
  public detCalendario: ThCalendarioDet;
  private noJobDays: ThCalendarioDet[];
  private noJobDay: ThCalendarioDet;
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

  @Input() eventos: boolean;
  @Input() activo: boolean;
  @Output() finishEdit = new EventEmitter();



  constructor(private el: ElementRef, private router: Router, private aroute: ActivatedRoute, private msj: AlertasService, private crudServer: CRUDService, private gens: GenericoService, private calen: CalendarioService) {
    System.import('script-loader!smartadmin-plugins/bower_components/fullcalendar/dist/fullcalendar.min.js').then(() => {
      System.import('script-loader!smartadmin-plugins/bower_components/fullcalendar/dist/lang/es.js').then(() => {
        this.render()
        console.log("Constructor","render");
        this.readParametro();
      });
    });
    this.tarea = {};
    this.viewStatus = {};
    this.tareas = [];
  }

  ngOnInit() {
    console.log("ngOnInit","1");
    this.hoy = new Date((new Date()).setHours(0, 0, 0, 0)).getTime();
    this.calendario = new ThCalendarioCab();
    this.detCalendario = new ThCalendarioDet();
    this.detCalendarios = new Array<ThCalendarioDet>();
    this.noJobDays = new Array<ThCalendarioDet>();
    this.descripcion = "No Laborable";
    this.aroute.params.subscribe((params: Params) => {
      if (params['anio'])
        this.urlParam = params['anio'];
    });
  }

  /*ngOnChanges(){
    if(this.activo){
      console.log("ngOnChanges","2");
      this.draw();
    }
      
  }*/


  readParametro() {
    this.generar();
  }

  /*ngAfterViewInit() {
    if (!this.urlParam)
      this.modalAno.show();
  }*/

  public draw() {
    this.calendar.fullCalendar('render');
  }



  public render() {
    let self = this;
    let events = this.eventos || [];
    this.$calendarRef = $('#calendar', this.el.nativeElement);
    this.calendar = this.$calendarRef.fullCalendar({
      lang: 'es',
      header: {
        left: 'title',
      },
      contentHeight: 550,
      //events
      events: [
        
      ],
      timeFormat: 'HH:mm',
      displayEventTime: false,
      eventClick: function (calEvent, jsEvent, view) {
        if (calEvent.id != -1 && self.msj.convertirFecha(calEvent.start).getTime() >= self.hoy) {
          self.confirmDelete(calEvent);
        } else
          self.msj.mostrarAlertaMessage("<b>No permitido</b>", "Las fechas menores al día actual no se pueden modificar.", "")
      },
      dayClick: function (date, jsEvent, view) {
        date.add(5, 'hours');
        let cast = self.msj.convertirFecha(date);
        let fechaIn = cast.getTime()
        self.fechaInicio = new Date(fechaIn);
                self.modal.show();

        /*if (self.noJobDays.length > 0) {
          if (cast.getFullYear() == self.calendario.cabAnio) {
            if (fechaIn >= self.hoy) {
              let dato = self.noJobDays.find(f => fechaIn === f.cadFecha.getTime());
              if (!dato) {
                self.fechaInicio = new Date(fechaIn);
                self.modal.show();
              } else {
                self.msj.mostrarAlertaMessage("<b>No permitido</b>", "Esté día ya se encuentra agregado como dia no laborable.", "")
              }
            } else
              self.msj.mostrarAlertaMessage("<b>No permitido</b>", "Las fechas menores al día actual no se pueden modificar.", "")
          } else {
            self.msj.mostrarAlertaMessage("<b>Aviso</b>", "Solo puede editar el año seleccionado <b>(" + self.calendario.cabAnio + ")</b>.", "")
          }
        } else {
          self.msj.mostrarAlertaMessage("<b>Aviso</b>", "Habilite el calendario para visualizar los días no laborables.", "")
        }*/
      },
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

  ngOnDestroy() {
    console.log("Destruccion")
    this.calendar.fullCalendar('destroy')
  }

  public moverCalendario(date) {
    this.calendar.fullCalendar('gotoDate', date);
  }
  //gotoDate

  public next() {
    $('.fc-next-button', this.el.nativeElement).click();
  }

  public prev() {
    $('.fc-prev-button', this.el.nativeElement).click();
  }

  public today() {
    $('.fc-today-button', this.el.nativeElement).click();
  }

  public getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      //fields: Tarea.getValidators()
    };
  }

  reset() {
    this.fechaInicio = null;
    this.modal.hide();
  }



  public diasNoLab() {
    this.noJobDay = new ThCalendarioDet();
    this.noJobDay = this.detCalendarios.find(item => item.cadFecha.getTime() === this.fechaInicio.getTime());
    if (this.noJobDay) {
      this.noJobDay.cadNoLaborable = true;
      this.noJobDay.cadDescripcion = this.descripcion;
      this.noJobDays.push(this.noJobDay);
    }

    this.viewStatus.insert = true;
    this.tarea = this.calendar.fullCalendar("renderEvent", {
      title: this.descripcion,
      start: this.fechaInicio,
      id: this.tareas.length,
      className: "bg-color-red"
    }, true);
    this.tareas.push(this.tarea);
    this.viewStatus.insert = false;
    this.viewStatus.settingTareaData = false;
    this.modal.hide();
    this.descripcion = "No Laborable";
    this.cancelar();

  }

  generar() {
    this.calendar.fullCalendar('removeEvents');
    this.viewStatus.insert = true;
    this.moverCalendario(new Date())
   
    this.tareas.push(this.tarea);
    for (let i = 0; i < 5; i++) {
      this.tarea = this.calendar.fullCalendar("renderEvent", {
        title: 'hola mundo ' + i,
        start:  `2019-04-1${i} 08:00`,
        end: `2019-04-1${i} 17:00`,
        id: i,
      }, true);
      this.tareas.push(this.tarea);
      this.viewStatus.insert = false;
      this.viewStatus.settingTareaData = false;
    }
  }

  remove() {
    this.tareas = [];
    this.viewStatus.insert = true;
    this.calendar.fullCalendar('removeEvents');
    this.finishEdit.emit(this.tareas);
    this.viewStatus = {};
    this.viewStatus.insert = false;

  }
  public deleteTarea(event) {
    this.calendar.fullCalendar('removeEvents', event.id);
    this.tareas = this.tareas.filter(item => item[0].id !== event.id);
    this.noJobDays = this.noJobDays.filter(item => item.cadFecha.getTime() !== event.start._i.getTime());
  }

  public cancelar() {
    this.viewStatus.generateData = false;
    this.calendar.fullCalendar('removeEvents', -1);
    this.viewStatus.settingTareaData = false;
    this.tarea = {};
    $('.datepicker').val("");
  }

  public confirmDelete(event) {
    $.SmartMessageBox({
      title: "<i class='fa fa-exclamation-triangle txt-color-orangeDark'></i> Confirmar <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span>",
      content: `¿ Está seguro de eliminar el <b class='txt-color-orangeDark'>${event.title}</b> ?. (<b>${event.start._d}</b>)`,
      buttons: '[CANCELAR][ACEPTAR]'

    }, (ButtonPressed) => {
      if (ButtonPressed == "ACEPTAR") {
        this.deleteTarea(event);
      }
    });

  }
  /////////Guadar calendario########

  validarCal() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: ThCalendarioCab.getValidators()
    };
  }
  crearAnio(valid) {
    if (!valid) return;
    let i = 1;
    while (i <= 12) {
      this.detCalendarios = this.detCalendarios.concat(this.calen.viewcalendario(this.calendario.cabAnio, i));
      i++;
    }
    this.modalAno.hide();
    this.generar();
  }

  guardar() {
    let tmp: any[] = this.detCalendarios;
    let update = [];
    for (let i of this.noJobDays) {
      tmp = tmp.filter(det => det.cadFecha.getTime() !== i.cadFecha.getTime())
    }
    for (let item of tmp) {
      this.detCalendario = new ThCalendarioDet();
      this.detCalendario = item;
      this.detCalendario.cadNoLaborable = false;
      this.detCalendario.cadDescripcion = "";
      update.push(this.detCalendario);
    }
    this.calendario.thCalendarioDets = update.concat(this.noJobDays).sort(this.msj.orderBy("cadFecha"));
  }

  saveCalendar(ruta) {
    this.insertar = true;
    this.crudServer.save(`${this.urlbase}${config.APIRest.calendario.base}`, this.calendario, ruta).subscribe(response => {
      this.router.navigate(['/configuracion/save', response.cabCodigo], { relativeTo: this.aroute });
      this.idTmp = response.cabCodigo;
      this.msj.mostrarAlertaMessage("<b>Información</b>", `<b>Los cambios en el calendario se guardaron correctamente.</b>`, "");
      this.insertar = false;
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.router.navigate(['/configuracion'], { relativeTo: this.aroute });
    });
  }

  public confirmSave() {
    $.SmartMessageBox({
      title: "<i class='fa fa-exclamation-triangle txt-color-orangeDark'></i> Confirmar <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span>",
      content: "¿ Está seguro de guardar todos los cambios ?",
      buttons: '[CANCELAR][ACEPTAR]'

    }, (ButtonPressed) => {
      this.guardar();
      if (ButtonPressed == "ACEPTAR") {
        if (!this.urlParam && this.idTmp == null) {
          this.saveCalendar("insert");
        }
        else
          this.saveCalendar("update");
      } else
        this.calendario.thCalendarioDets = [];

    });

  }

  back() {
    window.history.back();
  }

}

