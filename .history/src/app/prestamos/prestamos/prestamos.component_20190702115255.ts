import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {RegPrestamo } from 'app/models';
import { config } from 'app/shared/smartadmin.config';

declare var $;
declare var moment;
@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {

  @ViewChild('mdregPrestamo') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: RegPrestamo;
  public regPrestamo: RegPrestamo;
  fecha:string;
  hora:string;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.regPrestamo = new RegPrestamo();
    this.getAplicaciones();
  }
 
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.registroprestamo.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  saveValidar(valid) {
    if (!valid) return;
    if (this.regPrestamo.id_regpres) {
      this.save("update", `${config.APIRest.registroprestamo.update}/${this.regPrestamo.id_regpres}`);
    } else {
      this.save("insert",config.APIRest.registroprestamo.add);
    }
  }

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    let fe = new Date(this.convertirFecha(this.fecha,this.hora))
    this.regPrestamo.hora_inicio_hrapr = fe.getTime();
    this.regPrestamo.hora_fin_hrpr = fe.getTime();
    if(this.regPrestamo.hora_fin_hrpr >= this.regPrestamo.hora_inicio_hrapr)
    console.log(this.regPrestamo)
    this.crud.save(`${this.base}${url}`, this.regPrestamo, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
        }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getCast(id){
    if(id){
      console.log(new Date(+id));
      return new Date(+id);
    }
      
  }

  getFila(lugar){
    this.regPrestamo = new RegPrestamo();
    this.regPrestamo = Object.assign({}, lugar)
    this.modal.show();
  }
  cancelar(){
    this.regPrestamo = Object.assign({}, new RegPrestamo());
    $('#frmLugar').bootstrapValidator('resetForm', true);
    this.modal.hide();
  }

  open(){
    this.modal.show();
  }


  getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: RegPrestamo.getValidators()
    };
  }

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

}
