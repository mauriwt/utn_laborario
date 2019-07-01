import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {Ordenador, MarcaOrdenador } from 'app/models';
import { config } from 'app/shared/smartadmin.config';
declare var $;
@Component({
  selector: 'app-ordenador',
  templateUrl: './ordenador.component.html',
  styleUrls: ['./ordenador.component.css']
})
export class OrdenadorComponent implements OnInit {

  @ViewChild('mdoRdenador') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Ordenador;
  public oRdenador: Ordenador;
  public marca: MarcaOrdenador;
  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.oRdenador = new Ordenador();
    this.getAplicaciones();
    this. getAplicaciones();
  }
  public lista: string[] = [
    'Defensas',
    'Reunioes',
    'Capacitaciones',
    'Eventos culturales',
    'Jornadas Academicas'];

  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.ordenadormarca.list}`).subscribe(response => {
      this.marca = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }
  getAplicacionesMAr() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.ordenador.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  saveValidar(valid) {
    if (!valid) return;
    if (this.oRdenador.id_pc) {
      this.save("update", `${config.APIRest.ordenador.update}/${this.oRdenador.id_pc}`);
    } else {
      this.save("insert",config.APIRest.Ordenador.add);
    }
  }

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.oRdenador)
    this.crud.save(`${this.base}${url}`, this.oRdenador, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getFila(lugar){
    this.oRdenador = new Ordenador();
    this.oRdenador = Object.assign({}, lugar)
    this.modal.show();
  }
  cancelar(){
    this.oRdenador = Object.assign({}, new Ordenador());
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
      fields: Ordenador.getValidators()
    };
  }

}
