import { Component, OnInit } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { config } from 'app/shared/smartadmin.config';
import { CatActivos } from 'app/models';
declare var $;
@Component({
  selector: 'app-cat-activos-from',
  templateUrl: './cat-activos-from.component.html',
  styleUrls: ['./cat-activos-from.component.css']
})
export class CatActivosFromComponent implements OnInit {
  public aplicacion: CatActivos;
  public formulario: FormGroup;
  public cargando: boolean;
  verificador:string;
  constructor( private router: Router, private aroute: ActivatedRoute, private crud: CRUDService, private msj: AlertasService) { }

  ngOnInit() {
    this.aplicacion = new CatActivos();
  }

  verifica() {
    return this.verificador ? 'update' : 'insert';
  }

  save() {
    this.cargando = true;
    this.crud.save(`${config.APIRest.catactivos.add}/${this.verifica()}`, this.aplicacion, this.verifica()).subscribe(response => {
      this.msj.mostrarAlertaMessage("<b>Info.</b>", `<b>${this.msj.mensaje}</b>`, null);
      this.cancelar();
      this.cargando = false;
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cancelar();
      this.cargando = false;
    })
  }

  cancelar() {
    this.aplicacion = new CatActivos();
    this.router.navigate(['/parametro'], { relativeTo: this.aroute });
  }

  public confirmar() {
    $.SmartMessageBox({
      title: "<i class='fa fa-paper-plane txt-color-orangeDark'></i> ¿ Está seguro que los datos ingresados son los correctos.?",
      content: "<p class='txt-color-orangeDark'><b>Si es así haga click en ACEPTAR.</b></p>",
      buttons: '[ACEPTAR][CANCELAR]'
    }, (ButtonPressed, Value) => {
      if (ButtonPressed == "ACEPTAR") {
        this.save();
      }
    });
  }

}
