import { Component, OnInit } from '@angular/core';
import { config } from 'app/shared/smartadmin.config';
import { GenericoService, CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import { CorAplicacion } from 'app/models';
import { parametro } from 'app/models/parametros.config';


declare var $;
@Component({
  selector: 'bio-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  private base = config.APIRest.url;
  public parametros: CorAplicacion;
  private dtoBiometrico:any
  public cargando: boolean;
  public conectar: boolean;
  public init: boolean;
  public codigos = [];
  public rutas:any;
  public horas:any;
  public backup:any;
  public ip:string;
  constructor(private crud: CRUDService, private genServer: GenericoService, private router: Router, private aroute: ActivatedRoute, private msj:AlertasService) { }

  ngOnInit() {
    this.getAplicaciones();
  }

  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.aplicacion.all}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  getFila(id) {
    this.router.navigate(['/parametro/save', id], { relativeTo: this.aroute });
  }

  go() {
    this.router.navigate(['/parametro/app/save'], { relativeTo: this.aroute });
  }

  /*
  cambiarEstado(id, estado) {
    this.cargando = true;
    this.crud.patch(`${this.base}${config.APIRest.biometrico.base}/codigo/${id}/estado/${!estado}`).subscribe(response => {
      this.getBiometricos();
    });
  }

  confirmSave(id, estado) {
    $.SmartMessageBox({
      title: "<i class='fa fa-sign-out txt-color-orangeDark'></i> Confirmar <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
      content: "¿ Está seguro de cambiar el estado ?",
      buttons: '[ACEPTAR][CANCELAR]'
    }, (ButtonPressed) => {
      if (ButtonPressed == "ACEPTAR") {
        this.cambiarEstado(id, estado);
      }
    });
  }

  go() {
    this.router.navigate(['/biometrico/bio/save'], { relativeTo: this.aroute });
  }

  seleccionar(e) {
    if (e.currentTarget.checked) {
      this.genServer.checkAll();
      this.codigos = this.genServer.getBioIds(this.biometricos);
    } else {
      this.genServer.noCheckAll();
      this.codigos = [];
    }
  }

  isChecked() {
    return $('input[name="check"]:checked').length > 0;
  }
  
  getItem(id) {
    this.ip = this.biometricos.find(b => b.bioCodigo === +id).bioDireccionIp;
    let dato = this.codigos.find(res => res === +id);
    dato ? this.codigos = this.codigos.filter(res => res !== dato) : this.codigos.push(+id);
  }

  procesar(ruta){
    this.confirmar(ruta);
  }

  save(ruta) {
    this.conectar = true;
    this.dtoBiometrico.idsBiometricos = this.codigos;
    this.crud.post(`${this.genServer._base}${config.APIRest.biometrico.base}${ruta}`, this.dtoBiometrico).subscribe(response => {
      console.log(response)
      this.msj.mostrarAlertaMessage("<b>Info.</b>", `<b>${this.msj.mensaje}</b>`, response.mensaje);
      this.conectar = false;
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.conectar = false;
    });
  }

  public confirmar(ruta) {
    $.SmartMessageBox({
      title: "<i class='fa fa-paper-plane txt-color-orangeDark'></i> ¿ Está seguro de realizar esta acción.?",
      content: "<p class='txt-color-orangeDark'><b>Si es así haga click en ACEPTAR.</b></p>",
      buttons: '[CANCELAR][ACEPTAR]'
    }, (ButtonPressed, Value) => {
      if (ButtonPressed == "ACEPTAR") {
        this.save(ruta);
      }
    });
  }


  ////////////////////////////////////////////////////////
 /// INICIAR PRIMERA CARGA EN EL BIOMETRICO (INICIO) ////
////////////////////////////////////////////////////////

  public inicializar() {
    this.init = true;
    $(window).on('beforeunload', function () {
      return false;
    });
    this.crud.obtener(`${this.genServer._base}${config.APIRest.biometrico.init}/${this.ip}`).subscribe(response => {
      this.init = false;
      $(window).off("beforeunload");
      this.confirmarSyncOk();
    }, err => {
      this.init = false;
      this.msj.mostrarAlertaError("<b>Error de sincronización</b>", "", err)
      $(window).off("beforeunload");
    });

  }

  public confirmarSync() {
    $.SmartMessageBox({
      title: "¿ Seguro desea continuar ?",
      content: "El procesamiento de los datos puede tardar varios minutos.",
      buttons: "[CANCELAR][ACEPTAR]"
    }, (ButtonPress, Value) => {
      if (ButtonPress === "ACEPTAR") {
        this.inicializar();
      }
    });
  }

  public confirmarSyncOk() {
    $.SmartMessageBox({
      title: "Información",
      content: "La creación de datos ha finalizado correctamente.",
      buttons: "[ACEPTAR]"
    }, (ButtonPress, Value) => {
      if (ButtonPress === "ACEPTAR") {
        console.log("listo");
      }
    });
  } */

  /////////////////////////////////////////////////////
 /// INICIAR PRIMERA CARGA EN EL BIOMETRICO (FIN) ////
/////////////////////////////////////////////////////
}
