import { Component, OnInit } from '@angular/core';
import { GenericoService, CRUDService, AlertasService } from 'app/providers';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { config } from 'app/shared/smartadmin.config';
import { CorAplicacion } from 'app/models';
declare var $;
@Component({
  selector: 'bio-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public aplicacion: CorAplicacion;
  public formulario: FormGroup;
  public cargando: boolean;
  verificador:string;
  constructor(private genServer: GenericoService, private router: Router, private aroute: ActivatedRoute, private crud: CRUDService, private msj: AlertasService) { }

  ngOnInit() {
   this.formulario = this.genServer.generar(CorAplicacion.campos())
    this.aplicacion = new CorAplicacion();
    this.getParametro();
  }

   getParametro() {
    this.aroute.params.subscribe((params: Params) => {
      if (params['codigo']) {
        this.verificador = params['codigo'];
        this.cargando = true;
        this.crud.obtener(`${this.genServer._base}${config.APIRest.aplicacion.base}/${params['codigo']}`).subscribe(response => {
          this.aplicacion = response;
          this.cargando = false;
        });
      }
    });
  }

  verifica() {
    return this.verificador ? 'update' : 'insert';
  }

  save() {
    this.cargando = true;
    this.crud.save(`${this.genServer._base}${config.APIRest.aplicacion.base}/${this.verifica()}`, this.aplicacion, this.verifica()).subscribe(response => {
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
    this.aplicacion = new CorAplicacion();
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
