import { Component, OnInit } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {Activos ,CatActivos} from 'app/models';
import { config } from 'app/shared/smartadmin.config';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.css']
})
export class ActivosComponent implements OnInit {

  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Activos;
  public catparametros: CatActivos[];
  public parametroscat: CatActivos;


  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.getAplicaciones();
    this.parametroscat=new CatActivos();
    this.parametros= new Activos();
  }

 
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.activos.list}`).subscribe(response => {
      (this.parametros = response,
      this.cargando = false);
      this.crud.obtener(`${this.base}${config.APIRest.catactivos.list}`).subscribe(response => {
        this.parametroscat = response;
        this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    });
  });
   }
 public getNombre(id_categoria_ac): string{
    let categoria = this.catparametros.find(cat => cat.id_categoria = id_categoria_ac);
    if(categoria)
      return categoria.nombre;
    else return "No aplica";
  }

}
